// Features overview page for KanchanFlow manufacturing CRM

import Button from "@/components/Button";

export const metadata = {
  title: "Features - KanchanFlow",
  description: "Explore KanchanFlow manufacturing CRM modules: RFQs, drawing revisions, cost buildups, and work orders.",
};

export default function FeaturesPage() {
  const featureList = [
    {
      title: "RFQ Intake & Drawing Revision Sync",
      tag: "Engineering",
      description: "Capture RFQs from email, WhatsApp, or customer portals with drawing attachments. Compare print revisions against purchase order specs before releasing jobs.",
      points: [
        "Drawing revision version audit trail",
        "Direct CAD/PDF blueprint attachment viewer",
        "Engineering change notification (ECN) logging",
      ],
    },
    {
      title: "Structured Cost Buildup & Quoting",
      tag: "Estimation",
      description: "Calculate accurate machining costs based on raw material density, machine hourly spindle rates, tooling wear, and outside plating/heat-treatment fees.",
      points: [
        "Raw material weight and scrap allowance calculator",
        "Configurable machine-hour rates and operator costs",
        "Subcontract process tracking with margin floors",
      ],
    },
    {
      title: "Shop-Floor Pipeline & Work Orders",
      tag: "Operations",
      description: "Convert accepted quotes directly into production work orders and routed job cards without manual re-entry errors.",
      points: [
        "Instant quote-to-work order release",
        "Station-by-station machining batch dispatch",
        "Delivery milestone and dispatch readiness monitoring",
      ],
    },
    {
      title: "MSME Tax & Regional Compliance",
      tag: "Compliance",
      description: "Built for regional manufacturing hubs with automated GST item codes, e-Invoicing readiness, and localized commercial documentation.",
      points: [
        "HSN / SAC code integration for machined goods",
        "Commercial invoice and delivery challan generation",
        "Export and domestic order classification",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="border-b border-steel-grey bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-4">
            System Capabilities
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Features designed for precision manufacturing
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-grey sm:text-lg">
            KanchanFlow replaces disconnected spreadsheets and generalist CRMs with an RFQ-to-dispatch workflow designed specifically for contract fabricators and machine shops.
          </p>
        </div>
      </section>

      {/* Feature Modules Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featureList.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="rounded border border-steel-grey bg-white p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-off-white border border-steel-grey px-2.5 py-1 text-xs font-semibold text-graphite">
                      {feature.tag}
                    </span>
                    <span className="text-xs font-mono text-[#71766F]">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-graphite">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#555A54]">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-steel-grey pt-4 text-sm text-[#40443F]">
                    {feature.points.map((point, pointIndex) => {
                      return (
                        <li key={pointIndex} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-warm-gold"></span>
                          <span>{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between rounded border border-steel-grey bg-white p-8">
            <div>
              <h3 className="text-lg font-bold text-graphite">Need a customized workflow review?</h3>
              <p className="mt-1 text-sm text-[#555A54]">
                See how KanchanFlow fits your machine shop or fabrication plant.
              </p>
            </div>
            <div className="mt-4 flex gap-3 sm:mt-0">
              <Button href="/pricing#walkthrough" variant="primary">
                Book a walkthrough
              </Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
