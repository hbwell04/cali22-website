import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const HERO_IMG = 'https://d64gsuwffb70l.cloudfront.net/69f0147542ae20a025d4c85f_1780685258406_3f530f6f.png';
const DASH_IMG = 'https://d64gsuwffb70l.cloudfront.net/69a60a5b739ac2fdda8a86ef_1780689014954_ff69440f.png';
const SHOP_IMG = 'https://d64gsuwffb70l.cloudfront.net/69f0147542ae20a025d4c85f_1780685316368_e0945bb5.jpg';

const WhyCali22: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Article hero */}
      <header className="relative">
        <div className="h-72 sm:h-96 w-full overflow-hidden">
          <img src={HERO_IMG} alt="California gig driver checking earnings" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold tracking-wide uppercase">
              For California Gig Drivers
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Why You Need Cali 22
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-200">
              The Prop 22 earnings you're leaving on the table every single day.
            </p>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-slate-700">
            If you're a California gig driver working for DoorDash, Uber Eats, Grubhub, Instacart, etc.,
            chances are you already know Proposition 22 exists. You probably know it guarantees you a
            minimum earnings floor based on your engaged time, active time, and mileage. But here's the
            real question — do you actually factor those Prop 22 earnings into what you think you're
            making every single day you drive?
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            If you're being honest, the answer is probably no. And you're not alone.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Way Most Drivers Think About Their Earnings</h2>
          <p className="leading-relaxed text-slate-700">
            Here's how most gig drivers mentally calculate their income during a shift. They look at their
            app, see the dollars adding up from deliveries and tips, and use that running total to decide
            whether they've had a good day or a bad one. If they hit their personal goal — say $150 for the
            day — they feel good. If they fall short, they push harder, take more orders, and drive longer
            than their body probably wants to.
          </p>
          <p className="leading-relaxed text-slate-700">
            What almost never enters that mental calculation is the Prop 22 earnings adjustment that is
            quietly accumulating in the background the entire time they are driving.
          </p>

          <figure className="my-10">
            <img src={DASH_IMG} alt="Earnings dashboard displayed on a smartphone" className="mx-auto w-full max-w-md rounded-2xl shadow-lg" />
            <figcaption className="mt-3 text-sm text-slate-500 text-center">
              Your Prop 22 adjustment is real money — it just doesn't show up the moment a delivery ends.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-slate-700">
            That adjustment — the difference between what the platform actually paid you and what Prop 22
            guarantees you based on engaged time — is real money. It gets deposited into your account on a
            regular schedule, similar to how a traditional 9-to-5 employee receives a paycheck. But because
            it doesn't show up immediately after a shift the way delivery earnings do, most drivers mentally
            disconnect it from their daily income picture entirely.
          </p>
          <p className="leading-relaxed text-slate-700">
            The result? Drivers are making financial decisions — how long to drive, how hard to push,
            whether today was worth it — based on an incomplete picture of what they actually earned.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why This Matters More Than You Think</h2>
          <p className="leading-relaxed text-slate-700">
            Consider this scenario. You finish a four-hour shift and your app shows you made $88 from
            deliveries and tips. You feel like it was a below-average day. You're frustrated. Maybe you
            stayed out an extra hour trying to chase a better number.
          </p>

          <blockquote className="my-8 border-l-4 border-violet-500 bg-violet-50 rounded-r-xl px-6 py-5 text-slate-800 text-lg italic">
            But what if you knew that, based on your engaged time during those four hours, Prop 22 is going
            to add another $18 to $25 to your income for that shift? Suddenly that "bad day" looks a lot
            more reasonable.
          </blockquote>

          <p className="leading-relaxed text-slate-700">
            You might have gone home an hour earlier, rested up, and come back fresher the next day.
          </p>
          <p className="leading-relaxed text-slate-700">
            That is exactly the kind of mental clarity that knowing your daily Prop 22 earnings can provide.
            It doesn't change the fact that the money arrives later — that is simply how Prop 22 works, and
            it is one of its genuine limitations compared to seeing delivery earnings in real time. But
            knowing the number exists, and knowing approximately what it will be, changes how you evaluate
            your day, how you manage your energy, and how you make decisions on the road.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Drivers Who Do Calculate It</h2>
          <p className="leading-relaxed text-slate-700">
            Now there is another type of California gig driver — the ones who absolutely know how to
            calculate their Prop 22 earnings. They know the formula. They know the engaged-time thresholds.
            They track their active minutes and run the math themselves, sometimes landing within just a few
            dollars of what they actually receive.
          </p>
          <p className="leading-relaxed text-slate-700">
            Those drivers already understand the value of this information. But even they will tell you that
            doing the math manually takes time, effort, and focus — three things that are in short supply
            when you're juggling multiple platforms, navigating traffic, and trying to maximize a shift.
          </p>
          <p className="leading-relaxed text-slate-700">
            That is where Cali 22 comes in for both types of drivers. Whether you have never attempted to
            calculate your Prop 22 earnings or you have been doing it manually for years, having an app that
            does it automatically — accurately, instantly, and broken down by platform — changes the game
            entirely.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Shop-and-Deliver Orders Are Your Biggest Prop 22 Opportunity</h2>

          <figure className="my-10">
            <img src={SHOP_IMG} alt="Gig driver shopping in a supermarket" className="w-full rounded-2xl shadow-lg ring-1 ring-slate-200" />
            <figcaption className="mt-3 text-sm text-slate-500 text-center">
              Shop-and-deliver orders rack up engaged time in a way standard restaurant orders rarely do.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-slate-700">
            Here is something that even experienced gig drivers often overlook. Not all order types are
            created equal when it comes to Prop 22 earnings, and shop-and-deliver orders are in a category
            of their own.
          </p>
          <p className="leading-relaxed text-slate-700">
            On a standard food delivery order for DoorDash or Uber Eats, your engaged time starts when you
            accept the order and ends when you complete the drop-off. The timeline is relatively predictable,
            and the platform has a general expectation of how long it should take.
          </p>
          <p className="leading-relaxed text-slate-700">
            Shop-and-deliver orders are fundamentally different. When you accept a shop-and-deliver order on
            DoorDash or Uber Eats, you are going into a store, physically shopping for items, and then
            delivering them. There is no fixed expected delivery time the way there is with a restaurant
            order. You spend more time actively engaged — navigating a store, finding items, checking out —
            and all of that time counts toward your engaged time for Prop 22 calculations.
          </p>
          <p className="leading-relaxed text-slate-700">
            More engaged time means a higher Prop 22 earnings floor for that order. That means
            shop-and-deliver orders have the potential to generate significantly higher Prop 22 adjustments
            compared to standard delivery orders of similar payout.
          </p>
          <p className="leading-relaxed text-slate-700">
            It is worth noting that while this is clearly the case for DoorDash and Uber Eats, the specifics
            may vary for platforms like Instacart, which has its own pay structure and engaged-time
            definitions. As always, checking the specifics for each platform you work on is recommended —
            which is exactly what Cali 22 helps you do by calculating each platform separately.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Cali 22 Does That Nothing Else Does</h2>
          <p className="leading-relaxed text-slate-700">
            Until Cali 22 launched, there was no mobile app specifically built to calculate Prop 22 earnings
            for California gig drivers. None. Your options were to do the math yourself, wait until the
            deposit showed up, or simply ignore it entirely.
          </p>
          <p className="leading-relaxed text-slate-700">
            Cali 22 changes all three of those options at once.
          </p>
          <p className="leading-relaxed text-slate-700">
            The app calculates your Prop 22 earnings daily and weekly, broken down by platform. Because
            DoorDash, Uber Eats, Lyft, and Grubhub all have slightly different pay structures and
            engaged-time definitions, calculating them separately — the way Cali 22 does — produces a far
            more accurate result than any one-size-fits-all estimate.
          </p>
          <p className="leading-relaxed text-slate-700">
            You can enter your data manually if you prefer, or scan your earnings statement directly in the
            app for faster input. Your history is saved so you can review past calculations, which is
            especially useful when tax season arrives.
          </p>
          <p className="leading-relaxed text-slate-700">
            And it is free to get started. No paywall. No complicated setup. Just a cleaner, more complete
            picture of what you are actually earning every day you drive.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Bottom Line</h2>
          <p className="leading-relaxed text-slate-700">
            Prop 22 was designed to protect California gig workers. It guarantees you a minimum earnings
            floor that platforms are legally required to meet. But a guarantee you don't track is a guarantee
            you can't fully benefit from.
          </p>
          <p className="leading-relaxed text-slate-700">
            Knowing your Prop 22 earnings on a daily basis won't make the money arrive any faster — that is
            simply the nature of how it is structured. But it will give you something equally valuable: a
            complete and accurate picture of your real income, every single day you drive.
          </p>
          <p className="leading-relaxed text-slate-700">
            Stop making decisions about your workday based on half the numbers. Download Cali 22 and start
            seeing the full picture.
          </p>
          <p className="leading-relaxed text-slate-700">
            Download Cali 22 free on the App Store:{' '}
            <a
              href="https://apps.apple.com/app/cali-22-ai-gig-calculator/id6764374904"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 font-medium hover:text-violet-700 underline break-words"
            >
              apps.apple.com/app/cali-22-ai-gig-calculator
            </a>
          </p>
          <p className="leading-relaxed text-slate-700">
            Learn more at:{' '}
            <a
              href="https://www.cali22.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 font-medium hover:text-violet-700 underline"
            >
              www.cali22.com
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-8 sm:p-10 text-center text-white">
          <h3 className="text-2xl font-bold">Stop guessing what you really earned.</h3>
          <p className="mt-2 text-violet-100">
            Let Cali 22 calculate your Prop 22 earnings automatically — instantly and broken down by platform.
          </p>
          <a
            href="https://apps.apple.com/app/cali-22-ai-gig-calculator/id6764374904"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors"
          >
            Download Cali 22 — Free
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default WhyCali22;
