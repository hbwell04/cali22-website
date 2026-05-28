import React from 'react';
import AppStoreBadges, { APPLE_APP_STORE_URL } from '@/components/AppStoreBadges';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341455796_679ab0c3.png';
const HERO_SCREENSHOT = 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341428264_19f6274c.PNG';
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&data=${encodeURIComponent(APPLE_APP_STORE_URL)}`;

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-teal-50">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Built for California gig workers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              Build{' '}
              <span className="bg-gradient-to-r from-violet-600 to-teal-500 bg-clip-text text-transparent">
                Prop 22
              </span>{' '}
              pay into your daily strategy.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Cali 22 scans your Uber, Lyft, DoorDash, and Instacart pay screenshots and
              instantly calculates your Prop 22 earnings guarantee — so you can plan smarter shifts and never leave money on the table.
            </p>


            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
              <AppStoreBadges />

              {/* Hero QR code — quick scan for desktop visitors */}
              <a
                href={APPLE_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-md hover:shadow-lg transition-shadow"
                aria-label="Scan QR code to download Cali 22 on the App Store"
              >
                <img
                  src={QR_CODE_URL}
                  alt="QR code linking to Cali 22 on the App Store"
                  className="w-20 h-20 rounded-md"
                />
                <div className="text-left leading-tight pr-2">
                  <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
                    Scan to download
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Point your phone camera here
                  </div>
                </div>
              </a>
            </div>


            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Private &amp; secure
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-600" />
                AI-powered scanning
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Built by drivers
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-violet-400 to-teal-400 rounded-full blur-3xl opacity-30" />
            </div>
            <div className="relative">
              <img
                src={LOGO_URL}
                alt="Cali 22 logo"
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl shadow-xl ring-4 ring-white z-10"
              />
              <img
                src={HERO_SCREENSHOT}
                alt="Cali 22 app showing Prop 22 earnings dashboard"
                className="relative w-72 sm:w-80 rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
