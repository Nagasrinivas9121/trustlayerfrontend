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
export const TRACK_RECORD_ENTRIES: TrackRecordItem[] = [];

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
