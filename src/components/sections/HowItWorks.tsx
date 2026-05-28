import React from 'react';
import { Camera, Cpu, BadgeDollarSign } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: Camera,
    title: 'Snap your pay summary',
    desc: 'Open your weekly pay screen on Uber, Lyft, DoorDash, or Instacart and take a screenshot — or just upload one you already have.',
  },
  {
    n: '02',
    icon: Cpu,
    title: 'Let the AI do the math',
    desc: 'Cali 22 reads the screenshot, pulls out your hours, miles, base pay, tips, and promos, and applies the Prop 22 formula.',
  },
  {
    n: '03',
    icon: BadgeDollarSign,
    title: 'See what you’re actually owed',
    desc: 'Get a clear Prop 22 adjustment number for the period and a running total across all your saved sessions.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400">How it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Three steps. Real numbers. Less than a minute.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-violet-400/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-teal-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-extrabold text-white/20">{s.n}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
