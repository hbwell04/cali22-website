import React from 'react';
import { ScanLine, Calculator, FolderArchive, TrendingUp, Lock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: ScanLine,
    title: 'AI Screenshot Scanner',
    desc: 'Snap or upload your weekly pay summary from Uber, Lyft, DoorDash, or Instacart. Our AI extracts hours, miles, base pay, tips, and promos automatically.',
    color: 'violet',
  },
  {
    icon: Calculator,
    title: 'Prop 22 Adjustment Math',
    desc: 'We run the official California Prop 22 earnings-guarantee formula on every entry, so you know the minimum the platform owes you for each pay period.',
    color: 'teal',
  },
  {
    icon: FolderArchive,
    title: 'Sessions & History',
    desc: 'Group multiple screenshots into a single Prop 22 pay period. Save finalized sessions to keep a clean record of every batch.',
    color: 'violet',
  },
  {
    icon: TrendingUp,
    title: 'Running Totals',
    desc: 'Track total earnings, total hours, and total Prop 22 owed across every session — all on one dashboard.',
    color: 'teal',
  },
  {
    icon: Lock,
    title: 'Your Data, Your Phone',
    desc: 'Screenshots and pay data stay on your device. We don’t sell your info, ever.',
    color: 'violet',
  },
  {
    icon: Smartphone,
    title: 'Photo Helper Fallback',
    desc: 'AI struggling with a blurry pic? Use Photo Helper to type the values yourself while the screenshot stays visible. Always works.',
    color: 'teal',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">Features</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to verify your Prop 22 pay
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cali 22 is the simplest way to confirm gig platforms are paying you the California
            earnings guarantee you’re legally entitled to.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            const tint =
              f.color === 'violet'
                ? 'bg-violet-100 text-violet-600'
                : 'bg-teal-100 text-teal-600';
            return (
              <div
                key={f.title}
                className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-violet-200 hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tint}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
