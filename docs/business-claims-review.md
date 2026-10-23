# TrustLayerLabs Business Claims & Factual Verification Register

**Review Date:** October 2026  
**Auditor:** Senior Technical Auditor & Brand Integrity Lead  
**Document Purpose:** Catalog all business claims, certifications, entity registrations, and operational commitments made across the TrustLayerLabs platform. Strictly enforces the **ZERO-CLIENT GROUND TRUTH POLICY**.

---

## 1. Verified & Substantiated Business Claims

The following claims are verified against repository source assets, governmental registries, and cryptographic certification IDs:

| Claim Category | Verified Detail | Verification Basis / Source Asset | Status on Site |
| :--- | :--- | :--- | :--- |
| **Legal Entity Registration** | Micro, Small and Medium Enterprise (MSME) Registered Entity, Government of India | **Udyam Registration Number:** `UDYAM-AP-21-0044317`<br/>*Asset:* `public/trustlayerlabs-udyam-registration-certificate.jpg`<br/>*Interactive:* Integrated in [`CertificateModal.tsx`](file:///c:/Users/nagas/Desktop/trustlayerfrontend/components/CertificateModal.tsx) | **ACTIVE & VERIFIED** |
| **Founder Credentials (Nagasrinivasa Rao)** | Founder & Lead Security Architect | • **CyberWarfare Labs C3SA** (Certified Cyber Security Analyst)<br/>*Credential ID:* `C3SA-6ad1ceaeb6d122ea6a9362fa`<br/>*Asset:* `public/c3sa-nagasrinivasarao.png`<br/>• Certified Ethical Hacker (CEH)<br/>• Alum: IIT Guwahati<br/>• LinkedIn: [nagasrinivasarao9](https://www.linkedin.com/in/nagasrinivasarao9/) | **ACTIVE & VERIFIED** |
| **Co-Founder Credentials (Ramineni Teja)** | Co-Founder & GRC Lead | • **ISO/IEC 27001 Lead Auditor** (TÜV / accredited)<br/>*Asset:* `public/iso-27001-ramineni-teja.png`<br/>• CWL C3SA (Certificate modal active)<br/>• CWL BTF (Certified)<br/>• Alum: VIT Bhopal<br/>• LinkedIn: [ramineniteja](https://www.linkedin.com/in/ramineniteja) | **ACTIVE & VERIFIED** |
| **Team Member (Nayansi Anand)** | Application Security Engineer & VAPT Consultant | • Certified Ethical Hacker (CEH)<br/>• Web application & OWASP Top 10 focus<br/>• Alum: VIT Bhopal<br/>• LinkedIn: [nayansi-anand-35a99a31b](https://www.linkedin.com/in/nayansi-anand-35a99a31b/) | **ACTIVE & VERIFIED** |
| **Team Member (Dodda Jagadeesh)** | Operations & Engagement Lead | • Operations coordination, scheduling, and mutual NDA execution<br/>• Alum: Malla Reddy University<br/>• LinkedIn: [dodda-jagadeesh](https://www.linkedin.com/in/dodda-jagadeesh) | **ACTIVE & VERIFIED** |
| **Official Contact Information** | Official Channels | • Email: `ceo@trustlayerlabs.co.in`<br/>• Telephone / WhatsApp: `+91 93912 20328`<br/>• Booking Calendar: `https://cal.com/nagasrinivasarao/30min`<br/>• LinkedIn Company: `https://www.linkedin.com/company/trustlayerlabs1/` | **ACTIVE & VERIFIED** |
| **Illustrative Sample Report** | 46-Page Representative Sample VAPT Report | • Asset: `public/trustlayerlabs-sample-vapt-report.pdf`<br/>• Explicitly marked: *"Representative example — not a client engagement. Target application and findings shown are representative lab scenarios."* | **ACTIVE & VERIFIED** |
| **Engagement Guarantees** | Technical Terms of Service | • Mutual Non-Disclosure Agreement (NDA) executed upfront prior to technical disclosures<br/>• Complimentary 30-day retesting included on all identified findings<br/>• Signed Attestation Letter issued upon retest confirmation | **ACTIVE & VERIFIED** |

---

## 2. Fabricated Claims Removed Across Platform

The following claims were identified as unsupported during this audit and have been **strictly removed from all pages, components, and data structures**:

1. **Named Client Testimonials & Quotes:**  
   * Removed: "Srikanth R., VP Eng, FinTech", "Vikram Shenoy, Head of Product", "Narasimha Reddy (TFS)", "Sujith Reddy Gopu (Fluent Pro)", "Abhishek (Conquer)", "Aryan (PayAtom)".  
   * Status: **Permanently purged**.
2. **Fabricated Customer Counts & Metrics:**  
   * Removed: "+50" avatar badge, "From 50+ enterprise security audits", "50+ Tech Platforms Audited", fake five-star rating visualizations.  
   * Status: **Permanently purged**.
3. **Manufactured Scarcity / False Urgency:**  
   * Removed: "Only 2 assessment slots available this month!".  
   * Replaced With: "Direct Practitioner Scoping · 30-Min Confidential Review".
4. **Implied Client Portfolio:**  
   * Removed: "Our Work Speaks for Itself" project cards and "Verified Assessments & Case Studies" carousel.  
   * Status: **Components deleted and unrendered**.

---

## 3. Items Flagged for Business Owner Confirmation

The following operational details are technically implemented but require explicit confirmation from the business founder:

| Item | Current Implementation | Owner Action Required |
| :--- | :--- | :--- |
| **1. Commercial Pricing Tiers** | `lib/constants.ts` defines Starter Pentest (₹5,000), Growth Security (₹15,000), and Pro VAPT (₹25,000). | Confirm whether these introductory figures remain the active fixed-scope commercial rates or if proposals should transition to custom scoping quotations. |
| **2. Resend DNS Domain Verification** | `RESEND_API_KEY` is present in local environment, but outbound transactional emails from `leads@trustlayerlabs.co.in` require verified DKIM/SPF DNS records on `trustlayerlabs.co.in` inside the Resend dashboard. | Add DNS records (`CNAME` / `TXT`) in your domain registrar to enable outbound email delivery to external inboxes. |
| **3. City SEO Landing Pages** | `/vapt-bangalore` and `/vapt-hyderabad` exist for local search discovery. | Confirm whether remote-first language should be emphasized on localized landing pages to clarify that physical offices are not staffed in those locations. |

---

## 4. Policy Compliance Statement
TrustLayerLabs complies with ethical marketing standards:
- **Zero fake clients**
- **Zero fake reviews**
- **Zero fake case studies**
- **100% verified technical capabilities and practitioner credentials**
