/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScenariosGallery } from './components/ScenariosGallery';
import { HowItWorks } from './components/HowItWorks';
import { Bonuses } from './components/Bonuses';
import { TargetAudience } from './components/TargetAudience';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'premium' | 'basico'>('premium');

  const handleOpenCheckout = (plan: 'premium' | 'basico') => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-slate-800 flex flex-col font-maven">
      {/* Top sticky navigation bar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 35 Scenarios 3D Gallery */}
        <ScenariosGallery onSelectPlan={() => handleOpenCheckout('premium')} />

        {/* How It Works (Imprima, Recorte, Dobre, Monte) */}
        <HowItWorks />

        {/* 4 Super Bonuses */}
        <Bonuses />

        {/* Perfect For Ministry, Teachers, EBD, Families */}
        <TargetAudience />

        {/* Testimonials & WhatsApp Reviews */}
        <SocialProof />

        {/* Pricing Comparison (#COMPRA) */}
        <Pricing onSelectPlan={handleOpenCheckout} />

        {/* 7-Day Guarantee */}
        <Guarantee />

        {/* FAQ Accordion */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA & WhatsApp button */}
      <FloatingCta />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
