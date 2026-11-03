import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ConnectedGlobe3DProps {
  className?: string;
}

interface CityNode {
  name: string;
  country: string;
  lat: number;
  lng: number;
  delegations: number;
  isHost?: boolean;
}

const CITIES: CityNode[] = [
  { name: 'Lucknow (SMRJ Host)', country: 'India', lat: 26.8467, lng: 80.9462, delegations: 120, isHost: true },
  { name: 'New Delhi', country: 'India', lat: 28.6139, lng: 77.2090, delegations: 42 },
  { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, delegations: 38 },
  { name: 'Dehradun', country: 'India', lat: 30.3165, lng: 78.0322, delegations: 24 },
  { name: 'Kolkata', country: 'India', lat: 22.5726, lng: 88.3639, delegations: 28 },
  { name: 'Bengaluru', country: 'India', lat: 12.9716, lng: 77.5946, delegations: 30 },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, delegations: 14 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, delegations: 18 },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, delegations: 22 },
  { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, delegations: 12 },
  { name: 'Geneva', country: 'Switzerland', lat: 46.2044, lng: 6.1432, delegations: 15 },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, delegations: 10 }
];

// Helper to convert Lat/Lng to Vector3 on sphere of given radius
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Great circle curved line generator between two points
function createSplineArc(p1: THREE.Vector3, p2: THREE.Vector3, elevation: number = 0.35): THREE.CatmullRomCurve3 {
  const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
  const distance = p1.distanceTo(p2);
  mid.setLength(p1.length() + distance * elevation);
  return new THREE.CatmullRomCurve3([p1, mid, p2]);
}

export const ConnectedGlobe3D: React.FC<ConnectedGlobe3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedCity, setSelectedCity] = useState<CityNode | null>(CITIES[0]);
  const [totalSchools] = useState(384);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Globe Globe Geometry & Materials
    const globeRadius = 3.2;
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial orientation: tilt slightly so India is front and center
    globeGroup.rotation.y = -Math.PI / 2.2;
    globeGroup.rotation.x = 0.25;

    // Translucent Core Sphere
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xFAF8F5,
      roughness: 0.8,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // Subtle Purple & Gold Atmosphere Glow
    const haloGeo = new THREE.SphereGeometry(globeRadius * 1.04, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xEDC868,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(halo);

    // Wireframe Meridians & Parallels (Lat/Lng grid lines)
    const gridGeo = new THREE.SphereGeometry(globeRadius + 0.02, 36, 18);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x563F6A,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(grid);

    // Equatorial and Orbital Ring
    const ringGeo = new THREE.TorusGeometry(globeRadius * 1.35, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xEDC868,
      transparent: true,
      opacity: 0.35
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    globeGroup.add(ring);

    // Secondary tilted celestial ring
    const ring2 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      color: 0x563F6A,
      transparent: true,
      opacity: 0.2
    }));
    ring2.rotation.x = Math.PI / 3.2;
    ring2.rotation.y = 0.4;
    globeGroup.add(ring2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFF9F0, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xEDC868, 1.5);
    dirLight.position.set(6, 10, 8);
    scene.add(dirLight);

    const purpleBackLight = new THREE.DirectionalLight(0x563F6A, 1.2);
    purpleBackLight.position.set(-8, -6, -8);
    scene.add(purpleBackLight);

    // Plot City Points
    const hostNode = CITIES.find((c) => c.isHost)!;
    const hostPos = latLngToVector3(hostNode.lat, hostNode.lng, globeRadius);

    const markerMeshes: { mesh: THREE.Mesh; city: CityNode }[] = [];

    CITIES.forEach((city) => {
      const pos = latLngToVector3(city.lat, city.lng, globeRadius);

      // Dot marker
      const dotGeo = new THREE.SphereGeometry(city.isHost ? 0.12 : 0.065, 16, 16);
      const dotMat = new THREE.MeshStandardMaterial({
        color: city.isHost ? 0xEDC868 : 0x563F6A,
        emissive: city.isHost ? 0xEDC868 : 0x563F6A,
        emissiveIntensity: city.isHost ? 1.0 : 0.4
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      globeGroup.add(dot);
      markerMeshes.push({ mesh: dot, city });

      // If host, add pulsating aura
      if (city.isHost) {
        const auraGeo = new THREE.RingGeometry(0.14, 0.26, 32);
        const auraMat = new THREE.MeshBasicMaterial({
          color: 0xEDC868,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6
        });
        const aura = new THREE.Mesh(auraGeo, auraMat);
        aura.position.copy(pos.clone().multiplyScalar(1.02));
        aura.lookAt(pos.clone().multiplyScalar(2));
        globeGroup.add(aura);
      }

      // Connecting Curved Arcs to Lucknow host
      if (!city.isHost) {
        const arc = createSplineArc(hostPos, pos, 0.22);
        const points = arc.getPoints(40);
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0xEDC868,
          transparent: true,
          opacity: 0.35,
          linewidth: 1.5
        });
        const line = new THREE.Line(lineGeo, lineMat);
        globeGroup.add(line);
      }
    });

    // Raycasting for city pin selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(markerMeshes.map((m) => m.mesh));
      if (intersects.length > 0) {
        const hit = markerMeshes.find((m) => m.mesh === intersects[0].object);
        if (hit) {
          setSelectedCity(hit.city);
        }
      }
    };

    // Drag to rotate globe
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('click', handlePointerDown);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animId: number;
    const animate = () => {
      // Gentle auto-rotation when not dragging
      if (!isDragging) {
        globeGroup.rotation.y += 0.0018;
      }
      ring.rotation.z += 0.001;
      ring2.rotation.z -= 0.0008;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('click', handlePointerDown);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-[520px] flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing focus:outline-none"
      />

      {/* Floating Info Overlay */}
      <div className="absolute top-6 left-6 z-10 bg-cream/90 backdrop-blur-md border border-gold/40 p-4 rounded-xl shadow-lg max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple">
            वसुधैव कुटुम्बकम् · Connected World
          </span>
        </div>
        <p className="text-xs text-ink-muted leading-relaxed">
          The globe represents humanity as one family, connecting delegatory hubs across India and the world to the Lucknow summit.
        </p>
        <div className="mt-3 pt-3 border-t border-purple/10 flex items-center justify-between">
          <div>
            <div className="text-xl font-display font-bold text-purple">{totalSchools}+</div>
            <div className="text-[10px] uppercase tracking-wider text-ink-muted">Participating Schools</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-display font-bold text-gold-dark">12</div>
            <div className="text-[10px] uppercase tracking-wider text-ink-muted">Global Hubs</div>
          </div>
        </div>
      </div>

      {/* Selected City Card */}
      {selectedCity && (
        <div className="absolute bottom-6 right-6 z-10 bg-purple text-cream p-4 rounded-xl border border-gold/40 shadow-xl max-w-xs">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-display text-lg text-gold font-semibold">{selectedCity.name}</h4>
            {selectedCity.isHost && (
              <span className="px-2 py-0.5 bg-gold text-purple text-[10px] font-bold uppercase rounded">
                Host Summit
              </span>
            )}
          </div>
          <p className="text-xs text-cream/75 mt-1">{selectedCity.country}</p>
          <div className="mt-2 text-xs flex items-center justify-between text-cream/90">
            <span>Registered Delegations:</span>
            <span className="font-semibold text-gold">{selectedCity.delegations}</span>
          </div>
        </div>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-4 left-6 text-[10px] text-ink-muted tracking-wider uppercase hidden sm:block">
        Drag to rotate · Click node to inspect hub
      </div>
    </div>
  );
};
