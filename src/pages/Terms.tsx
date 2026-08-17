import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg dark:prose-invert max-w-none glass-panel p-8 md:p-12 rounded-[2rem] border"
          >
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">Terms & Conditions</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: October 2025</p>

            <p>Welcome to KUSH INTEGRATED SYSTEMS. By engaging our services, purchasing hardware, or entering into an Annual Maintenance Contract (AMC), you agree to comply with and be bound by the following terms and conditions.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">1. Quotations & Pricing</h2>
            <p>Quotations provided after a site survey are valid for 15 days due to fluctuating hardware costs. Prices are exclusive of GST unless otherwise stated. Any change in the scope of work (e.g., adding extra cable runs or cameras) will result in a revised quotation.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">2. Payment Terms</h2>
            <p>Standard payment terms for new installations:</p>
            <ul>
              <li>50% advance payment upon approval of the quotation.</li>
              <li>40% upon delivery of hardware to the site.</li>
              <li>10% upon successful installation, testing, and handover.</li>
            </ul>
            <p>Hardware remains the property of KUSH INTEGRATED SYSTEMS until full payment is received.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">3. Warranties</h2>
            <ul>
              <li><strong>Hardware:</strong> Hardware carries the standard manufacturer's warranty (typically 1-3 years depending on the brand). We facilitate RMA (Return Merchandise Authorization) claims, but replacement timelines are governed by the manufacturer.</li>
              <li><strong>Workmanship:</strong> We provide a 1-year service warranty on our cabling and installation work. Physical damage caused by third parties, rodents, or natural disasters is not covered.</li>
            </ul>

            <h2 className="font-heading text-2xl mt-8 mb-4">4. Annual Maintenance Contracts (AMC)</h2>
            <p>AMC services cover preventive maintenance and troubleshooting. They do not cover the cost of replacing burnt or physically damaged hardware components unless specifically opted for a Comprehensive AMC. Response times are dictated by the specific SLA (Service Level Agreement) signed.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">5. Limitation of Liability</h2>
            <p>While we install robust security and network systems, KUSH INTEGRATED SYSTEMS is not liable for any direct or indirect losses incurred due to theft, fire, hacking, data loss, or hardware failure. Our systems are deterrents and investigative tools, not guarantees against illegal acts.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">6. Jurisdiction</h2>
            <p>These terms and conditions are governed by the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Kanpur, Uttar Pradesh.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
