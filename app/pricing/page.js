// Pricing plans and walkthrough booking page for KanchanFlow
"use client";

import { useState } from "react";
import Button from "@/components/Button";

const monthlyPrices = {
  workshop: "₹5,500",
  plant: "₹14,500",
};

const annualPrices = {
  workshop: "₹4,500",
  plant: "₹12,000",
};

const planFeatures = {
  workshop: [
    "Up to 5 estimation and sales users",
    "Drawing revision storage and PDF viewer",
    "Standard cost buildup templates",
    "Email quotation generation",
    "Community and standard email support",
  ],
  plant: [
    "Up to 25 production and engineering users",
    "Full drawing revision audit trail with ECN logging",
    "Machine hourly rate and tooling wear calculators",
    "Work order release and station job cards",
    "GST and e-Invoicing compliance suite",
    "WhatsApp notification module",
    "Priority phone and engineering support",
  ],
  enterprise: [
    "Unlimited plant and shop-floor users",
    "Multi-facility inventory and routing trees",
    "Custom ERP and accounting API integrations",
    "Dedicated implementation specialist",
    "On-premise or private cloud hosting options",
    "24/7 SLA-backed technical assistance",
  ],
};

const pricingFaqs = [
  {
    question: "Are the prices shown on this page the official KanchanFlow rates?",
    answer:
      "The prices shown are illustrative figures provided for reference purposes as part of this frontend assignment. They are not verified official KanchanFlow prices. For actual commercial pricing, please use the walkthrough request form below to speak with a solution engineer.",
  },
  {
    question: "What does the annual billing option include?",
    answer:
      "The annual billing option reflects a reduced monthly rate compared to month-to-month billing. Both options include the same features and support levels for each plan tier. Annual billing is invoiced upfront for twelve months.",
  },
  {
    question: "Can we start on the Workshop Edition and upgrade later?",
    answer:
      "Yes. The editions are designed to support growth. You can upgrade from Workshop to Plant Edition when your user count increases or when you need additional modules such as full drawing audit trail and WhatsApp notifications. Your existing data migrates to the new plan automatically.",
  },
  {
    question: "What is included in the onboarding for each plan?",
    answer:
      "Workshop Edition includes a guided self-setup with documentation and a community support channel. Plant Edition includes up to three remote onboarding sessions with a KanchanFlow engineer who will configure your machine rates, material price lists and quotation templates. Enterprise Operations includes a dedicated implementation specialist for the full deployment.",
  },
  {
    question: "Is there a free trial or evaluation period?",
    answer:
      "Rather than an open trial, KanchanFlow offers a 1-on-1 walkthrough session where our engineering team demonstrates the system using your actual parts drawings and quotation requirements. This approach ensures the evaluation is relevant to your facility's workflow.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("annual");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plantType: "CNC Machining",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  function handleToggleBilling(option) {
    setBilling(option);
  }

  function handleToggleFaq(index) {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  }

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
      message:
        "Thank you, " +
        formData.name +
        ". Your walkthrough request for " +
        (formData.company || "your facility") +
        " has been received. A KanchanFlow solution engineer will contact you shortly.",
    });
  }

  let statusElement = null;
  if (submissionStatus) {
    if (submissionStatus.success) {
      statusElement = (
        <div className="mt-4 rounded border border-warm-gold bg-[#FFFDF7] p-4 text-sm text-[#705216]" role="alert">
          {submissionStatus.message}
        </div>
      );
    } else {
      statusElement = (
        <div className="mt-4 rounded border border-[#D9A098] bg-[#FDF6F5] p-4 text-sm text-[#8A3B2A]" role="alert">
          {submissionStatus.message}
        </div>
      );
    }
  }

  let workshopPrice = annualPrices.workshop;
  let plantPrice = annualPrices.plant;
  let periodLabel = "per month, billed annually";

  if (billing === "monthly") {
    workshopPrice = monthlyPrices.workshop;
    plantPrice = monthlyPrices.plant;
    periodLabel = "per month, billed monthly";
  }

  let annualButtonClass =
    "px-4 py-2 text-sm font-semibold rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold";
  let monthlyButtonClass =
    "px-4 py-2 text-sm font-semibold rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold";

  if (billing === "annual") {
    annualButtonClass = annualButtonClass + " bg-graphite text-white";
    monthlyButtonClass = monthlyButtonClass + " text-[#555A54] hover:text-graphite";
  } else {
    monthlyButtonClass = monthlyButtonClass + " bg-graphite text-white";
    annualButtonClass = annualButtonClass + " text-[#555A54] hover:text-graphite";
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="border-b border-steel-grey bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-4">
            Commercial Plans
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl max-w-3xl">
            Predictable pricing for manufacturing units
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-grey sm:text-lg leading-relaxed">
            Choose the tier that matches your facility size and quotation volume. All plans include drawing revision tracking and GST-ready commercial documentation.
          </p>
          <p className="mt-3 text-xs text-[#8E948C]">
            Prices shown are illustrative and are not verified official KanchanFlow commercial rates. See pricing FAQ below for details.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="border-b border-steel-grey bg-off-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <span className="text-sm font-medium text-graphite">Billing period:</span>
            <div
              className="inline-flex rounded border border-steel-grey bg-white p-1"
              role="group"
              aria-label="Select billing period"
            >
              <button
                type="button"
                id="billing-annual"
                aria-pressed={billing === "annual"}
                onClick={() => handleToggleBilling("annual")}
                className={annualButtonClass}
              >
                Annual
              </button>
              <button
                type="button"
                id="billing-monthly"
                aria-pressed={billing === "monthly"}
                onClick={() => handleToggleBilling("monthly")}
                className={monthlyButtonClass}
              >
                Monthly
              </button>
            </div>
            {billing === "annual" && (
              <span className="rounded bg-[#D6EAD9] px-3 py-1 text-xs font-semibold text-[#2D6B33]">
                Save approx. 18% vs monthly
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="border-b border-steel-grey bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Workshop Edition */}
            <div className="flex flex-col justify-between rounded border border-steel-grey bg-white p-8">
              <div>
                <h2 className="text-xl font-bold text-graphite">Workshop Edition</h2>
                <p className="mt-1 text-xs text-[#555A54]">Single-facility job shops and toolrooms</p>
                <div className="mt-6 border-b border-steel-grey pb-6">
                  <div className="text-3xl font-bold text-graphite">{workshopPrice}</div>
                  <div className="text-xs text-[#71766F] mt-1">{periodLabel}</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-[#40443F]">
                  {planFeatures.workshop.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-warm-gold font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <Button href="#walkthrough" variant="secondary" className="w-full">
                  Choose Workshop Edition
                </Button>
              </div>
            </div>

            {/* Plant Edition — recommended */}
            <div className="relative flex flex-col justify-between rounded border-2 border-warm-gold bg-white p-8">
              <span className="absolute -top-3 right-6 rounded bg-warm-gold px-3 py-0.5 text-xs font-bold text-graphite uppercase tracking-wider">
                Recommended
              </span>
              <div>
                <h2 className="text-xl font-bold text-graphite">Plant Edition</h2>
                <p className="mt-1 text-xs text-[#555A54]">Growing MSME manufacturers and CNC units</p>
                <div className="mt-6 border-b border-steel-grey pb-6">
                  <div className="text-3xl font-bold text-graphite">{plantPrice}</div>
                  <div className="text-xs text-[#71766F] mt-1">{periodLabel}</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-[#40443F]">
                  {planFeatures.plant.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-warm-gold font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <Button href="#walkthrough" variant="primary" className="w-full">
                  Choose Plant Edition
                </Button>
              </div>
            </div>

            {/* Enterprise Operations */}
            <div className="flex flex-col justify-between rounded border border-steel-grey bg-white p-8">
              <div>
                <h2 className="text-xl font-bold text-graphite">Enterprise Operations</h2>
                <p className="mt-1 text-xs text-[#555A54]">Multi-plant contract manufacturers</p>
                <div className="mt-6 border-b border-steel-grey pb-6">
                  <div className="text-3xl font-bold text-graphite">Custom</div>
                  <div className="text-xs text-[#71766F] mt-1">Tailored deployment and onboarding</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-[#40443F]">
                  {planFeatures.enterprise.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-warm-gold font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <Button href="#walkthrough" variant="secondary" className="w-full">
                  Contact for Enterprise Pricing
                </Button>
              </div>
            </div>
          </div>

          {/* Plan comparison note */}
          <div className="mt-8 rounded border border-steel-grey bg-off-white p-4 text-xs text-[#71766F] text-center">
            All illustrative prices are shown in Indian Rupees (INR). They are provided for reference only and do not represent official commercial terms.
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="border-b border-steel-grey bg-off-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Pricing Questions
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Frequently asked pricing questions
            </h2>
            <p className="mt-2 text-sm text-[#555A54]">
              Honest answers about plans, billing and evaluation options.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              let answerElement = null;
              if (isOpen) {
                answerElement = (
                  <div
                    id={"pricing-faq-answer-" + index}
                    role="region"
                    aria-labelledby={"pricing-faq-question-" + index}
                    className="border-t border-[#E8ECE7] px-6 pb-5 pt-3 text-sm leading-relaxed text-[#555A54]"
                  >
                    {faq.answer}
                  </div>
                );
              }

              let iconText = "+";
              if (isOpen) {
                iconText = "−";
              }

              return (
                <div
                  key={index}
                  className="rounded border border-steel-grey bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    id={"pricing-faq-question-" + index}
                    aria-expanded={isOpen}
                    aria-controls={"pricing-faq-answer-" + index}
                    onClick={() => handleToggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-graphite transition-colors hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 font-mono text-base font-bold text-warm-gold flex-shrink-0">
                      {iconText}
                    </span>
                  </button>
                  {answerElement}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Walkthrough Booking */}
      <section id="walkthrough" className="border-b border-steel-grey bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Live Product Demo
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Book a 1-on-1 walkthrough for your facility
            </h2>
            <p className="mt-2 text-sm text-[#555A54] leading-relaxed">
              See how KanchanFlow configures machine rates, drawing revision sync and work order releases using your actual parts drawings.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 rounded border border-steel-grey bg-off-white p-6 sm:p-8"
            noValidate
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="walkthrough-name"
                  className="block text-xs font-semibold text-graphite"
                >
                  Full Name *
                </label>
                <input
                  id="walkthrough-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Patel"
                  autoComplete="name"
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="walkthrough-email"
                  className="block text-xs font-semibold text-graphite"
                >
                  Work Email *
                </label>
                <input
                  id="walkthrough-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ramesh@pateleng.com"
                  autoComplete="email"
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="walkthrough-company"
                  className="block text-xs font-semibold text-graphite"
                >
                  Company / Plant Name
                </label>
                <input
                  id="walkthrough-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Patel Precision Engineering"
                  autoComplete="organization"
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="walkthrough-planttype"
                  className="block text-xs font-semibold text-graphite"
                >
                  Primary Operations Focus
                </label>
                <select
                  id="walkthrough-planttype"
                  name="plantType"
                  value={formData.plantType}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-steel-grey bg-white px-3 py-2 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
                >
                  <option value="CNC Machining">CNC Machining and Milling</option>
                  <option value="Sheet Metal Fabrication">Sheet Metal and Laser Cutting</option>
                  <option value="Forging and Casting">Forging and Casting Finishing</option>
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

      {/* Final CTA */}
      <section className="bg-off-white py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-graphite sm:text-3xl">
            Not ready to book a walkthrough yet?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-[#555A54] leading-relaxed">
            Review the full feature list to understand how KanchanFlow handles quotation management, drawing control and shop-floor pipeline tracking before reaching out.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/features" variant="dark">
              Explore all features
            </Button>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
