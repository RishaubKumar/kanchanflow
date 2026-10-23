// Features page for KanchanFlow: detailed alternating sections and capability comparison
"use client";

import { useState } from "react";
import Button from "@/components/Button";

const features = [
  {
    id: "quotation-management",
    tag: "Quotation Management",
    heading: "Capture, revise and convert quotations without spreadsheet chaos",
    body: "Manufacturing quotations involve drawing revisions, raw material grades, machine hours and outside subcontract operations. KanchanFlow keeps every version of a quote connected to its specific drawing revision so your estimation team always works from the latest approved spec.",
    points: [
      "Drawing revision audit trail (Rev A, Rev B, Rev C) linked per RFQ",
      "PDF blueprint viewer attached to each quotation record",
      "One-click conversion from approved quote to active work order",
      "Commercial quote output with customer GST codes and line-item pricing",
    ],
    mockup: "quotation",
  },
  {
    id: "bill-of-materials",
    tag: "Bill of Materials",
    heading: "Structure multi-level BOMs for complex machined assemblies",
    body: "Job shops rarely produce simple single-part components. KanchanFlow lets estimators build multi-level BOMs with raw material grades, density-based weight calculations, scrap allowances, heat-treatment operations and plating subcontracts grouped per part drawing.",
    points: [
      "Raw material weight formula using density and dimensional inputs",
      "Scrap and nesting allowance fields per material grade",
      "Subcontract operation rows with supplier and lead-time tracking",
      "Automatic cost rollup from child operations to final quote line",
    ],
    mockup: "bom",
  },
  {
    id: "work-order-handoff",
    tag: "Work Order & Job Card Handoff",
    heading: "Release accepted quotes to the shop floor without re-entry errors",
    body: "The handoff from sales to production is where data loss causes scrap and delays. When a purchase order arrives, KanchanFlow automatically generates routed job cards for each machine station, referencing the locked drawing revision and confirmed BOM quantities.",
    points: [
      "Locked drawing revision and BOM quantities on every job card",
      "Station-by-station routing: turning, milling, grinding, inspection",
      "Operator progress updates via mobile tablet interface",
      "Dispatch milestone tracking from first operation to delivery",
    ],
    mockup: "workorder",
  },
  {
    id: "sales-pipeline",
    tag: "Sales Pipeline",
    heading: "Track industrial inquiries from first contact to purchase order",
    body: "An industrial sales cycle is not a simple funnel. Customers issue drawing clarifications, request re-quotation, delay purchase orders and escalate urgency without notice. KanchanFlow's pipeline stages reflect the actual manufacturing sales process.",
    points: [
      "Pipeline stages: RFQ Received, Drawing Review, Cost Buildup, Quote Sent, PO Released",
      "Follow-up reminder scheduling per open quotation",
      "Customer negotiation notes linked to drawing revision history",
      "Win/loss reason capture per enquiry for team review",
    ],
    mockup: "pipeline",
  },
  {
    id: "whatsapp-communication",
    tag: "WhatsApp Communication",
    heading: "Send quote summaries and order updates where customers already are",
    body: "Procurement contacts at manufacturing plants check WhatsApp throughout the day. KanchanFlow lets your sales engineers send structured quote summaries, drawing revision approval requests and dispatch notifications as formatted WhatsApp messages without switching to a separate messaging tool.",
    points: [
      "Formatted quote summary messages with part number and pricing",
      "Drawing revision approval request with version reference",
      "Work order dispatch notification with expected delivery date",
      "Reply tracking linked to the relevant quotation record",
    ],
    mockup: "whatsapp",
  },
  {
    id: "reports",
    tag: "Reports & Analytics",
    heading: "Monitor quotation performance, margins and production throughput",
    body: "Without structured data, machine shop owners rely on gut feel to assess quotation strategy and capacity utilisation. KanchanFlow generates reports on win/loss rates by material type, machine station loading, margin performance by customer segment and monthly dispatch volumes.",
    points: [
      "Quotation win rate by material category and customer type",
      "Machine station utilisation and pending job queue analysis",
      "Margin floor performance and below-threshold alerts",
      "Monthly dispatch volume and on-time delivery summary",
    ],
    mockup: "reports",
  },
];

