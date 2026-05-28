import React from 'react';

// ============================================================
// Official store URLs for Cali 22.
// Apple App Store: live listing.
// Google Play: still points at search until the Android build ships.
// ============================================================
export const APPLE_APP_STORE_URL =
  'https://apps.apple.com/app/cali-22-ai-gig-calculator/id6764374904';
export const GOOGLE_PLAY_STORE_URL =
  'https://play.google.com/store/search?q=cali%2022&c=apps';

interface AppStoreBadgesProps {
  variant?: 'light' | 'dark';
  className?: string;
  /** Override the Apple App Store URL for this instance. */
  appleUrl?: string;
  /** Override the Google Play Store URL for this instance. */
  googleUrl?: string;
}

const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({
  variant = 'dark',
  className = '',
  appleUrl = APPLE_APP_STORE_URL,
  googleUrl = GOOGLE_PLAY_STORE_URL,
}) => {
  const baseBtn =
    variant === 'dark'
      ? 'bg-black text-white hover:bg-neutral-800 border border-neutral-800'
      : 'bg-white text-black hover:bg-neutral-100 border border-neutral-200';

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={appleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-colors shadow-md ${baseBtn}`}
        aria-label="Download Cali 22 on the App Store"
      >
        <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wide opacity-80">Download on the</div>
          <div className="text-lg font-semibold -mt-0.5">App Store</div>
        </div>
      </a>

      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-colors shadow-md ${baseBtn}`}
        aria-label="Get Cali 22 on Google Play"
      >
        <svg className="w-7 h-7" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M325.3 234.3 104.3 13.7l255.7 147.5-34.7 73.1z" fill="#EA4335" />
          <path d="M104.3 13.7c-7.6 4.4-12.3 12.6-12.3 23.6v438.4c0 11 4.7 19.2 12.3 23.6l213.4-213.6L104.3 13.7z" fill="#FBBC04" />
          <path d="M360 161.2 484.6 233c14.6 8.4 14.6 31.6 0 40l-124.7 71.7-37.4-37.4 37.5-145.1z" fill="#34A853" />
          <path d="m104.3 498.3 255.7-147.5-34.7-72.1L104.3 498.3z" fill="#4285F4" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wide opacity-80">Get it on</div>
          <div className="text-lg font-semibold -mt-0.5">Google Play</div>
        </div>
      </a>
    </div>
  );
};

export default AppStoreBadges;
