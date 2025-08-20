import { Cpu, ExternalLink } from "lucide-react";

export function Audits() {
  return (
    <div className="space-y-8">
      {/* Technology & Audits */}
      <div className="space-y-4 p-6 rounded-2xl bg-transparent">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
          <Cpu className="w-5 h-5 mr-2 text-[#9159FF]" />
          Technology & Audits
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Autopilot leverages high-frequency allocation technology developed by IPOR Labs AG, which has undergone two{' '}
            <a
              href="https://docs.ipor.io/audits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9159FF] hover:text-[#7c3aed] transition-colors underline"
            >
              independent security audits
            </a>
            . This technology is currently regarded as one of the most advanced solutions for optimised asset allocation in DeFi.
          </p>
          <p>
            [Harvest Foundation] integrates IPOR&apos;s rebalancing technology in parallel with its own auto-compounding vault infrastructure to create Autopilot&apos;s allocation setups.
          </p>
          <p>
            Harvest&apos;s core vault infrastructure underwent a comprehensive audit by Halborn in January 2025. The audit report is available{' '}
            <a
              href="https://www.halborn.com/audits/harvest-finance/harvest-strategy-base"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9159FF] hover:text-[#7c3aed] transition-colors underline"
            >
              here
            </a>
            .
          </p>

          {/* Audit Table */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Security Audits</h3>

            {/* Mobile scroll hint */}
            <div className="md:hidden mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800 text-center">
                ← Swipe table to view all columns →
              </p>
            </div>

            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto scrollbar-hide w-full">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="sticky left-0 bg-gray-50 px-3 md:px-4 py-3 text-left text-sm font-medium text-gray-900 border-r border-gray-200 min-w-[160px]">
                        Protocol
                      </th>
                      <th className="px-3 md:px-4 py-3 text-left text-sm font-medium text-gray-900 min-w-[180px]">
                        Auditor
                      </th>
                      <th className="px-3 md:px-4 py-3 text-left text-sm font-medium text-gray-900 min-w-[100px]">
                        Date
                      </th>
                      <th className="px-3 md:px-4 py-3 text-left text-sm font-medium text-gray-900 min-w-[120px]">
                        Report
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="sticky left-0 bg-white px-3 md:px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                        IPOR Labs Technology
                      </td>
                      <td className="px-3 md:px-4 py-3 text-sm text-gray-700">Multiple Independent Auditors</td>
                      <td className="px-3 md:px-4 py-3 text-sm text-gray-700">Various Dates</td>
                      <td className="px-3 md:px-4 py-3 text-sm">
                      <a
                        href="https://docs.ipor.io/audits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9159FF] hover:text-[#7c3aed] transition-colors font-medium inline-flex items-center"
                      >
                        View Reports
                        <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="sticky left-0 bg-white px-3 md:px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                        Harvest Finance Core Infrastructure
                      </td>
                      <td className="px-3 md:px-4 py-3 text-sm text-gray-700">Halborn</td>
                      <td className="px-3 md:px-4 py-3 text-sm text-gray-700">January 2025</td>
                      <td className="px-3 md:px-4 py-3 text-sm">
                      <a
                        href="https://www.halborn.com/audits/harvest-finance/harvest-strategy-base"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9159FF] hover:text-[#7c3aed] transition-colors font-medium inline-flex items-center"
                      >
                        View Report
                        <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="sticky left-0 bg-white px-3 md:px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                        Morpho Protocol
                      </td>
                      <td className="px-3 md:px-4 py-3 text-sm text-gray-700">Spearbit, Open Zeppelin, Trail of Bits, Cantina</td>
                      <td className="px-3 md:px-4 py-3 text-sm text-gray-700">2021 - 2024</td>
                      <td className="px-3 md:px-4 py-3 text-sm">
                      <a
                        href="https://docs.morpho.org/getting-started/resources/audits/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9159FF] hover:text-[#7c3aed] transition-colors font-medium inline-flex items-center"
                      >
                        View All Reports
                        <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}