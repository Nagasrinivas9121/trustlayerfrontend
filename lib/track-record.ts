/**
 * Public Verifiable Track Record for TrustLayerLabs Security Practitioners
 * 
 * NOTE: As a zero-client cybersecurity practice, we only present verifiable,
 * public security disclosures, CVEs, or bug bounty acknowledgments.
 * If this array is empty, the section automatically hides.
 * 
 * Replace placeholder entries below with real verified disclosure links when landed.
 */

export interface TrackRecordItem {
  id: string;
  type: "CVE" | "Bug Bounty Acknowledgment" | "Responsible Disclosure" | "Technical Write-Up";
  title: string;
  targetOrVendor: string;
  link: string;
  date: string;
  summary: string;
  isPlaceholder?: boolean;
}

// Populate this array with real verified public disclosures, CVEs, or bug bounty advisories.
// If left empty, the track record section automatically hides itself on the website.
export const TRACK_RECORD_ENTRIES: TrackRecordItem[] = [
  {
    id: "research-scenario-01",
    type: "Technical Write-Up",
    title: "Broken Object Level Authorization (BOLA) in Multi-Tenant REST APIs",
    targetOrVendor: "Multi-Tenant SaaS Workspaces (REST / GraphQL)",
    link: "/case-studies",
    date: "Research Advisory",
    summary: "Demonstration of horizontal authorization bypass where unvalidated tenant boundary checks allow cross-organization metadata exfiltration.",
    isPlaceholder: false,
  },
  {
    id: "research-scenario-02",
    type: "Technical Write-Up",
    title: "Privilege Escalation via JWT Algorithm Confusion & Unverified Claims",
    targetOrVendor: "OAuth 2.0 & JWT Authentication Gateways",
    link: "/case-studies",
    date: "Research Advisory",
    summary: "Analysis of asymmetric token verification flaws where public verification keys treated as HMAC secrets yield unauthorized administrative sessions.",
    isPlaceholder: false,
  },
];

export const FOUNDER_PROFILES = [
  {
    name: "Nagasrinivasa Rao",
    role: "Founder & Lead Security Architect",
    education: "IIT Guwahati",
    credentials: "CEH · CWL C3SA",
    linkedin: "https://www.linkedin.com/in/nagasrinivasarao9/",
    avatar: "/nagasrinivasarao.jpg"
  },
  {
    name: "Ramineni Teja",
    role: "Co-Founder & GRC Lead",
    education: "VIT Bhopal",
    credentials: "ISO/IEC 27001 Lead Auditor · CWL C3SA",
    linkedin: "https://www.linkedin.com/in/ramineniteja",
    avatar: "/ramineniteja.jpg"
  },
  {
    name: "Nayansi Anand",
    role: "VAPT Specialist",
    education: "Offensive Engineering",
    credentials: "CEH · Web App & API Security",
    linkedin: "https://www.linkedin.com/in/nayansianand/",
    avatar: "/nayansianand.jpg"
  }
];
