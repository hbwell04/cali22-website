import React from 'react';
import { FileText, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
    <h2 className="text-lg font-extrabold text-slate-900 mb-3">{title}</h2>
    <div className="text-[15px] text-slate-700 leading-relaxed space-y-3">{children}</div>
  </div>
);

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 lg:px-8 py-12 space-y-4">
        {/* Header card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center mb-3">
            <FileText className="w-5 h-5 text-violet-600" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">Terms of Service &amp; EULA</h1>
          <p className="text-sm text-slate-500 mt-1">Cali 22 — Prop 22 Earnings Tracker</p>
          <p className="text-xs text-slate-400 mt-1.5">Last updated: April 28, 2026</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h2 className="text-sm font-extrabold text-amber-900">Important Disclaimer</h2>
          </div>
          <p className="text-[14px] text-amber-900/90 leading-relaxed">
            All Prop 22 calculations and earnings figures shown in Cali 22 are{' '}
            <strong className="font-extrabold">ESTIMATES ONLY</strong>. They are not official platform
            statements, payroll records, tax documents, or legal advice. Actual payouts from DoorDash,
            Uber, Lyft, Instacart, Grubhub, and other platforms may differ. Always verify final earnings
            with the official platform statements you receive from the company that pays you.
          </p>
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            By downloading, installing, or using Cali 22 (the “App”), you agree to be bound by these
            Terms of Service and End User License Agreement (“Terms”). If you do not agree, do not use
            the App.
          </p>
        </Section>

        <Section title="2. License Grant">
          <p>
            Subject to these Terms, you are granted a limited, non-exclusive, non-transferable,
            revocable license to install and use the App on devices you own or control, solely for your
            personal, non-commercial use as an app-based driver in California.
          </p>
        </Section>

        <Section title="3. Permitted Use">
          <p>
            You agree to use the App only for lawful purposes and only to track your own earnings. You
            will not: (a) reverse engineer, decompile, or disassemble the App; (b) resell, sublicense,
            or distribute the App; (c) use the App to violate any platform’s terms of service; (d)
            upload screenshots or data that you do not own or have permission to use; or (e) attempt to
            gain unauthorized access to the App’s systems or other users’ data.
          </p>
        </Section>

        <Section title="4. Estimates Only — Not Tax or Legal Advice">
          <p>
            <strong className="font-extrabold text-slate-900">Cali 22 is an estimation tool.</strong>{' '}
            The Prop 22 floor calculations, mileage rates, minimum-wage multipliers, and earnings
            adjustments displayed in the App are estimates based on publicly available information about
            California Proposition 22 and on data you provide.
          </p>
          <p>
            The App does <strong className="font-extrabold text-slate-900">NOT</strong> provide tax
            advice, legal advice, accounting advice, or financial advice. The information shown is not a
            substitute for guidance from a licensed CPA, tax professional, attorney, or the California
            Labor Commissioner. Prop 22 rates, formulas, and enforcement may change, and your specific
            city or county may have different local minimum wages.
          </p>
          <p>
            You are solely responsible for: (a) reporting your income to the IRS, the California
            Franchise Tax Board, and any other taxing authority; (b) deciding whether to file a wage
            claim or take any other legal action; and (c) verifying any number shown in the App against
            official platform statements before relying on it.
          </p>
        </Section>

        <Section title="5. Screenshot & Data Capture">
          <p>
            When you upload screenshots, the App reads on-screen text to extract trip data. You are
            responsible for ensuring you have the right to upload and analyze any image you provide.
            The App’s accuracy depends on the quality and format of the screenshot; results may be
            incomplete or incorrect.
          </p>
        </Section>

        <Section title="6. No Affiliation">
          <p>
            Cali 22 is an independent tool and is{' '}
            <strong className="font-extrabold text-slate-900">
              not affiliated with, endorsed by, or sponsored by
            </strong>{' '}
            DoorDash, Uber Technologies, Lyft, Instacart, Grubhub, the State of California, the
            California Labor Commissioner, or any other platform or government agency. Platform names
            and logos are property of their respective owners.
          </p>
        </Section>

        <Section title="7. User Data & Privacy">
          <p>
            You retain ownership of your data. The App may store sessions, settings, and uploaded
            images on your device and on backend infrastructure used to process screenshots. You are
            responsible for maintaining the security of your device and account.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            <strong className="font-extrabold text-slate-900">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </strong>
          </p>
          <p>
            The App is provided{' '}
            <strong className="font-extrabold text-slate-900">“AS IS” and “AS AVAILABLE”</strong>{' '}
            without warranties of any kind, express or implied, including warranties of merchantability,
            fitness for a particular purpose, accuracy, or non-infringement.
          </p>
          <p>
            In no event shall Cali 22, its developers, contributors, or affiliates be liable for any
            indirect, incidental, special, consequential, exemplary, or punitive damages, or any loss
            of profits, revenue, earnings, wages, tips, mileage reimbursements, tax refunds, data, or
            goodwill, arising out of or related to your use of the App — even if advised of the
            possibility of such damages.
          </p>
          <p>
            Our total cumulative liability for any and all claims arising out of these Terms or the
            App shall not exceed the greater of (a) the amount you paid for the App in the 12 months
            preceding the claim, or (b) ten U.S. dollars ($10.00).
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of
            the above may not apply to you.
          </p>
        </Section>

        <Section title="9. Indemnification">
          <p>
            You agree to defend, indemnify, and hold harmless Cali 22 and its developers from any
            claims, damages, liabilities, costs, and expenses (including reasonable attorneys’ fees)
            arising from your use of the App, your violation of these Terms, or your violation of any
            law or third-party right.
          </p>
        </Section>

        <Section title="10. Termination">
          <p>
            We may suspend or terminate your access to the App at any time, with or without notice, for
            any reason, including violation of these Terms. Upon termination, your license to use the
            App ends immediately.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Continued use of the App after changes
            constitutes acceptance of the revised Terms. Material changes will be reflected in the
            “Last updated” date above.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            These Terms are governed by the laws of the State of California, without regard to
            conflict-of-laws principles. Any dispute arising under these Terms shall be resolved
            exclusively in the state or federal courts located in California, and you consent to
            personal jurisdiction there.
          </p>
        </Section>

        <Section title="13. Severability">
          <p>
            If any provision of these Terms is held invalid or unenforceable, the remaining provisions
            will continue in full force and effect.
          </p>
        </Section>

        <Section title="14. Contact">
          <p>
            Questions about these Terms can be directed to the App’s support contact within Settings.
            For official Prop 22 information, contact the California Labor Commissioner.
          </p>
        </Section>

        {/* Acknowledge */}
        <div className="flex items-center gap-3 bg-violet-50 rounded-2xl p-4 mt-2">
          <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
          <p className="text-[13px] text-violet-900 font-semibold leading-snug">
            By continuing to use Cali 22, you acknowledge that you have read, understood, and agreed
            to these Terms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