function QuotationMockup() {
  return (
    <div className="rounded border border-steel-grey bg-white overflow-hidden text-xs">
      <div className="bg-graphite px-4 py-2 flex items-center justify-between">
        <span className="text-white font-semibold text-xs">RFQ Register</span>
        <span className="text-[#8E948C] text-xs">3 active enquiries</span>
      </div>
      <div className="divide-y divide-steel-grey">
        {[
          { id: "KF-1042", part: "Flange Mount B-40", rev: "Rev B", status: "Cost Buildup", statusColor: "bg-[#ECD8B1] text-[#8B651B]" },
          { id: "KF-1088", part: "Hydraulic Manifold", rev: "Rev A", status: "Quote Sent", statusColor: "bg-[#D6EAD9] text-[#2D6B33]" },
          { id: "KF-1105", part: "Enclosure Brackets", rev: "Rev C", status: "PO Released", statusColor: "bg-[#D3E8F5] text-[#1A5C8A]" },
        ].map((row) => (
          <div key={row.id} className="px-4 py-3 flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="font-mono font-bold text-graphite">{row.id}</div>
              <div className="text-[#555A54] truncate">{row.part}</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="rounded border border-steel-grey px-1.5 py-0.5 text-[10px] text-[#555A54]">{row.rev}</span>
              <span className={"rounded px-2 py-0.5 text-[10px] font-semibold " + row.statusColor}>{row.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BOMMockup() {
  return (
    <div className="rounded border border-steel-grey bg-white overflow-hidden text-xs">
      <div className="bg-graphite px-4 py-2">
        <span className="text-white font-semibold text-xs">BOM: Flange Mount B-40 (Rev B)</span>
      </div>
      <div className="divide-y divide-steel-grey">
        {[
          { level: "L1", item: "Mild Steel Round Bar IS-2062", qty: "4.2 kg", cost: "₹3,780" },
          { level: "L2", item: "Scrap allowance (12%)", qty: "0.5 kg", cost: "₹450" },
          { level: "L2", item: "CNC Turning — 2.5 hrs", qty: "2.5 hr", cost: "₹1,875" },
          { level: "L2", item: "External Zinc Plating", qty: "Sub-contract", cost: "₹620" },
        ].map((row, i) => (
          <div key={i} className="px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="font-mono text-[10px] text-[#8E948C] w-5 flex-shrink-0">{row.level}</span>
              <span className="text-[#40443F] truncate">{row.item}</span>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className="text-[#71766F]">{row.qty}</span>
              <span className="font-mono font-semibold text-graphite w-16 text-right">{row.cost}</span>
            </div>
          </div>
        ))}
        <div className="px-4 py-2.5 flex items-center justify-between bg-off-white">
          <span className="font-bold text-graphite">Total Material Cost</span>
          <span className="font-mono font-bold text-warm-gold">₹6,725</span>
        </div>
      </div>
    </div>
  );
}

function WorkOrderMockup() {
  return (
    <div className="rounded border border-steel-grey bg-white overflow-hidden text-xs">
      <div className="bg-graphite px-4 py-2 flex items-center justify-between">
        <span className="text-white font-semibold text-xs">Job Card: WO-0382</span>
        <span className="rounded bg-[#D6EAD9] px-2 py-0.5 text-[10px] font-semibold text-[#2D6B33]">Active</span>
      </div>
      <div className="px-4 py-3 border-b border-steel-grey space-y-1">
        <div className="flex justify-between"><span className="text-[#71766F]">Part</span><span className="font-medium text-graphite">Flange Mount B-40</span></div>
        <div className="flex justify-between"><span className="text-[#71766F]">Drawing Rev</span><span className="font-mono font-bold text-warm-gold">Rev B — Locked</span></div>
        <div className="flex justify-between"><span className="text-[#71766F]">Qty</span><span className="text-graphite">25 pieces</span></div>
      </div>
      <div className="divide-y divide-steel-grey">
        {[
          { station: "CNC Turning", status: "Complete", color: "text-[#2D6B33]" },
          { station: "VMC Milling", status: "In Progress", color: "text-warm-gold" },
          { station: "Zinc Plating", status: "Pending", color: "text-[#71766F]" },
          { station: "Final Inspection", status: "Pending", color: "text-[#71766F]" },
        ].map((row, i) => (
          <div key={i} className="px-4 py-2 flex items-center justify-between">
            <span className="text-[#40443F]">{row.station}</span>
            <span className={"font-semibold " + row.color}>{row.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineMockup() {
  const stages = [
    { name: "RFQ Received", count: 8, active: false },
    { name: "Cost Buildup", count: 5, active: false },
    { name: "Quote Sent", count: 3, active: true },
    { name: "PO Released", count: 2, active: false },
  ];
  return (
    <div className="rounded border border-steel-grey bg-white overflow-hidden text-xs">
      <div className="bg-graphite px-4 py-2">
        <span className="text-white font-semibold text-xs">Sales Pipeline — October</span>
      </div>
      <div className="p-4 grid grid-cols-4 gap-2">
        {stages.map((stage) => {
          let colClass = "rounded border border-steel-grey p-3 text-center space-y-2";
          if (stage.active) {
            colClass = "rounded border-2 border-warm-gold p-3 text-center space-y-2 bg-[#FFFDF7]";
          }
          return (
            <div key={stage.name} className={colClass}>
              <div className="text-[10px] font-semibold text-[#555A54] leading-tight">{stage.name}</div>
              <div className="text-2xl font-bold text-graphite">{stage.count}</div>
              <div className="text-[10px] text-[#8E948C]">enquiries</div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-steel-grey px-4 py-2 flex items-center justify-between">
        <span className="text-[#555A54]">Total open value</span>
        <span className="font-mono font-bold text-graphite">₹18,40,000</span>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="rounded border border-steel-grey bg-white overflow-hidden text-xs">
      <div className="bg-graphite px-4 py-2">
        <span className="text-white font-semibold text-xs">WhatsApp Message Preview</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="rounded bg-[#DCF8C6] p-3 max-w-xs ml-auto space-y-1">
          <div className="font-semibold text-[#1A5C1A] text-[10px]">KanchanFlow — Quote Notification</div>
          <div className="text-[#40443F] leading-relaxed">
            Dear Apex Engineering,<br />
            Your quotation <span className="font-mono font-bold">KF-1042</span> for Flange Mount B-40 (Rev B) is ready.<br />
            Total: <span className="font-bold">₹22,500</span> for 25 pcs.<br />
            Valid until: 30 Nov 2025.
          </div>
          <div className="text-[10px] text-[#71766F] text-right">11:32 AM ✓✓</div>
        </div>
        <div className="rounded bg-[#F0F0F0] p-3 max-w-xs space-y-1">
          <div className="font-semibold text-graphite text-[10px]">Apex Engineering Procurement</div>
          <div className="text-[#40443F]">Approved. Please proceed with Rev B drawing. PO follows by EOD.</div>
          <div className="text-[10px] text-[#71766F]">11:45 AM</div>
        </div>
      </div>
    </div>
  );
}

function ReportsMockup() {
  const months = ["Aug", "Sep", "Oct"];
  const values = [62, 71, 58];
  const maxVal = 100;
  return (
    <div className="rounded border border-steel-grey bg-white overflow-hidden text-xs">
      <div className="bg-graphite px-4 py-2">
        <span className="text-white font-semibold text-xs">Quotation Win Rate — Q3</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-end gap-4 h-24">
          {months.map((month, i) => (
            <div key={month} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] font-semibold text-graphite">{values[i]}%</span>
              <div
                className="w-full bg-warm-gold rounded-t"
                style={{ height: ((values[i] / maxVal) * 80) + "px" }}
              />
              <span className="text-[10px] text-[#71766F]">{month}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-steel-grey pt-3 space-y-2">
          {[
            { label: "Quotes sent this month", value: "24" },
            { label: "Orders won", value: "14" },
            { label: "Below margin floor", value: "2 — flagged" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-[#555A54]">{row.label}</span>
              <span className="font-semibold text-graphite">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureMockup({ type }) {
  if (type === "quotation") return <QuotationMockup />;
  if (type === "bom") return <BOMMockup />;
  if (type === "workorder") return <WorkOrderMockup />;
  if (type === "pipeline") return <PipelineMockup />;
  if (type === "whatsapp") return <WhatsAppMockup />;
  if (type === "reports") return <ReportsMockup />;
  return null;
}

const comparisonRows = [
  {
    capability: "Quotation creation",
    manual: "Spreadsheet-based, version conflicts common",
    kanchan: "Structured RFQ record with drawing revision lock",
  },
  {
    capability: "Drawing revision tracking",
    manual: "Email threads and file folder naming conventions",
    kanchan: "Per-quotation revision audit trail with ECN log",
  },
  {
    capability: "BOM and cost buildup",
    manual: "Separate calculator workbooks per estimator",
    kanchan: "Centralised BOM with density and scrap formulas",
  },
  {
    capability: "Quote to work order",
    manual: "Manual re-entry into production register or ERP",
    kanchan: "One-click handoff with locked BOM and drawing ref",
  },
  {
    capability: "Pipeline visibility",
    manual: "Weekly status meeting, no real-time view",
    kanchan: "Live pipeline board with stage-by-stage tracking",
  },
  {
    capability: "Customer communication",
    manual: "Ad-hoc email and personal WhatsApp messages",
    kanchan: "Structured WhatsApp notifications from the system",
  },
  {
    capability: "Reporting",
    manual: "Manual monthly Excel summaries",
    kanchan: "Automated win rate, margin and throughput reports",
  },
];

export default function FeaturesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "How does the drawing revision lock prevent machining scrap?",
      answer:
        "When a purchase order is received, KanchanFlow locks the drawing revision that was quoted against. If a customer later submits a revised drawing without a new quotation, the system flags the mismatch before releasing the job card to machine stations. This prevents operators from machining parts to a superseded specification.",
    },
    {
      question: "Can I import our existing customer and part records?",
      answer:
        "Yes. KanchanFlow supports bulk CSV import for customer master records, standard part numbering, and historical price lists. Your implementation specialist will assist with the initial data migration during onboarding.",
    },
    {
      question: "Does the WhatsApp feature require our own business account?",
      answer:
        "The WhatsApp communication module works alongside a registered WhatsApp Business account associated with your organisation's phone number. KanchanFlow formats and queues messages; the actual delivery uses your existing WhatsApp Business credentials.",
    },
    {
      question: "How does the mobile interface work for shop-floor operators?",
      answer:
        "Shop-floor supervisors and machine operators access KanchanFlow through a mobile-responsive browser interface on any smartphone or tablet. They can view their assigned job cards, mark machining steps complete, and verify drawing specifications without requiring a desktop computer at each station.",
    },
  ];

  function handleToggleFaq(index) {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  }

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="border-b border-steel-grey bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-4">
            System Capabilities
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl max-w-3xl">
            Features designed for everyday manufacturing workflows
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-grey sm:text-lg leading-relaxed">
            KanchanFlow replaces disconnected spreadsheets and generalist CRMs with an RFQ-to-dispatch workflow built specifically for contract fabricators and precision machine shops.
          </p>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        let sectionBg = "bg-white";
        if (!isEven) {
          sectionBg = "bg-off-white";
        }

        return (
          <section
            key={feature.id}
            id={feature.id}
            className={"border-b border-steel-grey py-16 " + sectionBg}
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                {/* Text side */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
                    {feature.tag}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-graphite sm:text-3xl leading-tight">
                    {feature.heading}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#555A54] sm:text-base">
                    {feature.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3 text-sm text-[#40443F]">
                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-warm-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup side */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <FeatureMockup type={feature.mockup} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Comparison Table Section */}
      <section className="border-b border-steel-grey bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Capability Comparison
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Manual processes vs. KanchanFlow
            </h2>
            <p className="mt-3 text-sm text-steel-grey leading-relaxed">
              This comparison illustrates the workflow differences between a typical unstructured manufacturing operation and one using KanchanFlow. It is illustrative and does not represent measured performance guarantees.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded border border-[#3E433F]">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-[#3E433F] bg-[#2D312E]">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-steel-grey w-1/3">
                    Capability
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-steel-grey w-1/3">
                    Typical Manual Process
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-warm-gold w-1/3">
                    With KanchanFlow
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => {
                  let rowClass = "border-b border-[#3E433F]";
                  if (index % 2 === 1) {
                    rowClass = "border-b border-[#3E433F] bg-[#252928]";
                  }
                  return (
                    <tr key={index} className={rowClass}>
                      <td className="px-6 py-4 font-semibold text-white align-top">
                        {row.capability}
                      </td>
                      <td className="px-6 py-4 text-[#9DA59B] align-top">
                        {row.manual}
                      </td>
                      <td className="px-6 py-4 text-steel-grey align-top">
                        {row.kanchan}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features FAQ Section */}
      <section className="border-b border-steel-grey bg-off-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-warm-gold">
              Feature Questions
            </div>
            <h2 className="mt-2 text-2xl font-bold text-graphite sm:text-3xl">
              Common questions about how features work
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              let answerElement = null;
              if (isOpen) {
                answerElement = (
                  <div
                    id={"features-faq-answer-" + index}
                    role="region"
                    aria-labelledby={"features-faq-question-" + index}
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
                    id={"features-faq-question-" + index}
                    aria-expanded={isOpen}
                    aria-controls={"features-faq-answer-" + index}
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

      {/* Final CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded border-2 border-graphite bg-graphite p-8 text-white sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to see these features in your manufacturing context?
                </h2>
                <p className="mt-3 text-sm text-steel-grey sm:text-base leading-relaxed">
                  Book a 1-on-1 walkthrough with our engineering team using your actual part drawings, machine rates and customer requirements.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Button href="/pricing#walkthrough" variant="primary" className="w-full text-center">
                  Book a walkthrough
                </Button>
                <Button href="/pricing" variant="outline-light" className="w-full text-center">
                  View pricing plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
