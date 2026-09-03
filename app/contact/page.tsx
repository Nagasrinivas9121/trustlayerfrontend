import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-20">
        <ContactForm asH1={true} />
      </main>
    </div>
  );
}
