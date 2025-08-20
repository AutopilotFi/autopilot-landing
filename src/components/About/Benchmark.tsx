import { Crown, Trophy } from "lucide-react";

interface VaultData {
  name: string;
  apy: number;
  isAutopilot?: boolean;
  isAutopilotNet?: boolean;
  rank: number;
}

export function Benchmark() {
  // Vault performance data sorted by APY (highest first) - ALL ENTRIES IN ONE TABLE
  const allVaultData: VaultData[] = [
    { name: "Autopilot", apy: 12.91, isAutopilot: true, rank: 1 },
    { name: "Autopilot NET", apy: 10.37, isAutopilotNet: true, rank: 2 },
    { name: "MEV Capital", apy: 9.93, rank: 3 },
    { name: "Relend", apy: 9.19, rank: 4 },
    { name: "Smokehouse", apy: 8.77, rank: 5 },
    { name: "Resolv", apy: 8.36, rank: 6 },
    { name: "Apostro Resolv", apy: 8.29, rank: 7 },
    { name: "Gauntlet Core", apy: 7.84, rank: 8 },
    { name: "Hakutora", apy: 7.78, rank: 9 },
    { name: "Steakhouse", apy: 6.18, rank: 10 },
    { name: "Gauntlet Prime", apy: 6.13, rank: 11 },
    { name: "SwissBorg", apy: 5.53, rank: 12 },
    { name: "Hyperithm", apy: 5.31, rank: 13 },
    { name: "Gauntlet Frontier", apy: 5.04, rank: 14 },
    { name: "Coinshift", apy: 4.78, rank: 15 },
    { name: "Alpha Core", apy: 4.42, rank: 16 },
    { name: "TAC", apy: 2.58, rank: 17 },
    { name: "f(x) Protocol", apy: 2.43, rank: 18 },
    { name: "OEV-boosted", apy: 1.63, rank: 19 },
    { name: "Vault Bridge", apy: 1.49, rank: 20 },
    { name: "Avantgarde Core", apy: 1.36, rank: 21 },
    { name: "OpenEden", apy: 0.97, rank: 22 },
    { name: "Midas", apy: 0.75, rank: 23 }
  ];

  return (
    <div className="space-y-8">
      {/* Content */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Autopilot vs. Standalone Morpho Vaults Benchmark</h2>
          
          {/* Performance Chart */}
          <div className="mb-6 flex justify-center">
            <img 
              src={"/performanceChart.png"} 
              alt="Autopilot vs Morpho Vaults Performance Chart" 
              className="w-full max-w-4xl h-auto rounded-xl border border-gray-200 shadow-lg"
            />
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Backtesting performance data comparing Autopilot&apos;s automated rebalancing strategy 
            against individual Morpho USDC vaults on Mainnet over 6 months (1 Jan – 29 June 2025).
          </p>
        </div>

        {/* Mobile scroll hint */}
        <div className="md:hidden mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-800 text-center">
            ← Swipe table horizontally to view comparison data →
          </p>
        </div>
        
        <div className="w-full overflow-hidden rounded-xl border border-gray-200">
          {/* Mobile Optimized Table with Horizontal Scroll */}
          <div className="overflow-x-auto scrollbar-hide w-full">
            <table className="w-full min-w-[520px]">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="sticky left-0 bg-gray-50 px-2 md:px-4 py-4 text-left text-sm font-semibold text-gray-900 border-r border-gray-300 min-w-[50px] md:min-w-[70px]">
                    Rank
                  </th>
                  <th className="sticky left-[50px] md:left-[70px] bg-gray-50 px-2 md:px-4 py-4 text-left text-sm font-semibold text-gray-900 border-r-2 border-gray-400 min-w-[120px] md:min-w-[150px]">
                    Vault
                  </th>
                  <th className="px-3 md:px-6 py-4 text-right text-sm font-semibold text-gray-900 min-w-[110px]">
                    6mo avg. APY
                  </th>
                  <th className="px-3 md:px-6 py-4 text-right text-sm font-semibold text-gray-900 min-w-[130px]">
                    vs Autopilot Net
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allVaultData.map((vault, index) => {
                  const difference = vault.apy - 10.37; // Compare to Autopilot net
                  const isAutopilotEntry = vault.isAutopilot || vault.isAutopilotNet;
                  
                  return (
                    <tr 
                      key={vault.name} 
                      className={`transition-colors ${
                        vault.isAutopilot 
                          ? 'bg-gradient-to-r from-[#9159FF] to-[#7c3aed] text-white'
                          : vault.isAutopilotNet 
                            ? 'bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] text-white'
                            : 'hover:bg-gray-50'
                      }`}
                    >
                      <td className={`sticky left-0 px-2 md:px-4 py-4 border-r border-gray-300 ${
                        vault.isAutopilot 
                          ? 'bg-gradient-to-r from-[#9159FF] to-[#7c3aed]'
                          : vault.isAutopilotNet 
                            ? 'bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6]'
                            : 'bg-white'
                      }`}>
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <span className={`text-sm font-bold ${
                            isAutopilotEntry ? 'text-white' : 'text-gray-900'
                          }`}>
                            #{vault.rank}
                          </span>
                          {/* Hide icons on mobile to save space */}
                          {vault.rank === 1 && (
                            <Crown className="hidden md:block w-4 h-4 text-yellow-300" />
                          )}
                          {vault.rank === 2 && (
                            <Trophy className="hidden md:block w-4 h-4 text-yellow-300" />
                          )}
                        </div>
                      </td>
                      <td className={`sticky left-[50px] md:left-[70px] px-2 md:px-4 py-4 border-r-2 border-gray-400 ${
                        vault.isAutopilot 
                          ? 'bg-gradient-to-r from-[#9159FF] to-[#7c3aed]'
                          : vault.isAutopilotNet 
                            ? 'bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6]'
                            : 'bg-white'
                      }`}>
                        <div>
                          <div className={`text-sm font-semibold leading-tight ${
                            isAutopilotEntry ? 'text-white' : 'text-gray-900'
                          }`}>
                            {vault.name}
                          </div>
                          <div className={`text-xs ${
                            isAutopilotEntry 
                              ? 'text-white/80' 
                              : 'text-gray-500'
                          }`}>
                            {isAutopilotEntry 
                              ? vault.isAutopilotNet 
                                ? 'After fees'
                                : 'Before fees'
                              : 'Morpho Vault'
                            }
                          </div>
                        </div>
                      </td>
                      <td className="px-2 md:px-6 py-4 text-right">
                        <div className={`text-base md:text-lg font-bold ${
                          isAutopilotEntry ? 'text-white' : 'text-gray-900'
                        }`}>
                          {vault.apy.toFixed(2)}%
                        </div>
                      </td>
                      <td className="px-2 md:px-6 py-4 text-right">
                        <div className={`text-sm font-medium ${
                          isAutopilotEntry 
                            ? 'text-white'
                            : difference >= 0 
                              ? 'text-green-600' 
                              : 'text-red-600'
                        }`}>
                          {isAutopilotEntry 
                            ? '—'
                            : `${difference >= 0 ? '+' : ''}${difference.toFixed(2)}%`
                          }
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* A Word on Performance and Mechanics */}
        <div className="pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">A Word on Performance and Mechanics</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-[#9159FF] rounded-full mt-3"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The longer Autopilot runs, the more visible and significant its outperformance becomes compared to the best standalone Morpho vaults.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-[#9159FF] rounded-full mt-3"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Both raw and net Autopilot performance are shown in the benchmark. Net results account for setup and management fees, which are negotiable with the IPOR DAO (the rebalancing infrastructure provider) and can be reduced through IPOR token holdings. Fee adjustments can be explored in the future to further improve net performance.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-[#9159FF] rounded-full mt-3"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond delivering competitive rates, Autopilot functions like a yield &quot;genie,&quot; always aware of the top-performing source at any moment. In its early months, outperformance is still crystallizing, but it remains positioned in the most favorable opportunities at all times.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Performance Disclaimer</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Past performance is not indicative of future results. APY data represents historical 6-month averages 
            (1 Jan – 29 June 2025) and actual returns may vary. Autopilot performance includes the impact of 
            rebalancing costs and management fees where applicable. Individual vault performance may be affected by 
            market conditions, liquidity constraints, and protocol-specific factors.
          </p>
        </div>
      </div>
    </div>
  );
}