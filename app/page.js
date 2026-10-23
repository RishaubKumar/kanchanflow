// KanchanFlow manufacturing CRM homepage
"use client";

import { useState } from "react";
import Button from "@/components/Button";
import ProductMockup from "@/components/ProductMockup";

export default function Home() {
  const [rfqNumber, setRfqNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const sampleRfqs = [
    {
      id: "KF-1042",
      partName: "Flange Mount B-40",
      client: "Apex Engineering",
      status: "Material Estimation in Progress",
      stage: "Cost Buildup",
    },
    {
      id: "KF-1088",
      partName: "Hydraulic Manifold Block",
      client: "Precision Drives Ltd",
      status: "Quote Approved - Work Order Released",
      stage: "Shop Floor Dispatch",
    },
    {
      id: "KF-1105",
      partName: "Mild Steel Enclosure Brackets",
      client: "Delta Fabricators",
      status: "Drawing Revision V2 Under Review",
      stage: "Technical Review",
    },
  ];

  const sixFeatures = [
    {
      title: "Quote-to-Order",
      description: "Convert approved technical quotes directly into active shop-floor work orders without manual data re-entry or part number discrepancies.",
      tag: "Operations",
    },
    {
      title: "Bill of Materials (BOM)",
      description: "Structure multi-level raw material grades, scrap allowances, required fasteners, and outside heat-treatment operations per part drawing.",
      tag: "Engineering",
    },
    {
      title: "Sales Pipeline",
      description: "Track industrial inquiries across drawing review, material costing, customer negotiation, and final purchase order release.",
      tag: "Sales",
    },
    {
      title: "WhatsApp",
      description: "Send automated quote summaries, drawing revision approvals, and dispatch notifications directly to client procurement teams on WhatsApp.",
      tag: "Communication",
    },
    {
      title: "Reports",
      description: "Monitor quotation win/loss rates, machine station capacity, margin floors by material type, and monthly dispatch performance.",
      tag: "Analytics",
    },
    {
      title: "Mobile App",
      description: "Enable shop-floor supervisors to scan job cards, verify drawing prints, and record machining milestones on mobile and tablet devices.",
      tag: "Shop Floor",
    },
  ];

  const industries = [
    {
      name: "Precision Metal Fabrication",
      description: "Sheet metal bending, laser cutting, and welded assembly facilities managing rapid quote revisions and thickness variances.",
      scope: "CNC press brakes, laser cutters, MIG/TIG welding",
    },
    {
      name: "Industrial Equipment & Tooling",
      description: "Jigs, fixtures, specialized automation equipment, and valve components requiring drawing revision traceability and milestone releases.",
      scope: "High-precision machining, custom assemblies",
    },
    {
      name: "Contract Component Manufacturing",
      description: "CNC turning and milling machine shops handling recurring component batches, plating subcontracting, and tight delivery schedules.",
      scope: "Multi-axis VMC, lathe turning, grinding",
    },
  ];

  const faqs = [
    {
      question: "How does KanchanFlow prevent drawing revision mismatches?",
      answer: "KanchanFlow links every quotation and work order directly to its specific drawing revision (such as Rev A or Rev B). When a customer issues a purchase order against an updated drawing, the system flags the revision difference before releasing the job card to machine stations, preventing costly machining scrap.",
    },
    {
      question: "How long does onboarding and initial setup take?",
      answer: "Most MSME machine shops and fabrication units are configured within 3 to 7 business days. Setup includes loading standard raw material price lists, defining machine hourly rates, and configuring quotation templates for your estimation team.",
    },
    {
      question: "Can machine operators update work order progress on mobile devices?",
      answer: "Yes. KanchanFlow includes a mobile-responsive interface designed for shop-floor tablets and mobile phones. Operators can inspect job cards, mark machining steps complete, and verify drawing specs directly from their work stations.",
    },
    {
      question: "Does KanchanFlow require replacing our current accounting software?",
      answer: "No. KanchanFlow focuses on the technical quoting, drawing control, and order pipeline stages where generic accounting software falls short. It generates exportable commercial quotes, delivery challans, and GST data that easily feed into standard accounting tools.",
    },
    {
      question: "Can we review a product demonstration using our actual parts drawings?",
      answer: "Yes. We offer 1-on-1 walkthrough sessions where our sales engineers walk through your actual drawing blueprints, machine rates, and quotation requirements. You can schedule a session directly on our pricing page.",
    },
  ];

  function handleSearch(event) {
    event.preventDefault();
    const query = rfqNumber.trim().toUpperCase();

    if (!query) {
      setSearchResult({
        found: false,
        message: "Please enter an RFQ or Work Order reference number.",
      });
      return;
    }

    let match = null;
    for (let index = 0; index < sampleRfqs.length; index++) {
      if (sampleRfqs[index].id === query) {
        match = sampleRfqs[index];
        break;
      }
    }

    if (match) {
      setSearchResult({
        found: true,
        data: match,
      });
    } else {
      setSearchResult({
        found: false,
        message: "No active record found for reference " + query + ". Try sample IDs: KF-1042, KF-1088, or KF-1105.",
      });
    }
  }

  function handleSelectSample(id) {
    setRfqNumber(id);
    for (let index = 0; index < sampleRfqs.length; index++) {
      if (sampleRfqs[index].id === id) {
        setSearchResult({
          found: true,
          data: sampleRfqs[index],
        });
        break;
      }
    }
  }

  function handleToggleFaq(index) {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  }

  let searchResultDisplay = null;
  if (searchResult) {
    if (searchResult.found) {
      searchResultDisplay = (
        <div className="mt-6 max-w-lg rounded border border-steel-grey p-4 bg-off-white">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between border-b border-steel-grey pb-2">
              <span className="font-mono font-bold text-graphite">{searchResult.data.id}</span>
              <span className="rounded bg-[#ECD8B1] px-2 py-0.5 text-xs font-semibold text-[#8B651B]">
                {searchResult.data.stage}
              </span>
            </div>
            <div className="text-xs text-[#555A54]">
              <strong>Customer:</strong> {searchResult.data.client}
            </div>
            <div className="text-xs text-[#555A54]">
              <strong>Part Description:</strong> {searchResult.data.partName}
            </div>
            <div className="text-xs font-medium text-graphite">
              <strong>Current Status:</strong> {searchResult.data.status}
            </div>
          </div>
        </div>
      );
    } else {
      searchResultDisplay = (
        <div className="mt-6 max-w-lg rounded border border-steel-grey p-4 bg-off-white">
          <p className="text-xs text-[#8A3B2A]">{searchResult.message}</p>
        </div>
      );
    }
  }

  return (
    <div className="w-full">
      {/* Distinctive Hero Section with Product Mockup */}
      <section className="border-b border-steel-grey bg-graphite py-12 lg:py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Headline, Value Prop & CTAs */}
            <div className="lg:col-span-5">
              <div className="inline-block rounded border border-[#3E433F] bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold mb-4">
                Manufacturing CRM & Shop-Floor Pipeline
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Manage quotations, work orders, and your sales pipeline in one place.
              </h1>

              <p className="mt-4 text-base text-steel-grey sm:text-lg leading-relaxed">
                Engineered for precision job shops, CNC units, and contract fabricators. KanchanFlow eliminates drawing revision errors, speeds up multi-tier cost estimation, and tracks orders from customer inquiry to final dispatch.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/features" variant="primary">
                  Explore features
                </Button>
                <Button href="/pricing" variant="outline-light">
                  View pricing
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-steel-grey">
                <span>✓ No complex ERP overhead</span>
                <span>✓ Drawing revision sync</span>
                <span>✓ India GST & MSME ready</span>
              </div>
            </div>

            {/* Product UI Mockup */}
            <div className="lg:col-span-7">
              <ProductMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Metrics Strip */}
      <section className="border-b border-steel-grey bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border-l-2 border-warm-gold pl-4">
              <div className="text-2xl font-bold text-graphite">&lt; 2 Hours</div>
              <div className="text-sm text-[#555A54]">Average quote estimation turnaround</div>
            </div>
            <div className="border-l-2 border-warm-gold pl-4">
              <div className="text-2xl font-bold text-graphite">100% Audit Trail</div>
              <div className="text-sm text-[#555A54]">Drawing revision & specification sync</div>
            </div>
            <div className="border-l-2 border-warm-gold pl-4">
              <div className="text-2xl font-bold text-graphite">MSME & CNC Ready</div>
              <div className="text-sm text-[#555A54]">Tailored for contract manufacturers & job shops</div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Problem and Solution Section */}
      <section className="border-b border-steel-grey bg-off-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              The Manufacturing Disconnect
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Why generic sales tools fail on the machine shop floor
            </h2>
            <p className="mt-3 text-sm text-[#555A54] sm:text-base leading-relaxed">
              Standard CRMs assume you sell static catalog products. They cannot handle CAD prints, raw material weight formulas, secondary plating subcontracts, or machine hourly spindle rates.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* The Common Problems */}
            <div className="rounded border border-[#D9DCD7] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FCE8E6] text-xs font-bold text-[#C5221F]">
                  ✕
                </span>
                <h3 className="text-lg font-bold text-graphite">Common Shop-Floor Bottlenecks</h3>
              </div>
              <ul className="space-y-4 text-sm text-[#555A54]">
                <li className="flex gap-3">
                  <span className="font-bold text-[#C5221F]">&bull;</span>
                  <div>
                    <strong className="text-graphite">Scattered Quotation Details:</strong> Part drawings, customer specs, and pricing buildups get lost across personal inboxes, WhatsApp messages, and disconnected spreadsheets.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#C5221F]">&bull;</span>
                  <div>
                    <strong className="text-graphite">Delayed Follow-ups & Lost Bids:</strong> Commercial reps wait days for technical engineers to calculate machine hours, resulting in missed customer submission deadlines.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#C5221F]">&bull;</span>
                  <div>
                    <strong className="text-graphite">Zero Order Progress Visibility:</strong> When an accepted quote becomes a job, customer service has no real-time status of station queuing or dispatch schedules.
                  </div>
                </li>
              </ul>
            </div>

            {/* The KanchanFlow Solution */}
            <div className="rounded border-2 border-warm-gold bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F4EA] text-xs font-bold text-[#137333]">
                  ✓
                </span>
                <h3 className="text-lg font-bold text-graphite">The KanchanFlow Unified Workflow</h3>
              </div>
              <ul className="space-y-4 text-sm text-[#555A54]">
                <li className="flex gap-3">
                  <span className="font-bold text-warm-gold">&bull;</span>
                  <div>
                    <strong className="text-graphite">Centralized RFQ & Revision Vault:</strong> Match incoming inquiries directly to CAD prints, revision histories, and material requirements in a single searchable repository.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-warm-gold">&bull;</span>
                  <div>
                    <strong className="text-graphite">Fast Multi-Tier Cost Buildup:</strong> Calculate raw material densities, CNC spindle hours, and outside heat-treatment fees with automated margin protections.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-warm-gold">&bull;</span>
                  <div>
                    <strong className="text-graphite">Instant Work Order Release:</strong> Convert confirmed quotes into routed job cards and track batch dispatch across the production floor in real time.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Six Feature Cards Section */}
      <section className="border-b border-steel-grey bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Core Capabilities
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Six tools engineered for manufacturing workflows
            </h2>
            <p className="mt-2 text-sm text-[#555A54]">
              Everything precision job shops and contract fabricators need from initial inquiry to final dispatch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sixFeatures.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded border border-steel-grey bg-off-white p-6 transition-colors hover:border-warm-gold"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded bg-white border border-steel-grey px-2 py-0.5 text-xs font-medium text-graphite">
                        {feature.tag}
                      </span>
                      <span className="font-mono text-xs text-[#8E948C]">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-graphite">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#555A54]">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E0E4DE] text-xs font-semibold text-graphite">
                    Available across all plans &rarr;
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button href="/features" variant="secondary">
              Review Full Feature Specifications &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Industries Section */}
      <section className="border-b border-steel-grey bg-off-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Industry Focus
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Tailored for precision contract manufacturing
            </h2>
            <p className="mt-2 text-sm text-[#555A54]">
              Illustrative sectors benefiting from structured quote-to-production tracking:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {industries.map((ind, index) => {
              return (
                <div
                  key={index}
                  className="rounded border border-steel-grey bg-white p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-warm-gold uppercase tracking-wider">
                      Sector 0{index + 1}
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-graphite">
                      {ind.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#555A54]">
                      {ind.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-steel-grey pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8E948C]">
                      Typical Machinery & Scope:
                    </span>
                    <p className="mt-1 text-xs text-graphite font-medium">
                      {ind.scope}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded border border-steel-grey bg-white p-4 text-xs text-[#71766F] text-center">
            Note: Industry classifications and workflows shown above are illustrative examples for MSME manufacturing evaluation.
          </div>
        </div>
      </section>

      {/* 4. Pricing Teaser Section */}
      <section className="border-b border-steel-grey bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded border-2 border-graphite bg-[#1F2220] p-8 text-white sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-3">
                  Predictable Deployment Plans
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Clear tiers designed for small toolrooms to multi-plant units
                </h2>
                <p className="mt-3 text-sm text-steel-grey sm:text-base leading-relaxed">
                  KanchanFlow offers flexible editions tailored to your facility size: Workshop Edition for single-site job shops, Plant Edition for expanding CNC operations, and Enterprise Operations for multi-facility contract manufacturers.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-steel-grey">
                  <span>✓ Billed monthly or annually</span>
                  <span>✓ Full drawing revision sync included</span>
                  <span>✓ No hidden per-quote fees</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Button href="/pricing" variant="primary" className="w-full text-center">
                  View Detailed Pricing & Plans
                </Button>
                <Button href="/pricing#walkthrough" variant="outline-light" className="w-full text-center">
                  Book a Product Walkthrough
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Accessible FAQ Accordion Section */}
      <section className="border-b border-steel-grey bg-off-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Got Questions?
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-[#555A54]">
              Clear, realistic answers about KanchanFlow onboarding, capabilities, and compatibility.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              let answerElement = null;
              if (isOpen) {
                answerElement = (
                  <div
                    id={"faq-answer-" + index}
                    role="region"
                    aria-labelledby={"faq-question-" + index}
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
                    id={"faq-question-" + index}
                    aria-expanded={isOpen}
                    aria-controls={"faq-answer-" + index}
                    onClick={() => handleToggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-graphite transition-colors hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 font-mono text-base font-bold text-warm-gold">
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

      {/* Live Frontend Interaction: RFQ / Work Order Checker */}
      <section id="rfq-tracker" className="border-b border-steel-grey bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Interactive Status Verification
            </div>
            <h2 className="mt-1 text-2xl font-bold text-graphite">
              Quick RFQ Reference Lookup
            </h2>
            <p className="mt-2 text-sm text-[#555A54]">
              Test the frontend lookup below using sample RFQ reference codes to verify live status retrieval.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="font-semibold text-graphite">Quick sample IDs:</span>
            <button
              type="button"
              onClick={() => handleSelectSample("KF-1042")}
              className="rounded border border-steel-grey bg-off-white px-2 py-1 font-mono text-graphite hover:border-warm-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
            >
              KF-1042
            </button>
            <button
              type="button"
              onClick={() => handleSelectSample("KF-1088")}
              className="rounded border border-steel-grey bg-off-white px-2 py-1 font-mono text-graphite hover:border-warm-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
            >
              KF-1088
            </button>
            <button
              type="button"
              onClick={() => handleSelectSample("KF-1105")}
              className="rounded border border-steel-grey bg-off-white px-2 py-1 font-mono text-graphite hover:border-warm-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
            >
              KF-1105
            </button>
          </div>

          <form onSubmit={handleSearch} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={rfqNumber}
              onChange={(event) => setRfqNumber(event.target.value)}
              placeholder="Enter RFQ ID (e.g. KF-1042)"
              className="w-full max-w-sm rounded border border-steel-grey bg-off-white px-4 py-2.5 text-sm text-dark-text focus:border-warm-gold focus:outline-none"
            />
            <Button type="submit" variant="dark">
              Check Reference
            </Button>
          </form>

          {searchResultDisplay}
        </div>
      </section>

      {/* 6. Final Call to Action Section */}
      <section className="bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-4">
            Next Step For Your Machine Shop
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl max-w-2xl mx-auto">
            Ready to streamline quotations and gain shop-floor clarity?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-steel-grey sm:text-base leading-relaxed">
            Eliminate revision confusion, calculate precise machining costs, and keep production jobs moving on schedule.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/pricing#walkthrough" variant="primary">
              Book a walkthrough
            </Button>
            <Button href="/features" variant="outline-light">
              Explore all features
            </Button>
          </div>
          <p className="mt-4 text-xs text-[#8E948C]">
            Tailored for precision fabricators, CNC machine units, and MSME contract manufacturers.
          </p>
        </div>
      </section>
    </div>
  );
}
