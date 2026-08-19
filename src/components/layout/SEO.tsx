import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export function SEO({
  title,
  description = "KUSH INTEGRATED SYSTEMS — Your Trusted IT Solutions Partner in Kanpur. CCTV, Biometric Access Control, Intrusion Alarms, EPABX, Video Door Phones & Networking. Smart Technology. Secure Future.",
  image = `${import.meta.env.BASE_URL}logo.png`,
  canonical,
}: SEOProps) {
  const siteName = "KUSH INTEGRATED SYSTEMS";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
