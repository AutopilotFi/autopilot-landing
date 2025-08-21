import { Shield, Lock, Zap, CheckCircle } from "lucide-react";

export function SecurityRiskManagement() {
  return (
    <div className="space-y-8">
      {/* Custody Model */}
      <div className="space-y-4 p-6 rounded-2xl bg-transparent">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
          <Lock className="w-5 h-5 mr-2 text-[#9159FF]" />
          Custody Model
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>Autopilot is non-custodial — liquidity remains in user&aspo;s control inside audited smart contracts</span>
          </div>


          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>Withdrawals from the Autopilot vault itself can only be initiated by the vault&aspo;s users</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>Neither the Autopilot team nor any infrastructure provider has the ability to move liquidity out of these vaults</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>In case of emergency, the team can trigger withdrawals only from the underlying vaults to safeguard funds</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>Autopilot vaults are launched via IPOR technologies, while remaining permissionless building blocks in line with Morpho&aspo;s principles. Even if IPOR were no longer active, the Autopilot vaults would remain fully accessible and operational</span>
          </div>
        </div>
      </div>

      {/* Allocation & Execution */}
      <div className="space-y-4 p-6 rounded-2xl bg-transparent">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-[#9159FF]" />
          Allocation & Execution
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>Reallocation decisions are made solely by the algorithm, with no manual or multi-sig interference</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>Allocation routing and auto-compounding events are handled by audited and transparent smart contracts</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>High-frequency allocation is performed only within the same chain to eliminate bridge latency and exploit risks</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
            <span>The initial Autopilot product line is performance-optimized, meaning liquidity can be routed entirely into a single Morpho vault if that is the most favorable option</span>
          </div>
        </div>
      </div>

      {/* Vault Eligibility */}
      <div className="space-y-4 p-6 rounded-2xl bg-transparent">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-[#9159FF]" />
          Vault Eligibility
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
            Built on Morpho&aspo;s Own Approved Vaults
          </h3>

          <div className="ml-8 space-y-4 leading-relaxed">
            <p>
              Autopilot connects to Morpho vaults that have been approved and listed on Morpho&aspo;s flagship app.
            </p>
            <p>
              These vaults have already passed Morpho&aspo;s own due-diligence process before being made available to users.
            </p>
            <p>
              From this pre-vetted selection, Autopilot adds an additional layer of review for yield potential, liquidity depth, and risk profile before integrating them into its strategies.
            </p>
            <p>
              By building on Morpho&aspo;s own approved vaults and applying its own checks, Autopilot offers users a higher degree of confidence that allocations are made into strategies meeting strong security and eligibility standards.
            </p>
          </div>


        </div>
      </div>


    </div>
  );
}