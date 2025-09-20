import { Circle, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function AppPreview() {
  // Static data matching the Dashboard Overview tab exactly
  const currentData = {
    asset: "USDC",
    assetIcon: "/coins/usdc.png",
    icon: "/projects/morpho.png",
    name: "Morpho",
    autopilotBalance: 200400.0,
    currentEarnings: 45231.89,
    monthlyForecast: (200400 * 0.0875) / 12, // Match exact calculation from Dashboard
    currentAPY: 0.0875, // Match Dashboard APY
    recentEarnings: [
      { time: "2 min", amount: 8.32, type: "yield" },
      { time: "47 min", amount: 15.67, type: "yield" },
      { time: "1 hr", amount: 12.45, type: "yield" },
      { time: "2 hr", amount: 20.99, type: "yield" },
      { time: "4 hr", amount: 25.0, type: "yield" },
    ],
  };

  const stats = [
    {
      label: "Total Balance",
      value: currentData.autopilotBalance.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      }),
      unit: currentData.asset,
    },
    {
      label: "Total Earnings",
      value: currentData.currentEarnings.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      }),
      unit: currentData.asset,
    },
    {
      label: "Monthly Forecast",
      value: currentData.monthlyForecast.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      }),
      unit: currentData.asset,
    },
    {
      label: "Next Update",
      value: "28",
      unit: "min",
    },
  ];

  // Chart data optimized for better fill of the chart area
  const chartData = [
    { x: 10, y: 100 },
    { x: 75, y: 85 },
    { x: 140, y: 70 },
    { x: 205, y: 60 },
    { x: 270, y: 45 },
    { x: 335, y: 30 },
    { x: 390, y: 15 },
  ];

  const createSmoothPath = (points: Array<{ x: number; y: number }>) => {
    if (points.length < 2) return "";

    let path = `M ${points[0].x},${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const curr = points[i];
      const prev = points[i - 1];

      const tension = 0.3;
      const cp1x = prev.x + (curr.x - prev.x) * tension;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * tension;
      const cp2y = curr.y;

      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${curr.x},${curr.y}`;
    }

    return path;
  };

  const pathData = createSmoothPath(chartData);

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Smart Portfolio Management
          </h2>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-600">
            Your single entry point to Morpho&apos;s best-performing, curated
            vaults. Monitor performance and earnings in real time.
          </p>
        </div>

        {/* App Mockup - Full Browser Window matching Overview Tab */}
        <div className="relative max-w-6xl mx-auto">
          {/* macOS Browser Window */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-[1.01] transition-all duration-500">
            {/* macOS Title Bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center space-x-3">
                {/* Traffic Light Buttons */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-[#9159FF] rounded-full hover:bg-[#7c3aed] transition-colors cursor-pointer animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-lg mx-4 hidden sm:block">
                  <div className="bg-white rounded-md px-4 py-2 text-sm text-gray-700 border border-gray-300 shadow-inner">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#9159FF] rounded-full animate-pulse"></div>
                      <span className="font-mono text-xs lg:text-sm">
                        https://app.autopilot.finance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                </button>
              </div>
            </div>

            {/* App Content - No Sidebar, Direct to Main Content */}
            <div className="bg-white min-h-[500px] lg:min-h-[600px]">
              {/* Dashboard Header */}
              <header className="bg-white border-b border-gray-100">
                <div className="px-4 lg:px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <button className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors">
                        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                      </button>

                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <Image
                          src={currentData.assetIcon}
                          width={28}
                          height={28}
                          alt={currentData.asset}
                          className="w-6 h-6 lg:w-8 lg:h-8"
                        />
                        <div>
                          <h1 className="text-sm lg:text-lg font-semibold text-gray-900">
                            {currentData.asset} Autopilot
                          </h1>
                          <div className="flex items-center space-x-1 lg:space-x-2">
                            <Image
                              src={currentData.icon}
                              width={14}
                              height={14}
                              alt={currentData.name}
                              className="w-3 h-3 lg:w-4 lg:h-4"
                            />
                            <span className="text-xs lg:text-sm text-gray-500">
                              {currentData.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 lg:space-x-4">
                      <div className="flex items-center space-x-1 lg:space-x-2 bg-purple-50 border border-purple-200 px-2 lg:px-3 py-1 lg:py-1.5 rounded-md">
                        <Circle className="w-1.5 h-1.5 lg:w-2 lg:h-2 fill-[#9159FF] text-[#9159FF] animate-pulse" />
                        <span className="text-xs lg:text-sm font-medium text-purple-700">
                          Live
                        </span>
                      </div>
                      <div className="text-xs lg:text-sm font-semibold text-[#9159FF]">
                        {(currentData.currentAPY * 100).toFixed(2)}% APY
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* Navigation Tabs */}
              <div className="bg-white border-b border-gray-100 px-4 lg:px-6 overflow-x-auto">
                <div className="flex space-x-4 lg:space-x-8 min-w-max">
                  {[
                    "Overview",
                    "Deposit",
                    "Earnings",
                    "Benchmark",
                    "Details",
                    "History",
                  ].map((tab, index) => (
                    <button
                      key={tab}
                      className={`py-3 lg:py-4 px-1 border-b-2 font-medium text-xs lg:text-sm transition-colors whitespace-nowrap ${
                        index === 0
                          ? "border-[#9159FF] text-[#9159FF]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dashboard Main Content - Overview Tab */}
              <main className="p-4 lg:p-6">
                {/* Stats Grid - 1x4 responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg border border-gray-100 p-3 lg:p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2 lg:mb-3">
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                          {stat.label}
                        </p>
                        {stat.unit !== "min" && (
                          <Image
                            src={currentData.assetIcon}
                            height={14}
                            width={14}
                            alt={stat.unit}
                            className="w-3 h-3 lg:w-4 lg:h-4"
                          />
                        )}
                      </div>
                      <div className="flex items-baseline space-x-1 lg:space-x-2">
                        <span className="text-lg lg:text-2xl font-bold text-gray-900">
                          {stat.value}
                        </span>
                        <span className="text-xs lg:text-sm text-gray-500">
                          {stat.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Content Grid - Earnings + Latest Earnings */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Earnings Chart */}
                  <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100 p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 lg:mb-4 gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Earnings
                      </h3>
                      <div className="flex items-center bg-gray-100 rounded-md p-1">
                        {["7d", "1m", "all"].map((period, index) => (
                          <button
                            key={period}
                            className={`px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium rounded transition-colors ${
                              index === 2
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chart date and value */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 text-sm">
                        <span className="text-gray-500">23 June 2025</span>
                        <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="font-medium text-[#9159FF]">
                          {currentData.currentEarnings.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          {currentData.asset}
                        </span>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="relative">
                      <div className="h-48 lg:h-56">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 400 120"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="earningsGradient"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#9159FF"
                                stopOpacity="0.2"
                              />
                              <stop
                                offset="100%"
                                stopColor="#9159FF"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>

                          <path
                            d={`${pathData} L 390,120 L 10,120 Z`}
                            fill="url(#earningsGradient)"
                          />

                          <path
                            d={pathData}
                            fill="none"
                            stroke="#9159FF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <circle
                            cx="390"
                            cy="15"
                            r="4"
                            fill="#9159FF"
                            stroke="white"
                            strokeWidth="2"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>

                      {/* Chart labels */}
                      <div className="flex justify-between text-xs text-gray-500 px-4 mt-3">
                        <span>Nov</span>
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                      </div>
                    </div>
                  </div>

                  {/* Latest Earnings */}
                  <div className="bg-white rounded-lg border border-gray-100 p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Latest Earnings
                      </h3>
                      <button className="text-xs bg-gray-900 text-white px-2 lg:px-3 py-1 lg:py-1.5 rounded-md hover:bg-gray-800 transition-colors">
                        View All
                      </button>
                    </div>

                    <div className="space-y-3 lg:space-y-4">
                      {currentData.recentEarnings.map((earning, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 lg:py-3 px-2 lg:px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-2 lg:space-x-3">
                            <Image
                              src={currentData.assetIcon}
                              width={17.5}
                              height={17.5}
                              alt={currentData.asset}
                              className="w-4 h-4 lg:w-5 lg:h-5"
                            />
                            <div>
                              <div className="text-xs lg:text-sm font-medium text-gray-900">
                                +
                                {earning.amount.toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}{" "}
                                {currentData.asset}
                              </div>
                              <div className="text-xs text-gray-500">
                                Yield earned
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {earning.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            Ready to optimize your Morpo positions?
          </h3>
          <p className="text-gray-600 mb-6">Explore Autopilot today</p>
          <button
            // onClick={onLaunchApp}
            className="inline-flex items-center px-8 py-4 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl space-x-2 mx-auto"
          >
            <span>Launch App Now</span>
            <Image
              src="/launchIcon.png"
              alt="Launch Icon"
              width={17.5}
              height={17.5}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
