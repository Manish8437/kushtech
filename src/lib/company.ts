/**
 * Central company data — sourced from business cards, banners, and Google Business profile.
 * Update this file when contact or service details change.
 */
export const company = {
  name: "KUSH INTEGRATED SYSTEMS",
  shortName: "KIS",
  legalName: "Kush Integrated Systems",
  formerName: "KushTech Solutions",
  tagline: "Smart Technology. Secure Future.",
  headline: "Your Trusted IT Solutions Partner",
  subheadline: "Reliable Solutions. Advanced Technology. Expert Support.",
  description:
    "Kanpur's most trusted partner for surveillance, security, networking, and automation — CCTV, biometric access control, intrusion alarms, EPABX, video door phones, and enterprise networking.",
  pillars: ["Surveillance", "Security", "Networking", "Automation"] as const,
  values: [
    "Reliable Solutions",
    "Advanced Technology",
    "Expert Support",
    "Quality Assured",
  ] as const,

  contact: {
    person: "Sandeep Kushwaha",
    phones: ["7275442374", "8005354413"] as const,
    primaryPhone: "7275442374",
    email: "kushintegratedsystems@gmail.com",
    legacyEmail: "kushtech33@gmail.com",
    whatsapp: "917275442374",
  },

  address: {
    line1: "84/18 Fazalganj",
    line2: "Near MSME Technology Centre",
    city: "Kanpur",
    state: "Uttar Pradesh",
    pincode: "208012",
    country: "India",
    full: "84/18 Fazalganj, Near MSME Technology Centre, Kanpur, Uttar Pradesh – 208012",
    mapsUrl:
      "https://maps.google.com/?q=84/18+Fazalganj+Near+MSME+Technology+Centre+Kanpur+UP+208012",
    googleBusinessUrl: "https://share.google/ehNBjHBxsh3dlXEWU",
  },

  hours: {
    weekdays: "Mon–Sat: 9:00 AM – 7:00 PM",
    sunday: "Sun: Emergency Calls Only",
    emergency: "24/7 Emergency Support Available",
  },

  social: {
    instagram: "https://www.instagram.com/kis_systems",
    facebook: "https://www.facebook.com/share/182JDSqGHW/",
    youtube: "https://youtube.com/@kushintegratedsystems",
  },

  coreServices: [
    {
      title: "CCTV Camera Setup",
      desc: "HD, IP & WiFi camera systems with remote mobile viewing and cloud storage.",
    },
    {
      title: "Biometric & Access Control",
      desc: "Fingerprint, facial recognition, and smart door locks to secure your premises.",
    },
    {
      title: "Intrusion Alarm Systems",
      desc: "Motion sensors, glass break detectors, and intelligent alarm panels.",
    },
    {
      title: "EPABX & Intercom Systems",
      desc: "Office telephony, intercom, and multi-line communication solutions.",
    },
    {
      title: "Video Door Phone Systems",
      desc: "Smart intercom systems with visual verification at entry points.",
    },
    {
      title: "Networking & Maintenance",
      desc: "Structured cabling, switches, Wi-Fi, and ongoing network maintenance.",
    },
  ] as const,

  brands: [
    "Hikvision",
    "Dahua",
    "CP Plus",
    "Prama",
    "CVS+",
    "Godrej",
    "eSSL",
    "D-Link",
    "TP-Link",
    "Cisco",
    "HPE",
    "Schneider Electric",
    "Honeywell",
    "Bosch",
    "Matrix",
  ] as const,

  leadership: [
    {
      name: "Sandeep Kushwaha",
      role: "Founder & Director",
      initials: "SK",
      desc:
        "Leading KUSH INTEGRATED SYSTEMS with expertise in surveillance, security, and IT infrastructure across Kanpur and Uttar Pradesh.",
    },
    {
      name: "Lead Project Engineer",
      role: "Technical Lead",
      initials: "AR",
      desc:
        "Specialist in high-density Wi-Fi planning, structured cabling, and complex CCTV deployments. Certified Hikvision Partner.",
    },
    {
      name: "AMC & Support Manager",
      role: "Service Head",
      initials: "SM",
      desc:
        "Ensuring 99.9% uptime for retained clients. Manages a dedicated team of field engineers for rapid-response service.",
    },
  ] as const,
} as const;

export function formatPhone(phone: string): string {
  return `+91 ${phone}`;
}

export function telLink(phone: string): string {
  return `tel:+91${phone}`;
}
