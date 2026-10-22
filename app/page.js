// KanchanFlow manufacturing CRM foundation homepage
"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [rfqNumber, setRfqNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);

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
      {/* Hero Section */}
      <section className="border-b border-steel-grey bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-block rounded bg-[#2D312E] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-warm-gold border border-[#3E433F] mb-4">
            Manufacturing CRM & Shop-Floor Operations
          </div>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Turn manufacturing RFQs into profitable shop-floor work orders.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-grey sm:text-lg">
            KanchanFlow connects estimation engineers, sales reps, and shop-floor supervisors. Track drawing revisions, material cost buildups, and order lifecycles in one unified industrial workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#rfq-tracker" variant="primary">
              Inspect Sample RFQ Tracker
            </Button>
            <Button href="/features" variant="outline-light">
              Review Workflow Modules
            </Button>
          </div>
        </div>
      </section>

      {/* Operational Metrics */}
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

      {/* Core Pillars */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-graphite sm:text-3xl">
              Built specifically for precision manufacturing pipelines
            </h2>
            <p className="mt-2 text-sm text-[#555A54] sm:text-base">
              Generic sales CRMs miss part drawings, machine hourly rates, and raw material fluctuations. KanchanFlow is structured around the shop-floor quoting reality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded border border-steel-grey bg-white p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-warm-gold">
                Module 01
              </div>
              <h3 className="text-lg font-semibold text-graphite">
                RFQ & Drawing Revision Control
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555A54]">
                Match customer purchase orders directly against engineer-approved drawing prints to eliminate machining scrap and costly fabrication mismatches.
              </p>
            </div>

            <div className="rounded border border-steel-grey bg-white p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-warm-gold">
                Module 02
              </div>
              <h3 className="text-lg font-semibold text-graphite">
                Cost Buildup & Quotation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555A54]">
                Break down raw material weights, machine hourly rates, outside processing costs, and margin floors before issuing commercial quotations.
              </p>
            </div>

            <div className="rounded border border-steel-grey bg-white p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-warm-gold">
                Module 03
              </div>
              <h3 className="text-lg font-semibold text-graphite">
                Work Order Conversion
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555A54]">
                Track pipeline conversion from accepted quotation to released shop-floor job card, batch schedules, and final dispatch inspection.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/features" variant="secondary">
              View Detailed Feature Breakdown &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Live Frontend Interaction: RFQ / Work Order Checker */}
      <section id="rfq-tracker" className="border-t border-steel-grey bg-white py-14">
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

      {/* Foundation Contact Callout */}
      <section id="contact" className="border-t border-steel-grey bg-off-white py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-xl font-bold text-graphite">Ready to streamline your shop-floor pipeline?</h2>
          <p className="mt-2 text-sm text-[#555A54]">
            KanchanFlow is engineered for Indian and global precision manufacturing job shops.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/pricing#walkthrough" variant="primary">
              Book a walkthrough
            </Button>
            <Button href="/pricing" variant="secondary">
              View Pricing & Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
