import React from 'react';

const shots = [
  {
    src: 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341429843_31081ec2.PNG',
    label: 'Dashboard',
    caption: 'See your Prop 22 estimate at a glance.',
  },
  {
    src: 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341429069_d86d6059.PNG',
    label: 'Scan Earnings',
    caption: 'Snap, upload, or type — three ways to log pay.',
  },
  {
    src: 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341426586_a6eec054.PNG',
    label: 'AI Results',
    caption: 'Extracted data plus the Prop 22 adjustment.',
  },
  {
    src: 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1777341428264_19f6274c.PNG',
    label: 'Sessions',
    caption: 'Group entries into clean pay-period batches.',
  },
];

const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-600">Inside the app</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed for drivers, by drivers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A clean, no-nonsense interface that gets you from screenshot to Prop 22 number in seconds.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {shots.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-300 to-teal-300 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60" />
                <img
                  src={s.src}
                  alt={`Cali 22 ${s.label} screen`}
                  className="relative w-full max-w-[220px] rounded-[1.75rem] shadow-xl ring-1 ring-slate-200"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.label}</h3>
              <p className="mt-1 text-sm text-slate-600 max-w-[220px]">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
