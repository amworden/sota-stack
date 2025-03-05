import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="space-y-8 mt-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to Sota Stack ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at sotastack.com (together or individually "Service") operated by Sota Stack.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at info@sotastack.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at info@sotastack.com.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Contests, Sweepstakes and Promotions</h2>
            <p>
              Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Refunds</h2>
            <p>
              We issue refunds for Contracts within 30 days of the original purchase of the Contract.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at info@sotastack.com.
            </p>
          </section>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 