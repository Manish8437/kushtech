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
    mapsUrl: "https://share.google/buoIUuqPGfcu9x4kQ",
    googleBusinessUrl: "https://share.google/buoIUuqPGfcu9x4kQ",
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

  inquiryServices: [
    "CCTV Camera Setup",
    "Biometric & Access Control",
    "Intrusion Alarm Systems",
    "EPABX & Intercom Systems",
    "Video Door Phone Systems",
    "Networking & Maintenance",
    "AMC Services",
    "Other Query",
  ] as const,

  /** Brands featured on the products page */
  products: [
    { name: "CP Plus", url: "https://cpplusworld.com/", image: "products/cp-plus.png" },
    { name: "Prama India", url: "https://www.pramaindia.in/", image: "products/prama.png" },
    { name: "Hifocus", url: "https://hifocuscctv.com/", image: "products/hifocus.png" },
    { name: "Dahua", url: "https://www.dahuasecurity.com/ph", image: "products/dahua.png" },
    { name: "Hikvision", url: "https://www.hikvisionindia.com/", image: "products/hikvision.png" },
    { name: "Secureye", url: "https://secureye.com/", image: "products/secureye.png" },
    { name: "NEXIVUE", url: "https://www.nexivuesecurity.com/" },
    { name: "Sparsh", url: "https://www.sparshsecuritech.com/", image: "products/sparsh.png" },
    { name: "Honeywell", url: "https://www.honeywellbuildings.in/intelligent-security/enterprise-solution/video-system", image: "products/honeywell.webp" },
    { name: "SECURUS", url: "https://www.securuscctv.com/", image: "products/securus.jpg" },
    { name: "AMCOM", url: "https://amcomindia.com/" },
    { name: "TVT India", url: "https://www.tvtindia.com/" },
    { name: "Panasonic", url: "https://security.in.panasonic.com/surveillance-cameras", image: "products/panasonic.png" },
    { name: "eSSL", url: "https://esslsecurity.com/", image: "products/essl.png" },
    { name: "CCL", url: "https://www.copperconnections.com/", image: "products/ccl.png" },
    { name: "Matrix", url: "https://www.matrixcomsec.com/", image: "products/matrix.png" },
    { name: "Telesoft", url: "https://www.telesoft.in/", image: "products/telesoft.png" },
    { name: "D-Link", url: "https://www.dlink.com/in/en" },
    { name: "TP-Link", url: "https://www.tp-link.com/in/", image: "products/tplink.svg" },
    { name: "Digisol", url: "https://www.digisol.com/", image: "products/digisol.png" },
    { name: "Tenda", url: "https://www.tendaindia.com/", image: "products/tenda.png" },
    { name: "UniFi & Ubiquiti", url: "https://in.store.ui.com/in/en?s=in&l=en", image: "products/ubiquiti.svg" },
    { name: "Seagate", url: "https://www.seagate.com/in/en/products/", image: "products/seagate.svg" },
    { name: "WD", url: "https://www.westerndigital.com/en-in", image: "products/wd.svg" },
    { name: "QNAP", url: "https://www.qnap.com/en-in", image: "products/qnap.svg" },
    { name: "Synology", url: "https://www.synology.com/en-in", image: "products/synology.svg" },
  ] as const,

  brands: [
    "CP Plus",
    "Prama India",
    "Hifocus",
    "Dahua",
    "Hikvision",
    "Secureye",
    "NEXIVUE",
    "Sparsh",
    "Honeywell",
    "SECURUS",
    "AMCOM",
    "TVT India",
    "Panasonic",
    "eSSL",
    "CCL",
    "Matrix",
    "Telesoft",
    "D-Link",
    "TP-Link",
    "Digisol",
    "Tenda",
    "UniFi & Ubiquiti",
    "Seagate",
    "WD",
    "QNAP",
    "Synology",
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
