import { Layers } from "lucide-react";

export function Technology() {
  return (
    <div className="space-y-8">
      {/* Autopilot Setup */}
      <div className="space-y-4 p-6 rounded-2xl bg-transparent">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
          <Layers className="w-5 h-5 mr-2 text-[#9159FF]" />
          Autopilot Setup
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Tiered architecture combining infrastructure from multiple proven providers for performance, reliability, and security.
          </p>

          {/* Top Layer */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Autopilot Vault (Top Layer)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>Built and powered by IPOR Labs AG, permissionless design akin to Morpho vaults.</p>
              <p>Houses the optimization algorithm tailored for Autopilot.Finance.</p>
              <p>Continuously evaluates eligible Morpho vaults and reallocates liquidity in real time.</p>
            </div>
          </div>

          {/* Middle Layer */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Harvest Auto-Compounders (Middle Layer)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>Operated by Harvest Finance, with over 4 years of uninterrupted vault operations.</p>
              <p>Accrues lending interest, claims incentives, rewards or points programs then auto-compounds into the underlying token (e.g., USDC, WETH).</p>
            </div>
          </div>

          {/* Base Layer */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Morpho Vaults (Base Layer)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>A permissionless, non-custodial lending protocol. Primary yield source for Autopilot strategies. Instant liquidity setups only.</p>
              <p>Autopilot&apos;s liquidity can be allocated across multiple vaults or concentrated in a single vault for optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}