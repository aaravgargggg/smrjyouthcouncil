import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SpiralStaircase3DProps {
  activeLanding?: number;
  onSelectLanding?: (landingIndex: number) => void;
  className?: string;
}

export const SpiralStaircase3D: React.FC<SpiralStaircase3DProps> = ({
  activeLanding = 1,
  onSelectLanding,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const targetCameraPos = useRef(new THREE.Vector3(12, 6, 14));
  const targetLookAt = useRef(new THREE.Vector3(0, 3, 0));
  const currentCameraPos = useRef(new THREE.Vector3(12, 6, 14));
  const currentLookAt = useRef(new THREE.Vector3(0, 3, 0));
  const pointerPos = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  // Landing camera configurations
  const LANDING_CONFIGS = [
    {
      // Landing 1: Phase I (Base ascent)
      camPos: new THREE.Vector3(9, 4.8, 10),
      lookAt: new THREE.Vector3(1.5, 3.2, 0),
      label: 'Landing 01: Phase I (Deliberation)'
    },
    {
      // Landing 2: Phase II (Mid ascent)
      camPos: new THREE.Vector3(-8, 9.2, 9),
      lookAt: new THREE.Vector3(-0.8, 7.5, 0.5),
      label: 'Landing 02: Phase II (Collaboration)'
    },
    {
      // Landing 3: Outcome (Summit)
      camPos: new THREE.Vector3(7, 14.2, -6),
      lookAt: new THREE.Vector3(0, 11.5, 0),
      label: 'Landing 03: The Outcome (Ratification)'
    }
  ];

  useEffect(() => {
    const config = LANDING_CONFIGS[activeLanding - 1] || LANDING_CONFIGS[0];
    targetCameraPos.current.copy(config.camPos);
    targetLookAt.current.copy(config.lookAt);
  }, [activeLanding]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 700;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0xFAF8F5, 0.028);

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(12, 6, 14);
    camera.lookAt(0, 3, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    // Ambient light with purple-cream tone
    const ambientLight = new THREE.AmbientLight(0xFAF0E6, 0.85);
    scene.add(ambientLight);

    // Deep purple secondary ambient fill from below
    const purpleBounce = new THREE.DirectionalLight(0x563F6A, 0.6);
    purpleBounce.position.set(-8, -4, -6);
    scene.add(purpleBounce);

    // Warm golden sunlight from high right
    const sunLight = new THREE.DirectionalLight(0xEDC868, 1.8);
    sunLight.position.set(14, 22, 12);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 40;
    sunLight.shadow.camera.left = -12;
    sunLight.shadow.camera.right = 12;
    sunLight.shadow.camera.top = 15;
    sunLight.shadow.camera.bottom = -5;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Warm spot on the staircase apex
    const apexSpot = new THREE.PointLight(0xF8E9B6, 1.2, 20);
    apexSpot.position.set(0, 13, 0);
    scene.add(apexSpot);

    // Materials
    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0xFAF8F5,
      roughness: 0.65,
      metalness: 0.05
    });

    const darkStoneMaterial = new THREE.MeshStandardMaterial({
      color: 0xE4DDD3,
      roughness: 0.7,
      metalness: 0.08
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xEDC868,
      roughness: 0.3,
      metalness: 0.85
    });

    const purpleAccMaterial = new THREE.MeshStandardMaterial({
      color: 0x563F6A,
      roughness: 0.4,
      metalness: 0.4
    });

    // Central Pillar (Column)
    const columnGeo = new THREE.CylinderGeometry(0.85, 0.95, 17, 32);
    const column = new THREE.Mesh(columnGeo, stoneMaterial);
    column.position.y = 7;
    column.castShadow = true;
    column.receiveShadow = true;
    scene.add(column);

    // Pillar Base & Capital
    const baseGeo = new THREE.CylinderGeometry(1.4, 1.7, 0.8, 32);
    const columnBase = new THREE.Mesh(baseGeo, darkStoneMaterial);
    columnBase.position.y = -0.4;
    scene.add(columnBase);

    const capitalGeo = new THREE.CylinderGeometry(1.6, 1.0, 0.9, 32);
    const columnCapital = new THREE.Mesh(capitalGeo, goldMaterial);
    columnCapital.position.y = 15.2;
    scene.add(columnCapital);

    // Procedural Spiral Steps
    const totalSteps = 68;
    const heightPerStep = 0.18;
    const anglePerStep = 0.18; // ~10 degrees per step
    const stepLength = 3.6;
    const stepInnerRadius = 0.85;

    const staircaseGroup = new THREE.Group();
    const balusterGroup = new THREE.Group();
    const landingMarkers: THREE.Mesh[] = [];

    // Step geometry
    const stepShape = new THREE.Shape();
    stepShape.moveTo(stepInnerRadius, -0.22);
    stepShape.lineTo(stepInnerRadius + stepLength, -0.42);
    stepShape.lineTo(stepInnerRadius + stepLength, 0.42);
    stepShape.lineTo(stepInnerRadius, 0.22);
    stepShape.closePath();

    const extrudeSettings = {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02
    };
    const stepGeo = new THREE.ExtrudeGeometry(stepShape, extrudeSettings);
    // Align step coordinate
    stepGeo.rotateX(Math.PI / 2);

    for (let i = 0; i < totalSteps; i++) {
      const angle = i * anglePerStep;
      const y = i * heightPerStep;

      // Check if step corresponds to a landing platform
      const isLanding1 = i === 18; // ~3.24m
      const isLanding2 = i === 40; // ~7.2m
      const isLanding3 = i === 64; // ~11.5m

      if (isLanding1 || isLanding2 || isLanding3) {
        // Create an extended architectural semi-circular landing
        const landingIndex = isLanding1 ? 1 : isLanding2 ? 2 : 3;
        const landingGeo = new THREE.CylinderGeometry(2.8, 2.8, 0.24, 32, 1, false, 0, Math.PI * 1.1);
        const landingMesh = new THREE.Mesh(landingGeo, landingIndex === activeLanding ? goldMaterial : stoneMaterial);
        landingMesh.position.set(
          Math.cos(angle) * 2.2,
          y,
          Math.sin(angle) * 2.2
        );
        landingMesh.rotation.y = angle - Math.PI / 2;
        landingMesh.castShadow = true;
        landingMesh.receiveShadow = true;
        landingMesh.userData = { isLanding: true, landingIndex };
        staircaseGroup.add(landingMesh);

        // Landing Pedestal / Beacon
        const beaconGeo = new THREE.SphereGeometry(0.22, 16, 16);
        const beaconMat = new THREE.MeshStandardMaterial({
          color: 0xEDC868,
          emissive: 0xCCA344,
          emissiveIntensity: 0.6
        });
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.set(
          Math.cos(angle) * 3.6,
          y + 1.1,
          Math.sin(angle) * 3.6
        );
        staircaseGroup.add(beacon);
        landingMarkers.push(beacon);
      }

      // Normal Step
      const stepMesh = new THREE.Mesh(stepGeo, i % 2 === 0 ? stoneMaterial : darkStoneMaterial);
      stepMesh.position.y = y;
      stepMesh.rotation.y = angle;
      stepMesh.castShadow = true;
      stepMesh.receiveShadow = true;
      staircaseGroup.add(stepMesh);

      // Balusters (outer bronze railing post)
      if (i % 2 === 0) {
        const balusterGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.95, 8);
        const baluster = new THREE.Mesh(balusterGeo, goldMaterial);
        const railX = Math.cos(angle) * (stepInnerRadius + stepLength - 0.15);
        const railZ = Math.sin(angle) * (stepInnerRadius + stepLength - 0.15);
        baluster.position.set(railX, y + 0.48, railZ);
        baluster.castShadow = true;
        balusterGroup.add(baluster);
      }
    }

    scene.add(staircaseGroup);
    scene.add(balusterGroup);

    // Continuous handrail curve
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= totalSteps; i++) {
      const angle = i * anglePerStep;
      const y = i * heightPerStep + 0.95;
      const railX = Math.cos(angle) * (stepInnerRadius + stepLength - 0.15);
      const railZ = Math.sin(angle) * (stepInnerRadius + stepLength - 0.15);
      curvePoints.push(new THREE.Vector3(railX, y, railZ));
    }
    const handrailCurve = new THREE.CatmullRomCurve3(curvePoints);
    const handrailGeo = new THREE.TubeGeometry(handrailCurve, 180, 0.055, 12, false);
    const handrailMesh = new THREE.Mesh(handrailGeo, goldMaterial);
    scene.add(handrailMesh);

    // Ambient background arches (Jaipuria architectural motif)
    const archGroup = new THREE.Group();
    for (let a = 0; a < 6; a++) {
      const archAngle = (a / 6) * Math.PI * 2;
      const archRadius = 8.5;
      const archX = Math.cos(archAngle) * archRadius;
      const archZ = Math.sin(archAngle) * archRadius;

      // Pillars for the outer architectural rotunda
      const pGeo = new THREE.BoxGeometry(0.4, 16, 0.4);
      const pMesh = new THREE.Mesh(pGeo, stoneMaterial);
      pMesh.position.set(archX, 7, archZ);
      archGroup.add(pMesh);

      // Curved Arch lintel
      const ringGeo = new THREE.TorusGeometry(1.4, 0.14, 12, 24, Math.PI);
      const archTop = new THREE.Mesh(ringGeo, purpleAccMaterial);
      archTop.position.set(archX, 14.8, archZ);
      archTop.rotation.y = archAngle + Math.PI / 2;
      archGroup.add(archTop);
    }
    scene.add(archGroup);

    // Ground Paving / Base Plinth
    const floorGeo = new THREE.CylinderGeometry(11, 11, 0.4, 48);
    const floorMesh = new THREE.Mesh(floorGeo, darkStoneMaterial);
    floorMesh.position.y = -0.6;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Raycasting for interaction with landings
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      pointerPos.current = { x: x * 0.8, y: y * 0.4 };
      mouseVector.set(x, y);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseVector.set(x, y);
      raycaster.setFromCamera(mouseVector, camera);

      const intersects = raycaster.intersectObjects(staircaseGroup.children);
      for (const hit of intersects) {
        if (hit.object.userData?.isLanding && onSelectLanding) {
          onSelectLanding(hit.object.userData.landingIndex);
          break;
        }
      }
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('click', handleClick);

    // Animation Loop with smooth dampening & rotation
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Subtle slow ambient floating rotation of the scene
      staircaseGroup.rotation.y = Math.sin(elapsed * 0.15) * 0.05;
      balusterGroup.rotation.y = staircaseGroup.rotation.y;
      handrailMesh.rotation.y = staircaseGroup.rotation.y;

      // Pulse landing beacons
      landingMarkers.forEach((m, idx) => {
        const scale = 1 + Math.sin(elapsed * 3 + idx * 2) * 0.18;
        m.scale.set(scale, scale, scale);
      });

      // Smooth camera interpolation towards target
      currentCameraPos.current.lerp(targetCameraPos.current, 0.04);
      currentLookAt.current.lerp(targetLookAt.current, 0.04);

      // Add mouse parallax
      camera.position.x = currentCameraPos.current.x + pointerPos.current.x * 0.8;
      camera.position.y = currentCameraPos.current.y + pointerPos.current.y * 0.8;
      camera.position.z = currentCameraPos.current.z;

      camera.lookAt(
        currentLookAt.current.x,
        currentLookAt.current.y,
        currentLookAt.current.z
      );

      renderer.render(scene, camera);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('click', handleClick);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
    };
  }, [onSelectLanding]);

  return (
    <div ref={containerRef} className={`relative w-full h-full min-h-[500px] flex items-center justify-center ${className}`}>
      {webGLSupported ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-grab active:cursor-grabbing block focus:outline-none"
        />
      ) : (
        // High-fidelity fallback for non-WebGL devices
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-gradient-to-b from-cream to-cream-dark">
          <div className="text-center max-w-md p-8 border border-gold/40 bg-cream/90 backdrop-blur rounded-2xl shadow-xl">
            <span className="text-xs uppercase tracking-widest text-purple font-semibold">The Architectural Motif</span>
            <h3 className="text-3xl font-display text-ink mt-2 mb-4">The Ascent of Ideas</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Ascending the three intellectual landings: Deliberation, Collaboration, and the Ratified Declaration.
            </p>
          </div>
        </div>
      )}

      {/* Floating Landing Switcher Badges */}
      <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2 pointer-events-auto bg-cream/80 backdrop-blur-md p-2.5 rounded-xl border border-gold/30 shadow-lg">
        <span className="text-[10px] uppercase font-bold tracking-widest text-ink-muted px-2 py-0.5">
          Ascent Landings
        </span>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => onSelectLanding && onSelectLanding(num)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeLanding === num
                  ? 'bg-purple text-gold shadow-md'
                  : 'bg-cream text-ink-muted hover:text-ink hover:bg-cream-dark'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              Landing {num}
            </button>
          ))}
        </div>
      </div>

      {/* Architectural Annotation badge */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none hidden md:block">
        <div className="px-3.5 py-1.5 bg-cream/85 backdrop-blur border border-gold/40 rounded-full flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-wider text-purple font-semibold">
            3D Monolith · Scroll or Select Landing
          </span>
        </div>
      </div>
    </div>
  );
};
