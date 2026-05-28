import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341455796_679ab0c3.png';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDownload = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('top-cta');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('top-cta');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setOpen(false);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={LOGO_URL} alt="Cali 22" className="w-9 h-9 rounded-lg ring-1 ring-slate-200" />
          <span className="text-lg font-extrabold text-slate-900">Cali 22</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="/#features" onClick={(e) => handleSectionClick(e, 'features')} className="hover:text-violet-600 transition-colors">Features</a>
          <a href="/#how-it-works" onClick={(e) => handleSectionClick(e, 'how-it-works')} className="hover:text-violet-600 transition-colors">How it works</a>
          <a href="/#screenshots" onClick={(e) => handleSectionClick(e, 'screenshots')} className="hover:text-violet-600 transition-colors">Screenshots</a>
          <Link to="/privacy" className="hover:text-violet-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-violet-600 transition-colors">Terms</Link>
        </nav>

        <button
          onClick={handleDownload}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors shadow"
        >
          Download
        </button>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4 text-slate-700 font-medium">
            <a href="/#features" onClick={(e) => handleSectionClick(e, 'features')}>Features</a>
            <a href="/#how-it-works" onClick={(e) => handleSectionClick(e, 'how-it-works')}>How it works</a>
            <a href="/#screenshots" onClick={(e) => handleSectionClick(e, 'screenshots')}>Screenshots</a>
            <Link to="/privacy" onClick={() => setOpen(false)}>Privacy</Link>
            <Link to="/terms" onClick={() => setOpen(false)}>Terms</Link>
            <button
              onClick={handleDownload}
              className="mt-2 px-4 py-2 rounded-lg bg-violet-600 text-white font-semibold"
            >
              Download
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
