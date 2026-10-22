// Product UI mockup demonstrating KanchanFlow quotation and pipeline tracking

export default function ProductMockup() {
  const pipelineStages = [
    {
      name: "1. RFQ Intake",
      count: "6 Inquiries",
      value: "₹7.4L",
      highlight: false,
    },
    {
      name: "2. Cost Buildup",
      count: "4 Estimates",
      value: "₹9.2L",
      highlight: false,
    },
    {
      name: "3. Quote Dispatched",
      count: "5 Awaiting PO",
      value: "₹14.8L",
      highlight: true,
    },
    {
      name: "4. Shop Floor Release",
      count: "9 Active WOs",
      value: "₹28.5L",
      highlight: false,
    },
  ];

  const recentQuotes = [
    {
      id: "QT-2026-092",
      partName: "Spindle Adapter C-35",
      client: "Apex Engineering",
      drawingRev: "Rev C",
      amount: "₹84,000",
      status: "Approved",
    },
    {
      id: "QT-2026-095",
      partName: "Hydraulic Manifold Block",
      client: "Precision Drives",
      drawingRev: "Rev B",
      amount: "₹1,42,000",
      status: "Costing Review",
    },
    {
      id: "QT-2026-099",
      partName: "Mild Steel Enclosures",
      client: "Delta Fabricators",
      drawingRev: "Rev A",
      amount: "₹56,200",
      status: "Dispatched",
    },
  ];

  const pendingOrders = [
    {
      woNumber: "WO-8841",
      customer: "Bharat Precision",
      station: "CNC Station 02",
      batchQty: "250 pcs",
      stage: "Machining In Progress",
    },
    {
      woNumber: "WO-8844",
      customer: "Kirloskar Heavy",
      station: "4-Axis VMC Milling",
      batchQty: "120 pcs",
      stage: "Material Staged",
    },
    {
      woNumber: "WO-8849",
      customer: "Apex Automation",
      station: "Surface Grinding",
      batchQty: "400 pcs",
      stage: "QA Inspection",
    },
  ];

  function getStatusStyle(status) {
    if (status === "Approved") {
      return "bg-[#ECD8B1] text-[#7A5510] border border-[#D6A64F]";
    } else if (status === "Dispatched") {
      return "bg-[#E2EDE2] text-[#255225] border border-[#B1CEB1]";
    }
    return "bg-[#EAEAEA] text-[#444] border border-[#CCC]";
  }

  function getStageStyle(stage) {
    if (stage === "QA Inspection") {
      return "text-warm-gold font-semibold";
    } else if (stage === "Machining In Progress") {
      return "text-white font-medium";
    }
    return "text-steel-grey";
  }

  return (
    <div className="w-full rounded border border-steel-grey bg-[#1B1E1C] text-white shadow-sm overflow-hidden">
      {/* Console Top Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#2F3430] bg-[#141615] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-warm-gold"></span>
          <span className="font-mono font-semibold tracking-wider text-steel-grey uppercase">
            KanchanFlow Console
          </span>
          <span className="hidden sm:inline text-[#666B64]">|</span>
          <span className="hidden sm:inline text-[#8E948C]">Shop-Floor Pipeline & RFQ View</span>
        </div>
        <div className="text-[11px] text-[#8E948C] font-mono">
          Sample Plant Data
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Pipeline Strip */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-warm-gold">
              Active Sales & Estimation Pipeline
            </span>
            <span className="text-[11px] text-steel-grey">Total Value: ₹59.9L</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {pipelineStages.map((stage, index) => {
              let stageClasses = "rounded border border-[#2E332F] bg-[#222623] p-2.5 text-left";
              if (stage.highlight) {
                stageClasses = "rounded border border-warm-gold/60 bg-[#292D2A] p-2.5 text-left";
              }

              return (
                <div key={index} className={stageClasses}>
                  <div className="text-[11px] font-medium text-steel-grey truncate">
                    {stage.name}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {stage.value}
                  </div>
                  <div className="text-[10px] text-warm-gold">
                    {stage.count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two-Column Mockup Data Display */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Active Quotations */}
          <div className="rounded border border-[#2E332F] bg-[#171918] p-3">
            <div className="flex items-center justify-between border-b border-[#2E332F] pb-2 mb-2">
              <span className="text-xs font-semibold text-white">
                Live Quotations & Cost Buildup
              </span>
              <span className="text-[10px] text-warm-gold font-mono">3 Active</span>
            </div>

            <div className="space-y-2">
              {recentQuotes.map((quote, index) => {
                const badgeClasses = getStatusStyle(quote.status);

                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between rounded bg-[#202421] p-2 text-xs border border-[#2B302C] gap-1.5"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-steel-grey">{quote.id}</span>
                        <span className="rounded bg-[#2E332F] px-1 text-[10px] text-warm-gold">
                          {quote.drawingRev}
                        </span>
                      </div>
                      <div className="text-white font-medium truncate max-w-[180px] sm:max-w-[200px]">
                        {quote.partName}
                      </div>
                      <div className="text-[10px] text-[#8E948C]">
                        {quote.client}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-[#2E332F] pt-1 sm:pt-0">
                      <span className="font-mono font-semibold text-white">
                        {quote.amount}
                      </span>
                      <span className={"mt-0.5 rounded px-1.5 py-0.5 text-[9px] font-semibold " + badgeClasses}>
                        {quote.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pending Work Orders & Stations */}
          <div className="rounded border border-[#2E332F] bg-[#171918] p-3">
            <div className="flex items-center justify-between border-b border-[#2E332F] pb-2 mb-2">
              <span className="text-xs font-semibold text-white">
                Work Orders & Machine Queue
              </span>
              <span className="text-[10px] text-warm-gold font-mono">Shop Floor</span>
            </div>

            <div className="space-y-2">
              {pendingOrders.map((order, index) => {
                const stageStyle = getStageStyle(order.stage);

                return (
                  <div
                    key={index}
                    className="rounded bg-[#202421] p-2 text-xs border border-[#2B302C]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-warm-gold">{order.woNumber}</span>
                      <span className="text-[10px] text-steel-grey font-mono">{order.batchQty}</span>
                    </div>
                    <div className="text-white font-medium mt-0.5">
                      {order.customer}
                    </div>
                    <div className="flex items-center justify-between text-[11px] mt-1 pt-1 border-t border-[#2B302C]">
                      <span className="text-[#8E948C]">{order.station}</span>
                      <span className={"text-[10px] " + stageStyle}>{order.stage}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Summary Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-[#2F3430] pt-2 text-[11px] text-steel-grey gap-2">
          <div className="flex items-center gap-3">
            <span>
              Pending Dispatches: <strong className="text-white">4 Orders</strong>
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">
              Drawing Audit: <strong className="text-warm-gold">100% Synced</strong>
            </span>
          </div>
          <div className="font-mono text-warm-gold">
            Average Estimation Speed: 1.8 hrs
          </div>
        </div>
      </div>
    </div>
  );
}
