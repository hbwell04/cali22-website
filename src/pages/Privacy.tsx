import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const Privacy: React.FC = () => {
  const lastUpdated = 'April 20, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">Cali 22</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-600">Last updated {lastUpdated}</p>
        </header>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          <section>
            <p>
              This Privacy Notice for HB &amp; EMANN LLC ("we," "us," or "our"), describes how and why
              we might access, collect, store, use, and/or share ("process") your personal information
              when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Visit our website at{' '}
                <a href="http://www.cali22.com" className="text-violet-600 underline">
                  http://www.cali22.com
                </a>{' '}
                or any website of ours that links to this Privacy Notice
              </li>
              <li>
                Download and use our mobile application (Cali 22), or any other application of ours
                that links to this Privacy Notice
              </li>
              <li>
                Use Cali 22: Prop 22 Gig Payment Calculator, "Cali22 (Prop 22 Gig Calculator)" — A
                mobile app that helps California gig workers (Uber, Lyft, DoorDash, etc.) instantly
                calculate their Prop 22 earnings adjustments.
              </li>
            </ul>

            <p className="mt-4 font-semibold text-slate-900">What it does:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Snap/upload earnings screenshots – AI extracts data automatically</li>
              <li>Calculates Prop 22 adjustment (100% minimum wage guarantee)</li>
              <li>Organizes earnings into sessions for tracking</li>
              <li>Shows total estimated Prop 22 compensation across all gigs</li>
            </ul>

            <p className="mt-4 font-semibold text-slate-900">Key features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-powered OCR (no manual data entry)</li>
              <li>Works across all CA gig platforms</li>
              <li>Session-based organization</li>
              <li>Clean, intuitive interface</li>
              <li>Saves time &amp; ensures workers get what they're owed</li>
            </ul>

            <p className="mt-4">
              Perfect for CA gig workers who want to track their guaranteed earnings without
              spreadsheets or manual calculations.
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>

            <p className="mt-4">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for making decisions
              about how your personal information is processed. If you do not agree with our policies
              and practices, please do not use our Services. If you still have any questions or
              concerns, please contact us at{' '}
              <a href="mailto:support@cali22.com" className="text-violet-600 underline">
                support@cali22.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Summary of Key Points</h2>
            <p className="italic">
              This summary provides key points from our Privacy Notice, but you can find out more
              details about any of these topics by clicking the link following each key point or by
              using our table of contents below to find the section you are looking for.
            </p>

            <p className="mt-4">
              <strong>What personal information do we process?</strong> When you visit, use, or
              navigate our Services, we may process personal information depending on how you
              interact with us and the Services, the choices you make, and the products and features
              you use.
            </p>

            <p className="mt-4">
              <strong>Do we process any sensitive personal information?</strong> Some of the
              information may be considered "special" or "sensitive" in certain jurisdictions, for
              example your racial or ethnic origins, sexual orientation, and religious beliefs. We do
              not process sensitive personal information.
            </p>

            <p className="mt-4">
              <strong>Do we collect any information from third parties?</strong> We do not collect
              any information from third parties.
            </p>

            <p className="mt-4">
              <strong>How do we process your information?</strong> We process your information to
              provide, improve, and administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your information for
              other purposes with your consent. We process your information only when we have a valid
              legal reason to do so.
            </p>

            <p className="mt-4">
              <strong>In what situations and with which parties do we share personal information?</strong>{' '}
              We may share information in specific situations and with specific third parties.
            </p>

            <p className="mt-4">
              <strong>How do we keep your information safe?</strong> We have adequate organizational
              and technical processes and procedures in place to protect your personal information.
              However, no electronic transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorized third parties will not be able to defeat our
              security and improperly collect, access, steal, or modify your information.
            </p>

            <p className="mt-4">
              <strong>What are your rights?</strong> Depending on where you are located
              geographically, the applicable privacy law may mean you have certain rights regarding
              your personal information.
            </p>

            <p className="mt-4">
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your
              rights is by submitting a data subject access request, or by contacting us. We will
              consider and act upon any request in accordance with applicable data protection laws.
            </p>

            <p className="mt-4">
              Want to learn more about what we do with any information we collect? Review the Privacy
              Notice in full below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Table of Contents</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li><a href="#section-1" className="text-violet-600 underline">What information do we collect?</a></li>
              <li><a href="#section-2" className="text-violet-600 underline">How do we process your information?</a></li>
              <li><a href="#section-3" className="text-violet-600 underline">When and with whom do we share your personal information?</a></li>
              <li><a href="#section-4" className="text-violet-600 underline">Do we offer artificial intelligence-based products?</a></li>
              <li><a href="#section-5" className="text-violet-600 underline">How long do we keep your information?</a></li>
              <li><a href="#section-6" className="text-violet-600 underline">How do we keep your information safe?</a></li>
              <li><a href="#section-7" className="text-violet-600 underline">Do we collect information from minors?</a></li>
              <li><a href="#section-8" className="text-violet-600 underline">What are your privacy rights?</a></li>
              <li><a href="#section-9" className="text-violet-600 underline">Controls for do-not-track features</a></li>
              <li><a href="#section-10" className="text-violet-600 underline">Do United States residents have specific privacy rights?</a></li>
              <li><a href="#section-11" className="text-violet-600 underline">Do we make updates to this notice?</a></li>
              <li><a href="#section-12" className="text-violet-600 underline">How can you contact us about this notice?</a></li>
              <li><a href="#section-13" className="text-violet-600 underline">How can you review, update, or delete the data we collect from you?</a></li>
            </ol>
          </section>

          <section id="section-1">
            <h2 className="text-2xl font-bold text-slate-900">1. What Information Do We Collect?</h2>
            <p>
              <strong>Personal information you disclose to us.</strong> We collect personal
              information that you voluntarily provide to us when you register on the Services,
              express an interest in obtaining information about us or our products and Services,
              when you participate in activities on the Services, or otherwise when you contact us.
              This may include names, email addresses, and contact preferences.
            </p>
            <p className="mt-3">
              <strong>Information automatically collected.</strong> We automatically collect certain
              information when you visit, use, or navigate the Services. This information does not
              reveal your specific identity but may include device and usage information, such as
              your IP address, browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location, and information about how
              and when you use our Services.
            </p>
            <p className="mt-3">
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </p>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-bold text-slate-900">2. How Do We Process Your Information?</h2>
            <p>
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to comply with law. We may
              also process your information for other purposes with your consent.
            </p>
          </section>

          <section id="section-3">
            <h2 className="text-2xl font-bold text-slate-900">3. When and With Whom Do We Share Your Personal Information?</h2>
            <p>We may share information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Business transfers.</strong> We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to another company.
              </li>
              <li>
                <strong>Service providers.</strong> We may share your data with third-party vendors,
                service providers, contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>Legal obligations.</strong> We may disclose your information where required
                by law or in response to valid requests by public authorities.
              </li>
            </ul>
          </section>

          <section id="section-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Do We Offer Artificial Intelligence-Based Products?</h2>
            <p>
              As part of our Services, we offer products, features, or tools powered by artificial
              intelligence, including AI-powered OCR for extracting data from earnings screenshots.
              We process your input through our AI features solely to provide the calculator
              functionality. We do not use your data to train third-party AI models.
            </p>
          </section>

          <section id="section-5">
            <h2 className="text-2xl font-bold text-slate-900">5. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this Privacy Notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting, or other legal requirements). When we
              have no ongoing legitimate business need to process your personal information, we will
              either delete or anonymize such information.
            </p>
          </section>

          <section id="section-6">
            <h2 className="text-2xl font-bold text-slate-900">6. How Do We Keep Your Information Safe?</h2>
            <p>
              We have implemented appropriate and reasonable technical and organizational security
              measures designed to protect the security of any personal information we process.
              However, despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to
              be 100% secure.
            </p>
          </section>

          <section id="section-7">
            <h2 className="text-2xl font-bold text-slate-900">7. Do We Collect Information From Minors?</h2>
            <p>
              We do not knowingly collect data from or market to children under 18 years of age. By
              using the Services, you represent that you are at least 18 or that you are the parent
              or guardian of such a minor and consent to such minor dependent's use of the Services.
              If we learn that personal information from users less than 18 years of age has been
              collected, we will deactivate the account and take reasonable measures to promptly
              delete such data.
            </p>
          </section>

          <section id="section-8">
            <h2 className="text-2xl font-bold text-slate-900">8. What Are Your Privacy Rights?</h2>
            <p>
              In some regions, you have rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your account at any time. To
              make such a request, please contact us at{' '}
              <a href="mailto:support@cali22.com" className="text-violet-600 underline">
                support@cali22.com
              </a>
              .
            </p>
          </section>

          <section id="section-9">
            <h2 className="text-2xl font-bold text-slate-900">9. Controls for Do-Not-Track Features</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy
              preference not to have data about your online browsing activities monitored and
              collected. At this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not currently respond to
              DNT browser signals or any other mechanism that automatically communicates your choice
              not to be tracked online.
            </p>
          </section>

          <section id="section-10">
            <h2 className="text-2xl font-bold text-slate-900">10. Do United States Residents Have Specific Privacy Rights?</h2>
            <p>
              If you are a resident of California, Colorado, Connecticut, Utah, or Virginia, you are
              granted specific rights regarding access to your personal information. Under the
              California Consumer Privacy Act (CCPA), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Know what personal information we collect, use, or disclose.</li>
              <li>Request deletion of your personal information.</li>
              <li>Opt out of the sale or sharing of your personal information (we do not sell your data).</li>
              <li>Non-discrimination for exercising your rights.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{' '}
              <a href="mailto:support@cali22.com" className="text-violet-600 underline">
                support@cali22.com
              </a>
              .
            </p>
          </section>

          <section id="section-11">
            <h2 className="text-2xl font-bold text-slate-900">11. Do We Make Updates to This Notice?</h2>
            <p>
              We may update this Privacy Notice from time to time. The updated version will be
              indicated by an updated "Revised" date at the top of this Privacy Notice. We encourage
              you to review this Privacy Notice frequently to be informed of how we are protecting
              your information.
            </p>
          </section>

          <section id="section-12">
            <h2 className="text-2xl font-bold text-slate-900">12. How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments about this notice, you may email us at{' '}
              <a href="mailto:support@cali22.com" className="text-violet-600 underline font-semibold">
                support@cali22.com
              </a>{' '}
              or contact us by post at:
            </p>
            <p className="mt-3">
              HB &amp; EMANN LLC<br />
              United States
            </p>
          </section>

          <section id="section-13">
            <h2 className="text-2xl font-bold text-slate-900">13. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
            <p>
              Based on the applicable laws of your country, you may have the right to request access
              to the personal information we collect from you, change that information, or delete it.
              To request to review, update, or delete your personal information, please contact us at{' '}
              <a href="mailto:support@cali22.com" className="text-violet-600 underline">
                support@cali22.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
