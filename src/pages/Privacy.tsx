import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { company, formatPhone } from '@/lib/company';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg dark:prose-invert max-w-none glass-panel p-8 md:p-12 rounded-[2rem] border"
          >
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: October 2025</p>

            <p>At KUSH INTEGRATED SYSTEMS, we prioritize the privacy and security of our clients. This policy outlines how we collect, use, and protect your information when you interact with our website or use our services.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect information to provide better services to our users. This includes:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company details provided via our contact forms.</li>
              <li><strong>Service Data:</strong> Details about your premises, floor plans, and existing infrastructure necessary for site surveys and quotations.</li>
              <li><strong>Usage Data:</strong> Standard analytics (cookies, IP addresses, browser type) to improve our website experience.</li>
            </ul>

            <h2 className="font-heading text-2xl mt-8 mb-4">2. CCTV & Surveillance Data</h2>
            <p>As a security integration company, we install CCTV and biometric systems on your premises. <strong>We do not retain access to your live feeds, recordings, or biometric data</strong> after the installation is complete unless explicitly granted remote access via a signed Annual Maintenance Contract (AMC) for troubleshooting purposes. All data resides on local NVRs/servers owned and controlled by you.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">3. Data Recovery Privacy</h2>
            <p>When performing data recovery services on crashed hard drives or servers, we adhere to strict confidentiality protocols. Recovered data is temporarily stored on offline, encrypted drives and securely wiped using military-grade deletion standards within 7 days of returning the data to the client.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">4. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Process your requests and provide accurate quotations.</li>
              <li>Communicate regarding installation schedules, AMC renewals, and support tickets.</li>
              <li>Send critical security alerts or updates regarding hardware firmware.</li>
            </ul>

            <h2 className="font-heading text-2xl mt-8 mb-4">5. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We may share necessary details with hardware manufacturers (like Hikvision, Cisco) solely for the purpose of warranty registration and RMA claims.</p>

            <h2 className="font-heading text-2xl mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>Contact Person:</strong> {company.contact.person}<br/>
              <strong>Email:</strong> {company.contact.email}<br/>
              <strong>Phone:</strong> {company.contact.phones.map(formatPhone).join(" / ")}<br/>
              <strong>Address:</strong> {company.address.full}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
