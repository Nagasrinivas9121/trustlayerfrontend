/**
 * Future real proof items for TrustLayerLabs
 * Types: CVE | bug bounty acknowledgment | responsible disclosure | certificate
 * 
 * Ship it EMPTY. Only populated with verified disclosures/certificates.
 * When empty, the proof section is hidden from the page.
 */

export interface ProofItem {
  type: "CVE" | "bug bounty acknowledgment" | "responsible disclosure" | "certificate";
  title: string;
  url: string;
  date: string;
}

export const PROOF_ITEMS: ProofItem[] = [];
