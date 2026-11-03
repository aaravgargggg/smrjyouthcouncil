import React from 'react';
import { PageId } from '../components/Navigation';
import { SPONSORS, SPONSOR_ACKNOWLEDGEMENT, Sponsor } from '../data/sponsorsData';
import { ExternalLink, Sparkles, Building, ArrowUpRight, Award, Shield } from 'lucide-react';

interface SponsorsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SponsorsPage: React.FC<SponsorsPageProps> = ({ onNavigate }) => {
  const titleSponsor = SPONSORS.find((s) => s.tier === 'title')!;
  const poweredBy = SPONSORS.find((s) => s.tier === 'powered_by')!;
  const associateSponsors = SPONSORS.filter((s) => s.tier === 'associate');
  const knowledgePartners = SPONSORS.filter((s) => s.tier === 'knowledge');
  const mediaPartners = SPONSORS.filter((s) => s.tier === 'media');
  const supportingPartners = SPONSORS.filter((s) => s.tier === 'supporting');

  return (
    <div className="w-full bg-cream min-h-screen pt-24">
      
      {/* SECTION 1: HEADER & ANIMATED GOLD LINE */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              01 — Institutional Patrons
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight">
              Our Sponsors <br />
              <span className="italic font-garamond text-purple">& Partners.</span>
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
              Celebrating the distinguished organizations who champion our vision, foster scholarship, and strengthen our mission to elevate young thinkers.
            </p>
          </div>

          {/* Subtle Animated Gold Line running across the page */}
          <div className="mt-12 relative w-full h-0.5 bg-purple/10 overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse"></div>
          </div>

        </div>
      </section>


      {/* SECTION 2: TIERED EDITORIAL SPONSOR WALL */}
      <section className="py-16 bg-cream-dark/50 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* TIER 1: TITLE SPONSOR (LARGEST PLACEMENT) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-dark">
                Title Patron
              </span>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-gold/50 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-gold transition-all">
              <div className="lg:col-span-5 flex items-center justify-center p-8 bg-cream rounded-2xl border border-purple/10">
                <div
                  className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-center"
                  style={{ color: titleSponsor.brandColor }}
                >
                  {titleSponsor.name}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-widest text-purple font-semibold">
                    {titleSponsor.tierLabel}
                  </span>
                  <a
                    href={titleSponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-ink-muted hover:text-purple flex items-center gap-1"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="font-display text-3xl text-ink font-bold">
                  {titleSponsor.name}
                </h3>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {titleSponsor.description}
                </p>

                <div className="text-xs text-purple font-semibold">
                  Field: {titleSponsor.industry}
                </div>
              </div>
            </div>
          </div>


          {/* TIER 2: POWERED BY PARTNER */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-purple">
                Powered By Partner
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple/15 shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 flex items-center justify-center p-6 bg-cream rounded-xl border border-purple/10">
                <div
                  className="font-display text-3xl font-bold text-center"
                  style={{ color: poweredBy.brandColor }}
                >
                  {poweredBy.name}
                </div>
              </div>
              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gold-dark uppercase tracking-wider">
                    {poweredBy.tierLabel}
                  </span>
                  <a
                    href={poweredBy.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-ink-muted hover:text-purple flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h4 className="font-display text-2xl text-ink font-bold">
                  {poweredBy.name}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {poweredBy.description}
                </p>
              </div>
            </div>
          </div>


          {/* TIER 3: ASSOCIATE & KNOWLEDGE PARTNERS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-ink-muted">
                Associate & Knowledge Partners
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...associateSponsors, ...knowledgePartners].map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white p-6 rounded-2xl border border-purple/10 hover:border-gold shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-16 flex items-center justify-center border-b border-purple/5 pb-4 mb-4">
                      <div
                        className="font-display text-2xl font-bold text-center"
                        style={{ color: partner.brandColor }}
                      >
                        {partner.logo}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block mb-1">
                      {partner.tierLabel}
                    </span>
                    <h4 className="font-display text-xl text-ink font-bold">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-purple/10 flex items-center justify-between">
                    <span className="text-[10px] text-ink-muted">{partner.industry}</span>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-purple hover:text-purple-700 flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* TIER 4: SUPPORTING & MEDIA PARTNERS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-ink-muted">
                Supporting & National Media
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...mediaPartners, ...supportingPartners].map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white p-6 rounded-2xl border border-purple/10 hover:border-gold shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-14 flex items-center justify-center border-b border-purple/5 pb-3 mb-3">
                      <div
                        className="font-display text-xl font-bold text-center"
                        style={{ color: partner.brandColor }}
                      >
                        {partner.logo}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-purple block mb-1">
                      {partner.tierLabel}
                    </span>
                    <h4 className="font-display text-lg text-ink font-bold">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-purple/10 flex items-center justify-between">
                    <span className="text-[10px] text-ink-muted">{partner.industry}</span>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-purple hover:text-purple-700 flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: INSTITUTIONAL ACKNOWLEDGEMENT */}
      <section className="py-24 bg-white border-t border-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Award className="w-10 h-10 text-gold mx-auto" />
          
          <h2 className="font-display text-4xl sm:text-5xl text-ink font-bold">
            {SPONSOR_ACKNOWLEDGEMENT.headline}
          </h2>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-garamond italic">
            "{SPONSOR_ACKNOWLEDGEMENT.body}"
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border-2 border-purple text-purple font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-purple hover:text-cream transition-all inline-flex items-center gap-2"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
