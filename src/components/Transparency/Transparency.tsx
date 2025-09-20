"use client";
import { useState } from "react";
import {
  ExternalLink,
  TrendingUp,
  Shield,
  Activity,
  DollarSign,
  Clock,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { allEarningsData, protocolStats, autopilotProducts } from "./consts";
import Image from "next/image";

export interface EarningsEntry {
  date: string;
  time: string;
  asset: string;
  project: string;
  network: string;
  amount: string;
  value: string;
  txHash: string;
}

export interface AutopilotProduct {
  asset: string;
  project: string;
  network: string;
  tvl: string;
  allRebalances: number;
  rebalances30d: number;
  totalEarnings: string;
  totalEarningsAsset: string;
  etherscanLink: string;
  debankLink: string;
}

export default function Transparency() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const currentEarningsData = allEarningsData[currentPage - 1] || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const AutopilotBadge = ({
    asset,
    project,
    network,
  }: {
    asset: string;
    project: string;
    network: string;
  }) => {
    const getAssetIcon = (asset: string) => {
      switch (asset) {
        case "USDC":
          return "/coins/usdc.png";
        case "ETH":
          return "/coins/eth.png";
        case "cbBTC":
          return "/coins/cbBTC.png";
        default:
          return "/coins/usdc.png";
      }
    };

    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Image
            width={10}
            height={10}
            src={getAssetIcon(asset)}
            alt={asset}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <Image
            width={10}
            height={10}
            src={"/projects/morpho.png"}
            alt={project}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center space-x-1 text-xs sm:text-sm font-medium text-gray-900">
            {/* Mobile: Show "Asset Autopilot", Desktop: Show "Asset • Project" */}
            <span className="sm:hidden">{asset} Autopilot</span>
            <span className="hidden sm:inline">{asset}</span>
            <span className="text-gray-400 hidden sm:inline">•</span>
            <span className="hidden sm:inline">{project}</span>
          </div>
          <div className="text-xs text-gray-500">{network}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative max-w-[1920px] mx-auto pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-[#9159FF] mr-3" />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Transparency Dashboard
            </h1>
          </div>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl">
            Real-time insights into all onchain operations, rebalancing
            activities, and earnings generation across all Autopilot strategies.
            Every transaction is verifiable onchain.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {/* TVL */}
          <div className="bg-white rounded-xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="w-5 h-5 lg:w-6 lg:h-6 text-[#9159FF]" />
              <div className="flex items-center text-xs lg:text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live
              </div>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
              ${protocolStats.tvl}
            </div>
            <div className="text-xs lg:text-sm text-gray-500">
              Total Value Locked
            </div>
          </div>

          {/* All-time Earnings */}
          <div className="bg-white rounded-xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <BarChart3 className="w-5 h-5 lg:w-6 lg:h-6 text-[#9159FF]" />
              <div className="text-xs lg:text-sm text-gray-400">
                Since Genesis
              </div>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
              ${protocolStats.totalEarningsAllTime}
            </div>
            <div className="text-xs lg:text-sm text-gray-500">
              Total Earnings
            </div>
          </div>

          {/* 7d Earnings */}
          <div className="bg-white rounded-xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-[#9159FF]" />
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
              ${protocolStats.totalEarnings7d}
            </div>
            <div className="text-xs lg:text-sm text-gray-500">7d Earnings</div>
          </div>

          {/* 24h Earnings */}
          <div className="bg-white rounded-xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[#9159FF]" />
              <div className="flex items-center text-xs lg:text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live
              </div>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
              ${protocolStats.totalEarnings24h}
            </div>
            <div className="text-xs lg:text-sm text-gray-500">24h Earnings</div>
          </div>
        </div>

        {/* All Autopilots Table */}
        <div className="bg-white rounded-xl mb-8 lg:mb-12">
          <div className="p-6 lg:p-8 border-b border-gray-200">
            <div className="flex items-center mb-2">
              <Activity className="w-5 h-5 lg:w-6 lg:h-6 text-[#9159FF] mr-3" />
              <h2 className="text-lg lg:text-xl font-bold text-gray-900">
                All Autopilots
              </h2>
            </div>
            <p className="text-sm lg:text-base text-gray-600">
              Complete overview of all Autopilot strategies and their
              rebalancing activity across protocols.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">
                    Asset
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">
                    Project
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">
                    Network
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                    TVL
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                    All Rebalances
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                    30d Rebalances
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                    Total Earnings
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-gray-900">
                    Autopilot Vault
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {autopilotProducts.map((product, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900">
                        {product.asset}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900">
                        {product.project}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {product.network}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="text-sm font-bold text-gray-900">
                        ${product.tvl}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="text-sm font-bold text-gray-900">
                        {product.allRebalances.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {product.rebalances30d}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="text-sm font-bold text-gray-900">
                        {product.totalEarnings} {product.totalEarningsAsset}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm text-[#9159FF] hover:text-[#7c3aed] transition-colors cursor-pointer">
                          Etherscan
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-[#9159FF] hover:text-[#7c3aed] transition-colors cursor-pointer">
                          DeBank
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Earnings Breakdown Table - Mobile Optimized */}
        <div className="bg-white rounded-xl">
          <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 lg:w-6 lg:h-6 text-[#9159FF] mr-3" />
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900">
                    Onchain Earnings Breakdown
                  </h2>
                </div>
                <p className="text-sm lg:text-base text-gray-600">
                  Complete earnings history before distribution to users. All
                  transactions are verifiable onchain.
                </p>
              </div>
              <div className="flex items-center text-xs lg:text-sm text-green-600 mt-4 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Data
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="block sm:hidden divide-y divide-gray-100">
            {currentEarningsData.map((entry, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="space-y-3">
                  {/* Time & Date */}
                  <div className="flex justify-between items-start">
                    <div className="text-sm text-gray-900">
                      <span className="font-semibold">{entry.time} UTC</span>{" "}
                      {entry.date}
                    </div>
                    <span className="inline-flex items-center text-xs text-[#9159FF] hover:text-[#7c3aed] transition-colors cursor-pointer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </span>
                  </div>

                  {/* Autopilot */}
                  <AutopilotBadge
                    asset={entry.asset}
                    project={entry.project}
                    network={entry.network}
                  />

                  {/* Earnings & Value */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold text-green-600">
                        {entry.amount} {entry.asset}
                      </div>
                      <div className="text-xs text-gray-500">Earnings</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        ${entry.value}
                      </div>
                      <div className="text-xs text-gray-500">USD Value</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">
                    Time & Date
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">
                    Autopilot
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                    Earnings
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-900">
                    Value
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-gray-900">
                    Proof
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentEarningsData.map((entry, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        <span className="font-semibold">{entry.time} UTC</span>{" "}
                        {entry.date}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <AutopilotBadge
                        asset={entry.asset}
                        project={entry.project}
                        network={entry.network}
                      />
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="text-sm font-bold text-green-600">
                        {entry.amount} {entry.asset}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="text-sm font-medium text-gray-900">
                        ${entry.value}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center text-sm text-[#9159FF] hover:text-[#7c3aed] transition-colors">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 lg:p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="text-xs lg:text-sm text-gray-600 text-center sm:text-left">
                Page {currentPage} of {totalPages} • Showing 10 entries per page
              </div>
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        page === currentPage
                          ? "bg-[#9159FF] text-white"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 lg:mt-12 bg-purple-50 rounded-xl p-4 lg:p-6">
          <h3 className="text-base lg:text-lg font-medium text-purple-900 mb-3">
            Transparency Notice
          </h3>
          <p className="text-purple-800 text-xs lg:text-sm leading-relaxed">
            All data displayed represents actual onchain activity across all
            Autopilot strategies. Earnings shown are gross amounts before
            distribution to users based on their proportional stake. Individual
            user earnings will vary based on deposit timing, amount, and
            duration. Transaction hashes and block numbers provide cryptographic
            proof of all operations. Past performance does not guarantee future
            results.
          </p>
        </div>
      </div>
    </section>
  );
}
