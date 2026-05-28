import React from 'react';
import AppStoreBadges, { APPLE_APP_STORE_URL } from '@/components/AppStoreBadges';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341455796_679ab0c3.png';

// Generates a QR code image on the fly that points to the live App Store listing.
// Using api.qrserver.com avoids adding a JS dependency.
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=2&data=${encodeURIComponent(
  APPLE_APP_STORE_URL,
)}`;

const CTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-violet-600 via-violet-500 to-teal-500">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center text-white">
        <img
          src={LOGO_URL}
          alt="Cali 22 logo"
          className="w-20 h-20 mx-auto rounded-2xl shadow-xl ring-4 ring-white/30"
        />
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Stop guessing. Start collecting.
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Download Cali 22 and verify every dollar of your California Prop 22 earnings guarantee.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {/* QR code card */}
          <a
            href={APPLE_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-4 shadow-2xl ring-4 ring-white/30 hover:ring-white/60 transition-all hover:-translate-y-1"
            aria-label="Scan QR code to download Cali 22 on the App Store"
          >
            <img
              src={QR_CODE_URL}
              alt="QR code linking to Cali 22 on the Apple App Store"
              width={180}
              height={180}
              className="w-44 h-44 block"
              loading="lazy"
            />
            <div className="mt-2 text-slate-900 text-sm font-semibold">
              Scan to download
            </div>
            <div className="text-slate-500 text-xs">
              Point your phone camera here
            </div>
          </a>

          {/* Divider */}
          <div className="hidden sm:flex flex-col items-center text-white/70">
            <div className="w-px h-10 bg-white/40" />
            <div className="my-2 text-xs uppercase tracking-widest">or</div>
            <div className="w-px h-10 bg-white/40" />
          </div>

          {/* Store badges */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <AppStoreBadges />
            <p className="text-white/80 text-sm">Tap a badge on mobile</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
