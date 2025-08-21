import { TrendingUp, Shield, Zap, PlayCircle } from "lucide-react";
import Image from "next/image";


export default function HeroSection() {

  return (
    <section
      className="relative max-w-[1920px] mx-auto pt-32 pb-32 2xl:pt-42 2xl:pb-42 overflow-hidden bg-grandient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="hidden md:inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>Smart DeFi Yield Optimization</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-white">Autopilot for</span>
              <br />
              <span className="text-[#9159FF]">Morpho Lenders</span>

            </h1>

            {/* Subheadline */}
            <p className="text-xl text-[#CDCDCD] mb-8 max-w-lg mx-auto lg:mx-0">
              Supply once, and let Autopilot allocate to the best-performing Morpho vaults automatically.
            </p>

            {/* Trust Badges */}
            <div className="hidden md:flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#9159FF]" />
                <span className="text-[#9159FF]">Audited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-[#9159FF]" />
                <span className="text-[#9159FF]">Auto-Rebalancing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col flex-row items-center justify-center lg:justify-start space-y-4 space-y-0 space-x-4 text-xs md:text-base">
              <button
                // onClick={handleGetStarted}
                className="inline-flex items-center px-8 py-4 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl my-0"
              >
                Launching Soon
                <Image src="/launchIcon.png" width={17.5} height={17.5} alt="Launch Icon" className="ml-2 w-5 h-5" />
              </button>

              <button
                // onClick={handleWatchDemo}
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Demo Account
              </button>
            </div>
          </div>

          {/* Right Column - APY Ranking Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-100">
              {/* Card Header
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Average APY</h3>
              </div> */}

              {/* Rankings List */}
              <div className="space-y-4">
                {/* #1 Autopilot USDC */}
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200 relative" style={{backgroundImage: "url('./bg-gradient.png')"}}>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#9159FF] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#9159FF] rounded-full"></div>
                    <div>
                      <div className="font-semibold text-[#D1D5DC]">Autopilot USDC</div>
                      <div className="text-xs text-[#ACACAC]">Auto-rebalancer</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">9.03%</div>
                    <div className="text-xs text-white">APY</div>
                  </div>
                </div>

                {/* #2 Gauntlet USDC Core */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Gauntlet USDC Core</div>
                      <div className="text-xs text-gray-500">Morpho Vault</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">8.05%</div>
                    <div className="text-xs text-gray-500">APY</div>
                  </div>
                </div>

                {/* #3 Hyperithm USDC */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Hyperithm USDC</div>
                      <div className="text-xs text-gray-500">Morpho Vault</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">7.82%</div>
                    <div className="text-xs text-gray-500">APY</div>
                  </div>
                </div>

                {/* #4 Steakhouse USDC */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Steakhouse USDC</div>
                      <div className="text-xs text-gray-500">Morpho Vault</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">7.64%</div>
                    <div className="text-xs text-gray-500">APY</div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-[#9159FF]" />
                  <span className="text-[#9159FF] font-medium">Leading yield</span>
                  <span className="text-gray-500">with automated optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}