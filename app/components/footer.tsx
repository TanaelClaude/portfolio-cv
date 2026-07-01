import React from "react";

export function Footer() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="/contact-form"
        rel="noopener noreferrer"
        aria-label="Ouvrir le formulaire de contact dans un nouvel onglet"
        className="inline-flex items-center px-4 py-2 bg-white/90 text-black rounded-full shadow-lg ring-0 hover:ring-6 hover:ring-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.55)] hover:scale-105 hover:bg-white focus:outline-none transition-transform duration-200 ease-out"
      >
        Contactez-moi
      </a>
    </div>
  );
}

export default Footer;
