import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Cloud Security Audit Services | AWS, Azure, GCP Security",
  description: "Secure your cloud infrastructure with expert security audits. We identify misconfigurations, IAM flaws, and data leaks in AWS, GCP, and Azure.",
};

export default function CloudSecurity() {
  const content = {
    title: "Cloud Security Audits",
    description: "Protect your cloud infrastructure from misconfigurations and unauthorized access with our expert AWS, Azure, and GCP security reviews.",
    problem: {
      title: "Cloud misconfigurations cause 80% of data breaches.",
      description: "Complex cloud environments often have overly permissive IAM roles, exposed S3 buckets, and unencrypted databases that are easily discovered by attackers."
    },
    solution: {
      title: "Comprehensive Cloud Infrastructure Review",
      description: "We perform a deep dive into your cloud configuration, identity management, and network security to ensure your infrastructure follows the Principle of Least Privilege."
    },
    outcomes: [
      "Secure IAM roles and permissions",
      "Remediate exposed storage buckets and databases",
      "Optimize network security (VPCs, Security Groups)",
      "Audit cloud-native services for best practices"
    ],
    benefits: [
      {
        title: "Multi-Cloud Expertise",
        description: "Our team is certified in AWS, Microsoft Azure, and Google Cloud Platform (GCP)."
      },
      {
        title: "Infrastructure as Code Audit",
        description: "We review your Terraform or CloudFormation templates to secure infrastructure before deployment."
      },
      {
        title: "Compliance Alignment",
        description: "We map cloud findings to SOC2, PCI-DSS, and CIS Benchmarks."
      }
    ],
    process: [
      {
        title: "IAM & Access Review",
        description: "Auditing all users, roles, and policies for excessive permissions."
      },
      {
        title: "Storage & Network Audit",
        description: "Scanning for publicly accessible data and insecure network configurations."
      },
      {
        title: "Vulnerability Scanning",
        description: "Running security audits on EC2 instances, containers, and serverless functions."
      },
      {
        title: "Remediation Roadmap",
        description: "Step-by-step instructions to harden your cloud environment."
      }
    ],
    faqs: [
      {
        question: "Do you need admin access to our cloud?",
        answer: "We typically require read-only access (Auditor role) to perform a comprehensive configuration review without the risk of making changes."
      },
      {
        question: "Which cloud providers do you support?",
        answer: "We specialize in the 'Big Three': AWS, Microsoft Azure, and Google Cloud Platform, as well as specialized providers like DigitalOcean."
      },
      {
        question: "How long does a cloud audit take?",
        answer: "Depending on the number of accounts and resources, a thorough audit typically takes between 1 and 2 weeks."
      }
    ]
  };

  return <ServiceLayout {...content} />;
}
