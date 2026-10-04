"use client";

import React, { useState, useEffect } from "react";

interface ObfuscatedEmailLinkProps {
  user?: string;
  domain?: string;
  className?: string;
  children?: React.ReactNode;
  subject?: string;
  ariaLabel?: string;
}

export default function ObfuscatedEmailLink({
  user = "ceo",
  domain = "trustlayerlabs.co.in",
  className = "",
  children,
  subject = "Security Assessment Enquiry",
  ariaLabel = "Send email to TrustLayerLabs",
}: ObfuscatedEmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = `${user}@${domain}`;
    const mailto = subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
    window.location.href = mailto;
  };

  return (
    <a
      href="/contact"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      title="Click to send an email"
    >
      {children ? children : (mounted ? `${user}@${domain}` : "Contact TrustLayerLabs")}
    </a>
  );
}
