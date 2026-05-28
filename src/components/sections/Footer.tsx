import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341455796_679ab0c3.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Cali 22" className="w-12 h-12 rounded-xl ring-1 ring-white/10" />
              <span className="text-xl font-extrabold text-white">Cali 22</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              The Prop 22 earnings calculator built for California rideshare and delivery drivers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-white transition-colors">Screenshots</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <a href="mailto:support@cali22.com" className="hover:text-white transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {year} Cali 22. All rights reserved.</p>
          <p className="text-slate-500">
            Cali 22 is not affiliated with Uber, Lyft, DoorDash, Instacart, or the State of California.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
