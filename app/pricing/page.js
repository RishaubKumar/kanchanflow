// Pricing and walkthrough booking page for KanchanFlow
"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function PricingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plantType: "CNC Machining",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const plans = [
    {
      name: "Workshop Edition",
      target: "Single-facility job shops & toolrooms",
      price: "₹4,500",
      period: "per month / billed annually",
      features: [
        "Up to 5 estimation & sales users",
        "Drawing revision storage & PDF viewer",
        "Standard cost buildup templates",
        "Email quotation generation",
        "Community & standard email support",
      ],
      isPopular: false,
    },
    {
      name: "Plant Edition",
      target: "Growing MSME manufacturers & CNC units",
      price: "₹12,000",
      period: "per month / billed annually",
      features: [
        "Up to 25 production & engineering users",
        "Full drawing revision audit trail",
        "Machine hourly rate & tooling wear calculators",
        "Work order release & station job cards",
        "GST & e-Invoicing compliance suite",
        "Priority phone & WhatsApp engineering support",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise Operations",
      target: "Multi-plant contract manufacturers",
      price: "Custom",
      period: "tailored deployment & onboarding",
      features: [
        "Unlimited plant & shop-floor users",
        "Multi-facility inventory & routing trees",
        "Custom ERP/accounting API integrations",
        "Dedicated implementation specialist",
        "On-premise or private cloud hosting options",
        "24/7 SLA-backed technical assistance",
      ],
      isPopular: false,
    },
  ];

  function handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      const updated = { ...prev };
      updated[field] = value;
      return updated;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmissionStatus({
        success: false,
        message: "Please provide your name and work email address.",
      });
      return;
    }

    setSubmissionStatus({
      success: true,
      message: "Thank you, " + formData.name + ". Your walkthrough request for " + (formData.company || "your facility") + " has been scheduled. A KanchanFlow solution engineer will contact you shortly.",
    });
  }

  let statusElement = null;
  if (submissionStatus) {
    if (submissionStatus.success) {
      statusElement = (
        <div className="mt-4 rounded border border-warm-gold bg-[#FFFDF7] p-4 text-sm text-[#705216]">
          {submissionStatus.message}
        </div>
      );
    } else {
      statusElement = (
        <div className="mt-4 rounded border border-[#D9A098] bg-[#FDF6F5] p-4 text-sm text-[#8A3B2A]">
          {submissionStatus.message}
        </div>
      );
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="border-b border-steel-grey bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-4">
            Commercial Plans
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Predictable pricing for manufacturing units
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-grey sm:text-lg">
            No bloated enterprise licensing fees. Choose the tier that matches your shop floor and scale as your quotation volume grows.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => {
              let cardClasses = "flex flex-col justify-between rounded border border-steel-grey bg-white p-8";
              let badgeElement = null;

              if (plan.isPopular) {
                cardClasses = "flex flex-col justify-between rounded border-2 border-warm-gold bg-white p-8 relative";
                badgeElement = (
                  <span className="absolute -top-3 right-6 rounded bg-warm-gold px-3 py-0.5 text-xs font-bold text-graphite uppercase tracking-wider">
                    Recommended
                  </span>
                );
              }

              let buttonVariant = "secondary";
              if (plan.isPopular) {
                buttonVariant = "primary";
              }

              return (
                <div key={index} className={cardClasses}>
                  <div>
                    {badgeElement}
                    <h2 className="text-xl font-bold text-graphite">{plan.name}</h2>
                    <p className="mt-1 text-xs text-[#555A54]">{plan.target}</p>

                    <div className="mt-6 border-b border-steel-grey pb-6">
                      <div className="text-3xl font-bold text-graphite">{plan.price}</div>
                      <div className="text-xs text-[#71766F] mt-1">{plan.period}</div>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm text-[#40443F]">
                      {plan.features.map((feature, featureIndex) => {
                        return (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-warm-gold font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Button
                      href="#walkthrough"
                      variant={buttonVariant}
                      className="w-full"
                    >
                      Choose {plan.name}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Walkthrough Booking Section */}
      <section id="walkthrough" className="border-t border-steel-grey bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Live Product Demo
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Book a 1-on-1 walkthrough for your facility
            </h2>
            <p className="mt-2 text-sm text-[#555A54]">
              See how KanchanFlow configures machine rates, revision sync, and work order releases using your actual parts drawings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded border border-steel-grey bg-off-white p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-graphite">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Patel"
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-graphite">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ramesh@pateleng.com"
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-graphite">Company / Plant Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Patel Precision Engineering"
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-graphite">Primary Operations Focus</label>
                <select
                  name="plantType"
                  value={formData.plantType}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                >
                  <option value="CNC Machining">CNC Machining & Milling</option>
                  <option value="Sheet Metal Fabrication">Sheet Metal & Laser Cutting</option>
                  <option value="Forging & Casting">Forging & Casting Finishing</option>
                  <option value="General Job Shop">General Engineering Job Shop</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full">
                Confirm Walkthrough Request
              </Button>
            </div>

            {statusElement}
          </form>
        </div>
      </section>
    </div>
  );
}
