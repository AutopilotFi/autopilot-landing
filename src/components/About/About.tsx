"use client"
import { useState, useEffect } from "react";
import { Home, FileText, Info, Users, CheckCircle, Settings, TrendingUp, Shield, Compass, Cpu, BarChart3, Menu, ChevronUp } from "lucide-react";
import { Benchmark } from "./Benchmark";
import { SecurityRiskManagement } from "./SecurityRiskManagement";
import { Technology } from "./Technology";
import { Audits } from "./Audits";
import { TeamBackground } from "./TeamBackground";
import Link from "next/link";
import {useSearchParams, useRouter} from "next/navigation"
import Image from "next/image";

type TermsSheet = 'privacy-policy' | 'terms-of-service' | 'risk-disclosures';
const isVaildTermsSheet = (h?: string | null): h is TermsSheet =>
  !!h && ['privacy-policy', 'terms-of-service', 'risk-disclosures'].includes(h);
type ContentType = 'about' | 'benchmark' | 'security' | 'technology' | 'audits' | 'terms' | 'team';
const isVaildContentType = (h?: string | null): h is ContentType =>
  !!h && ['about', 'benchmark', 'security', 'technology', 'audits', 'terms', 'team'].includes(h);

const getInitialContentType = (param?: string | null) => {
  if(param && isVaildContentType(param))
    return param;
  else return "about";
}

const getInitialTermsSheet = (param?: string | null) => {
  if(param && isVaildTermsSheet(param))
    return param;
  else return "privacy-policy";
}

const scrollTop = () => {
  window.scrollTo(0, 0);
}

export default function About() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const [contentType, setContentType] = useState<ContentType>(getInitialContentType(searchParams.get("section")));
  const [activeTermsSheet, setActiveTermsSheet] = useState<TermsSheet>(getInitialTermsSheet(searchParams.get("termsType")));
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  const changeContentType = (content: ContentType) => {
    setContentType(content);
    scrollTop();
  }

  // Handle section navigation while url change
  useEffect(() => {
    const sectionFromUrl = searchParams.get("section");
    if(isVaildContentType(sectionFromUrl)){
        setContentType(sectionFromUrl);
        scrollTop();
    }
  }, [searchParams]);

  useEffect(() => {
    const currentSection = new URLSearchParams(window.location.search).get("section");
    if(currentSection !== contentType){
      router.replace('/about', {
        scroll: false
      });
    }
}, [contentType, router]);

  const scrollToSection = (sectionId: string) => {
    // Always switch to about content first if not already there
    if (contentType !== 'about') {
      setContentType('about');
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Highlight the section
        setHighlightedSection(sectionId);

        // Scroll to the section
        element.scrollIntoView({ behavior: 'smooth' });

        // Remove highlight after animation
        setTimeout(() => {
          setHighlightedSection(null);
        }, 2000);
      }
    }, contentType !== 'about' ? 300 : 0);
  };

  const showTermsSheet = (sheet: TermsSheet) => {
    changeContentType('terms');
    setActiveTermsSheet(sheet);
    setHighlightedSection(null);
  };

  const showAboutContent = () => {
    changeContentType('about');
    setHighlightedSection(null);
  };

  return (
    <section className="relative max-w-[1920px] mx-auto pt-32 pb-32 2xl:pt-42 2xl:pb-42 bg-grandient bg-fixed min-h-screen">
        <div className="w-full md:max-w-7xl md:mx-auto px-0 md:px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-8">

            {/* Left Sidebar Navigation - Hidden on Mobile */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-10">
                <div className="bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50 p-6">
                  {/* About Autopilot Finance */}
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-gray-900 flex items-center">
                      <Compass className="w-4 h-4 mr-2" />
                      About Autopilot Finance
                    </div>

                    <div className="ml-4 space-y-1">
                      <button
                        onClick={() => scrollToSection('what-is-autopilot')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        What is Autopilot?
                      </button>
                      <button
                        onClick={() => scrollToSection('benefits')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Benefits
                      </button>
                      <button
                        onClick={() => scrollToSection('how-rebalancing-works')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        How Rebalancing Works
                      </button>
                      <button
                        onClick={() => scrollToSection('comprehensive-yield-capture')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Yield Capture
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    {/* Performance Analysis Section */}
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-900 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Performance Analysis
                      </div>

                      <div className="ml-4 space-y-1">
                        <button
                          onClick={() => changeContentType('benchmark')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'benchmark'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Benchmark
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    {/* Technology & Audits Section */}
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-900 flex items-center">
                        <Cpu className="w-4 h-4 mr-2" />
                        Technology & Audits
                      </div>

                      <div className="ml-4 space-y-1">
                        <button
                          onClick={() => changeContentType('technology')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'technology'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Technology
                        </button>
                        <button
                          onClick={() => changeContentType('audits')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'audits'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Audits
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    {/* Security & Risk Management Section */}
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-900 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Security & Risk
                      </div>

                      <div className="ml-4 space-y-1">
                        <button
                          onClick={() => changeContentType('security')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'security'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Security & Risk Management
                        </button>
                        <button
                          onClick={() => changeContentType('team')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'team'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          Team Background
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    {/* Terms of Use Section */}
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-900 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Terms of Use
                      </div>

                      <div className="ml-4 space-y-1">
                        <button
                          onClick={() => showTermsSheet('privacy-policy')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'terms' && activeTermsSheet === 'privacy-policy'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          Privacy Policy
                        </button>
                        <button
                          onClick={() => showTermsSheet('terms-of-service')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'terms' && activeTermsSheet === 'terms-of-service'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          Terms of Service
                        </button>
                        <button
                          onClick={() => showTermsSheet('risk-disclosures')}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            contentType === 'terms' && activeTermsSheet === 'risk-disclosures'
                              ? 'text-[#9159FF] bg-purple-50'
                              : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                          }`}
                        >
                          Risk Disclosures
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <button
                        onClick={showAboutContent}
                        className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          contentType === 'about'
                            ? 'text-[#9159FF] bg-purple-50'
                            : 'text-gray-600 hover:text-[#9159FF] hover:bg-purple-50'
                        }`}
                      >
                        <Info className="w-4 h-4 mr-2" />
                        About Autopilot
                      </button>
                      <Link
                        href={"/"}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Home className="w-4 h-4 mr-2" />
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Sheet */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-none md:rounded-3xl shadow-none md:shadow-2xl border-0 md:border border-purple-100/50 p-4 md:p-12 mb-20 md:mb-0 overflow-hidden">
                {contentType === 'about' ? (
                  <div className="space-y-4">

                  {/* What is Autopilot Finance */}
                  <div
                    id="what-is-autopilot"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'what-is-autopilot'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-[#9159FF]" />
                      What is Autopilot Finance?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Autopilot uses high-frequency rebalancing algorithms to maximize yield potential for Morpho lenders. It automatically allocates liquidity across multiple vaults in the Morpho ecosystem, enabling efficient allocation without manual rebalancing. Users can supply liquidity to an Autopilot vault once, and stay exposed to the most-efficient Morpho vaults at all times. Autopilot can rebalance up to several times per hour - achieving efficiency unmatched by manual management.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div
                    id="benefits"
                    className={`space-y-6 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'benefits'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-[#9159FF]" />
                      Benefits
                    </h2>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      {/* Lead-in paragraph */}
                      <p>
                        Autopilot delivers higher yield potential than any standalone Morpho vault via high-frequency, automated rebalancing. It also provides a simple, single entry point to Morpho&apos;s broad range of curated vaults.
                      </p>

                      {/* Performance Chart Image */}
                      <div className="flex justify-center my-6">
                        <Image
                          width={684}
                          height={395}
                          src={"/performanceChart.png"}
                          alt="Autopilot Performance vs Morpho Vaults - Backtesting Data"
                          className="max-w-full h-auto rounded-xl shadow-lg border border-gray-200"
                        />
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Backtesting data shows that active, automated rebalancing vault outperforms any standalone Morpho vault. Data range: 1 Jan - 29 June | All major curated Morpho vaults included in the data set.
                      </p>
                    </div>

                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                      {/* Always Allocated to the Most Efficient Morpho Vaults */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
                          Always Allocated to the Most Efficient Morpho Vaults
                        </h3>
                        <div className="ml-8 space-y-3 leading-relaxed">
                          <p>Morpho offers a range of vaults from different curators, each with its own performance profile.</p>
                          <p>If you&apos;re choosing manually, and there are 10 vaults available, your odds of picking the vault that remains the top performer over time are only 10%.</p>
                          <p>Autopilot&apos;s optimization algorithms continuously monitor all eligible vaults and adjust allocations so users remain in the most favorable position at any given moment, effectively taking those odds to 100%.</p>
                        </div>
                      </div>

                      {/* Performance That Holds Up Over Time */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
                          Performance That Holds Up Over Time
                        </h3>
                        <div className="ml-8 space-y-3 leading-relaxed">
                          <p>Autopilot&apos;s optimization engine runs 24/7 simulations to find the most yield-maximizing allocation path, factoring in elements like rate changes, liquidity depth, and network conditions.</p>
                          <p>The algorithm reallocates liquidity in real time as market conditions shift, ensuring users are always positioned for the most favorable outcome.</p>
                          <p>Over time, this constant, algorithm-driven optimization creates a compounding advantage over any single Morpho vault.</p>
                        </div>
                      </div>

                      {/* Multi-Vault Allocation Advantage */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
                          Multi-Vault Allocation Advantage
                        </h3>
                        <div className="ml-8 space-y-3 leading-relaxed">
                          <p>Autopilot can allocate to multiple Morpho vaults at the same time, combining their yields in a way that can exceed the rate of any single vault on its own.</p>
                          <p>If conditions and TVL allow, this multi-vault approach can capture opportunities that manual allocation would miss.</p>
                        </div>
                      </div>

                      {/* Less Manual Work, Less Friction */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
                          Less Manual Work, Less Friction
                        </h3>
                        <div className="ml-8 space-y-3 leading-relaxed">
                          <p>Without Autopilot, users need to:</p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 mt-2 flex-shrink-0"></div>
                              <span>Manually monitor and reallocate funds</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 mt-2 flex-shrink-0"></div>
                              <span>Perform multiple transactions or multisig approvals when switching</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 mt-2 flex-shrink-0"></div>
                              <span>In certain jurisdictions, manage potential tax implications with every reallocation or withdrawal</span>
                            </li>
                          </ul>
                          <p>Autopilot&apos;s algorithm handles this automatically, without sacrificing transparency or user control.</p>
                        </div>
                      </div>

                      {/* Built on Morpho's Own Approved Vaults */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
                          Built on Morpho&apos;s Own Approved Vaults
                        </h3>
                        <div className="ml-8 space-y-3 leading-relaxed">
                          <p>Autopilot connects to Morpho vaults that have been approved and listed on Morpho&apos;s flagship app.</p>
                          <p>These vaults have already passed Morpho&apos;s own due-diligence process before being made available to users.</p>
                          <p>From this pre-vetted selection, Autopilot adds an additional layer of review for yield potential, liquidity depth, and risk profile before integrating them into its strategies.</p>
                          <p>By building on Morpho&apos;s own approved vaults and applying its own checks, Autopilot offers users a higher degree of confidence that allocations are made into strategies meeting strong security and eligibility standards.</p>
                        </div>
                      </div>

                      {/* Simple, Single Entry Point */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-[#9159FF]" />
                          Simple, Single Entry Point
                        </h3>
                        <div className="ml-8 space-y-3 leading-relaxed">
                          <p>Instead of managing multiple positions across different Morpho vaults, users can access the entire ecosystem through a single Autopilot deposit.</p>
                          <p>This combination enables optimized allocation without the need to monitor rates or manage multiple positions manually.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* How High-Frequency Rebalancing Works */}
                  <div
                    id="how-rebalancing-works"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'how-rebalancing-works'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-[#9159FF]" />
                      How High-Frequency Rebalancing Works
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Autopilot&apos;s rebalancing setup continuously monitors Morpho vaults and reallocates liquidity to maintain the most favorable setup at any given time.
                      </p>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Tracks Morpho vaults&apos; performance in real time</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Factors in gas costs, interest rates, and market liquidity when making allocation decisions</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Constantly calculates the most optimal allocation setup to achieve the highest yield potential</span>
                      </div>
                    </div>
                  </div>

                  {/* Comprehensive Yield Capture */}
                  <div
                    id="comprehensive-yield-capture"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'comprehensive-yield-capture'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-[#9159FF]" />
                      Comprehensive Yield Capture
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Autopilot captures accrued lending interest at the root level.</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>It claims rewards automatically and converts them into more of the underlying token (e.g. USDC).</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>It also processes tokens from points programs that Morpho vaults are entitled to, converting them into additional underlying tokens.</span>
                      </div>
                    </div>
                  </div>
                  </div>
                ) : contentType === 'benchmark' ? (
                  <Benchmark />
                ) : contentType === 'security' ? (
                  <SecurityRiskManagement />
                ) : contentType === 'technology' ? (
                  <Technology />
                ) : contentType === 'audits' ? (
                  <Audits />
                ) : contentType === 'team' ? (
                  <TeamBackground />
                ) : contentType === 'terms' ? (
                  <div className="space-y-8">
                    {/* Terms Navigation Tabs */}
                    <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
                      <button
                        onClick={() => setActiveTermsSheet('privacy-policy')}
                        className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                          activeTermsSheet === 'privacy-policy'
                            ? 'bg-white text-[#9159FF] shadow-sm'
                            : 'text-gray-600 hover:text-[#9159FF]'
                        }`}
                      >
                        Privacy Policy
                      </button>
                      <button
                        onClick={() => setActiveTermsSheet('terms-of-service')}
                        className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                          activeTermsSheet === 'terms-of-service'
                            ? 'bg-white text-[#9159FF] shadow-sm'
                            : 'text-gray-600 hover:text-[#9159FF]'
                        }`}
                      >
                        Terms of Service
                      </button>
                      <button
                        onClick={() => setActiveTermsSheet('risk-disclosures')}
                        className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                          activeTermsSheet === 'risk-disclosures'
                            ? 'bg-white text-[#9159FF] shadow-sm'
                            : 'text-gray-600 hover:text-[#9159FF]'
                        }`}
                      >
                        Risk Disclosures
                      </button>
                    </div>

                    {/* Terms Content */}
                    {activeTermsSheet === 'privacy-policy' && (
                      <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                        <div className="prose prose-lg max-w-none">

                        <div className="space-y-6">
                          <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">1. Introduction</h3>
                              <p>
                                This Privacy Policy explains how [Harvest Foundation], and any future successor operator of the Autopilot Finance platform (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and protects information when you use Autopilot.
                              </p>
                              <p>
                                Autopilot is available at autopilot.finance and any subdomains, related pages, interfaces, APIs, or applications operated by [Harvest Foundation] and, if applicable in the future, any successor operator.
                              </p>
                              <p>
                                Autopilot is a non-custodial allocation engine that automates deployment of digital assets across decentralised finance (&quot;Defi&quot;) strategies, including Harvest Finance auto-compounding vaults, Morpho vaults, and other integrated protocols. Autopilot uses IPOR Technology (the rebalancing smart contract system and related software stack initially developed by IPOR Labs AG, including any modifications, upgrades, forks, or rebrands thereof, and any successor entity responsible for its operation).
                              </p>
                              <p>
                                By using Autopilot, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">2. Information We Collect</h3>
                              <p>
                                We do not collect personal data in the traditional sense (e.g., names, physical addresses) when you use Autopilot. However, the following information may be processed:
                              </p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Blockchain transaction data:</strong> Public wallet addresses, transaction hashes, and smart contract interactions.</li>
                                <li><strong>Usage data:</strong> Non-identifiable technical information such as device type, browser type, pages visited, and interaction timestamps.</li>
                                <li><strong>Voluntary submissions:</strong> Information you provide through forms, customer support, or feedback channels.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">3. How We Use Information</h3>
                              <p>We use the information we collect to:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Operate and maintain Autopilot&apos;s interface and allocation engine.</li>
                                <li>Diagnose and fix technical issues.</li>
                                <li>Analyse usage patterns to improve stability and user experience.</li>
                                <li>Comply with applicable legal obligations.</li>
                              </ul>
                              <p>
                                You acknowledge that your use of integrated vaults or protocols via Autopilot may be subject to various fees — including but not limited to performance fees, management fees, protocol fees, transaction costs, and other applicable charges.
                              </p>
                              <p>
                                Some of these fees are set and collected by independent third-party protocols or integrations and are not controlled by [Harvest Foundation] or any successor operator. Others, such as those applied at the Harvest layer or by Autopilot itself, are set by [Harvest Foundation] or any successor operator and may be introduced, modified, or removed at their discretion without prior notice.
                              </p>
                              <p>
                                We do not use your data to personally profile you or sell it to third parties.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">4. Public Nature of Blockchain Data</h3>
                              <p>
                                Any transaction you make through Autopilot is recorded on public blockchains (such as Ethereum or Base) and is accessible to anyone. We cannot modify, remove, or control such data.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">5. Third-Party Services and Integrations</h3>
                              <p>
                                Autopilot connects to protocols operated by independent third parties, including but not limited to Harvest Finance vaults, Morpho vaults, and IPOR Technology. These third parties may have their own privacy practices and terms. We are not responsible for their policies or actions.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">6. Data Retention</h3>
                              <p>
                                We retain minimal technical logs for as long as necessary to operate and secure Autopilot. Public blockchain data is permanent and cannot be deleted.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">7. Security Measures and User Awareness</h3>
                              <p>
                                We implement reasonable security measures to protect information from loss, theft, misuse, and unauthorised access. However, no security measure can guarantee absolute protection, especially for public blockchain transactions.
                              </p>
                              <p>
                                You are solely responsible for ensuring that you are accessing the genuine Autopilot interface at autopilot.finance or its official subdomains. Autopilot&apos;s interface could be subject to hacking, phishing, DNS hijacking, spoofing, or other malicious interference. Interacting through a compromised or fraudulent interface may result in total and unrecoverable loss of assets or data.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">8. No Guarantee of Accuracy</h3>
                              <p>
                                Any performance metrics, APYs, vault rankings, or allocation-related data shown in Autopilot are for informational purposes only. They may be delayed, inaccurate, or sourced from third-party APIs. You are solely responsible for verifying any such information before acting on it.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">9. International Data Transfers</h3>
                              <p>
                                Autopilot may be accessed globally. By using Autopilot, you consent to the transfer and processing of any collected data outside your country of residence, subject to applicable laws.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">10. Changes to This Policy</h3>
                              <p>
                                We may update this Privacy Policy at any time by posting the revised version on our website. Your continued use of Autopilot after such updates constitutes your acceptance of the revised Privacy Policy.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">11. Successor Operator</h3>
                              <p>
                                If the operation of Autopilot is transferred from [Harvest Foundation] to a successor operator, your continued use after notice of such transfer constitutes your acceptance of the successor&apos;s privacy policy, provided it does not materially diminish your rights or increase your obligations without your affirmative consent.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">12. Limitation of Liability</h3>
                              <p>To the fullest extent permitted by law, [Harvest Foundation], its affiliates, and any successor operator will not be liable for any damages, losses, or claims arising from:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Your reliance on any data or information provided through Autopilot.</li>
                                <li>Loss of assets, performance shortfalls, protocol failures, or third-party actions.</li>
                                <li>Security breaches, DNS hijacks, spoofed interfaces, or unauthorised access to your wallet or transactions.</li>
                              </ul>
                              <p>
                                Our total liability to you will not exceed USD $1,000. This limitation applies even if the remedies fail their essential purpose.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">13. Contact Information</h3>
                              <p>If you have questions about this Privacy Policy, contact:</p>
                              <p>
                                [Harvest Foundation]<br />
                                Email: [Insert email address]<br />
                                Address: [Insert address]
                              </p>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    )}

                    {activeTermsSheet === 'terms-of-service' && (
                      <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
                        <div className="prose prose-lg max-w-none">

                        <div className="space-y-6">
                          <div className="space-y-6 text-gray-700 leading-relaxed">
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">1. Introduction and Agreement</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">1.1 Welcome and Overview</h4>
                                <p>
                                  These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Autopilot Finance platform (&quot;Autopilot&quot;), available at autopilot.finance and any subdomains, related pages, interfaces, APIs, or applications operated by [Harvest Foundation] and, if applicable in the future, any successor operator (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                                </p>
                                <p>
                                  Autopilot is a non-custodial interface and allocation engine that automates the deployment of digital assets across decentralised finance (&quot;DeFi&quot;) strategies, including Harvest Finance auto-compounding vaults, Morpho vaults, and other integrated protocols, using IPOR Technology (the rebalancing smart contract system and related software stack initially developed by IPOR Labs AG, including any modifications, upgrades, forks, or rebrands thereof, and any successor entity responsible for its operation) (collectively, the &quot;Services&quot;).
                                </p>
                                <h4 className="font-semibold text-gray-900">1.2 Binding Agreement</h4>
                                <p>
                                  By accessing or using Autopilot, you confirm that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and our Risk Disclosures. If you do not agree, you must cease using Autopilot immediately.
                                </p>
                                <h4 className="font-semibold text-gray-900">1.3 No Custody</h4>
                                <p>
                                  [Harvest Foundation] does not hold or control your digital assets at any time. All interactions occur via your self-custodied wallet and direct blockchain transactions.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">2. Modifications to Terms</h3>
                              <p>
                                We may update these Terms at any time by posting a revised version on our website. The updated Terms will be effective immediately upon posting. Your continued use of Autopilot constitutes your acceptance of the updated Terms.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">3. Disclaimers and Acknowledgments</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">3.1 No Financial Advice</h4>
                                <p>
                                  All information provided through Autopilot — including APYs, allocation logic, rankings, and other performance-related data — is for informational purposes only and does not constitute financial, legal, or tax advice. Statements such as &quot;improved performance&quot; or &quot;optimized allocations&quot; are descriptive of intended functionality only and are not guarantees of results.
                                </p>
                                <h4 className="font-semibold text-gray-900">3.2 Risks</h4>
                                <p>
                                  Using Autopilot involves significant risks, including potential loss of all assets allocated to connected protocols. You must read and understand our Risk Disclosures before using the Services.
                                </p>
                                <h4 className="font-semibold text-gray-900">3.3 Third-Party Integrations</h4>
                                <p>
                                  Autopilot connects to protocols operated by independent third parties, including Harvest Finance vaults, Morpho vaults, and IPOR Technology. We do not control these protocols and are not responsible for their operation, performance, or security.
                                </p>
                                <h4 className="font-semibold text-gray-900">3.4 Interface Authenticity and Security Awareness</h4>
                                <p>
                                  You are solely responsible for ensuring you are accessing the genuine Autopilot interface at autopilot.finance or its official subdomains. The interface could be subject to hacking, phishing, DNS hijacking, spoofing, or other malicious interference. Interacting through a compromised or fraudulent interface may result in total and unrecoverable loss of assets or data, for which we cannot be held responsible.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">4. User Responsibilities</h3>
                              <p>You agree to:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Maintain full control of your private keys and wallet credentials.</li>
                                <li>Verify all transaction details before confirming on-chain.</li>
                                <li>Ensure you are using the official Autopilot domain or subdomains before interacting.</li>
                                <li>Comply with all applicable laws, including tax reporting obligations.</li>
                                <li>Conduct independent due diligence on all vaults and protocols you allocate to.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">5. Eligibility</h3>
                              <p>To use Autopilot, you must:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Be at least 18 years old (or legal age of majority in your jurisdiction).</li>
                                <li>Not be located in, or a resident of, any sanctioned jurisdiction (including Iran, Belarus, Cuba, DPRK, Syria, Crimea, Donetsk, Luhansk, and Russia).</li>
                                <li>Not be a &quot;Sanctioned Person&quot; as defined under applicable sanctions laws.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">6. Prohibited Uses</h3>
                              <p>You may not:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Use Autopilot for any illegal activity.</li>
                                <li>Circumvent geoblocking or access controls.</li>
                                <li>Deploy malicious code, perform denial-of-service attacks, or attempt unauthorised access.</li>
                                <li>Manipulate vault APYs, liquidity, or strategy performance through deceptive or abusive behaviour.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">7. Fees and Transactions</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">7.1 Fees</h4>
                                <p>
                                  Certain vaults and integrations may charge fees, including but not limited to performance fees, management fees, protocol fees, transaction costs, and other applicable charges.
                                </p>
                                <p>
                                  Some of these fees are set and collected by independent third-party protocols or integrations and are not controlled by [Harvest Foundation] or any successor operator. Others, such as those applied at the Harvest layer or through Autopilot itself, are set by [Harvest Foundation] or any successor operator and may be introduced, modified, or removed at their discretion without prior notice.
                                </p>
                                <p>
                                  It is your responsibility to review current fee information, where available, before initiating any allocation.
                                </p>
                                <h4 className="font-semibold text-gray-900">7.2 Finality of Transactions</h4>
                                <p>
                                  All blockchain transactions are final and irreversible. [Harvest Foundation] cannot reverse, refund, or modify any transaction.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">8. Intellectual Property</h3>
                              <p>
                                All intellectual property in Autopilot&apos;s website, branding, and user interface is owned by or licensed to [Harvest Foundation]. You may not copy, modify, or distribute our materials without written consent.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">9. Limitation of Liability</h3>
                              <p>To the fullest extent permitted by law, [Harvest Foundation], its affiliates, and any successor operator will not be liable for:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Any loss of assets due to protocol failures, bugs, exploits, or third-party actions.</li>
                                <li>Any inaccuracies or delays in APY data, vault metrics, or allocation logic.</li>
                                <li>Any interruptions, downtime, or inability to access Autopilot.</li>
                                <li>Losses resulting from interacting through a fraudulent or compromised interface.</li>
                              </ul>
                              <p>
                                Our total liability to you will not exceed USD $1,000. This limitation applies even if the remedies fail their essential purpose.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">10. Indemnification</h3>
                              <p>
                                You agree to indemnify and hold harmless [Harvest Foundation], its affiliates, any successor operator, and their personnel from any claims, damages, liabilities, or expenses arising from your use of Autopilot, including your breach of these Terms, violation of applicable law, or actions related to connected protocols.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">11. Assumption of Risk and Waiver of Claims</h3>
                              <p>By using Autopilot, you:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Accept all risks associated with the Services, Harvest vaults, Morpho vaults, IPOR Technology, and other integrations.</li>
                                <li>Acknowledge that [Harvest Foundation] is not liable for any loss of assets, performance shortfalls, or other damages.</li>
                                <li>Irrevocably waive, release, and discharge [Harvest Foundation], its affiliates, and any successor operator from any and all legal claims or causes of action, to the fullest extent permitted by law.</li>
                                <li>Agree not to initiate, join, or participate in any class action, arbitration, or similar proceeding against [Harvest Foundation], its affiliates, or any successor operator in connection with your use of Autopilot, except where prohibited by applicable law.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">12. Governing Law and Disputes</h3>
                              <p>
                                These Terms are governed by the laws of [Insert Country]. Any dispute that is not subject to mandatory arbitration will be resolved exclusively in the courts of [Insert Country].
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">13. Termination</h3>
                              <p>
                                We may suspend or terminate your access to Autopilot at any time without notice if you violate these Terms or if required by law. Sections relating to disclaimers, limitation of liability, indemnification, and dispute resolution will survive termination.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">14. Successor Operator</h3>
                              <p>
                                If the operation of Autopilot is transferred from [Harvest Foundation] to a successor operator, your continued use of Autopilot after notice of such transfer constitutes your acceptance of the successor operator&apos;s Terms of Use.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">15. Contact Information</h3>
                              <p>For questions about these Terms, contact:</p>
                              <p>
                                [Harvest Foundation]<br />
                                Email: [Insert email address]<br />
                                Address: [Insert address]
                              </p>
                            </div>
                          </div>
                        </div>

                        </div>
                      </div>
                    )}

                    {activeTermsSheet === 'risk-disclosures' && (
                      <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Risk Disclosures</h1>
                        <div className="prose prose-lg max-w-none">

                          <div className="space-y-6">
                          <div className="space-y-6 text-gray-700 leading-relaxed">
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">1. Introduction</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Purpose</h4>
                                <p>
                                  These Risk Disclosures are intended to inform users of the potential risks involved in using the Autopilot Finance platform (&quot;Autopilot&quot;), available at autopilot.finance and any subdomains, related pages, interfaces, APIs, or applications operated by [Harvest Foundation] and, if applicable in the future, any successor operator.
                                </p>
                                <p>
                                  Autopilot is a non-custodial allocation engine that automates asset deployment across decentralised finance (&quot;Defi&quot;) strategies, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                  <li>Vaults on the Morpho protocol</li>
                                  <li>Harvest Finance auto-compounding vaults</li>
                                  <li>Other integrated strategies available through supported smart contracts</li>
                                </ul>
                                <p>
                                  Autopilot uses IPOR Technology (the rebalancing smart contract system and related software stack initially developed by IPOR Labs AG, including any modifications, upgrades, forks, or rebrands thereof, and any successor entity responsible for its operation) to determine allocation shifts between these strategies (&quot;Services&quot;).
                                </p>
                                <p>
                                  By using Autopilot, you acknowledge that you are participating in an experimental, high-risk, and rapidly evolving sector, and that you have read, understood, and accept these risks.
                                </p>
                                <h4 className="font-semibold text-gray-900">Scope</h4>
                                <p>
                                  These disclosures apply to all interactions with Autopilot, autopilot.finance, and its subdomains and related pages, as well as its connected services, including allocations, withdrawals, rebalancing, and any interactions with third-party or Harvest smart contracts.
                                </p>
                                <h4 className="font-semibold text-gray-900">Non-custodial nature</h4>
                                <p>
                                  [Harvest Foundation] does not hold, manage, or take custody of your digital assets at any time. All allocations occur through your self-custodied wallet via direct interactions with on-chain contracts.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">2. Experimental Nature</h3>
                              <p>
                                Autopilot, Harvest vaults, Morpho vaults, IPOR Technology, and other integrated contracts are experimental and provided &quot;as is&quot; without warranties. Unexpected behaviour — including total loss of assets — is possible.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">3. General Risks</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">3.1 Volatility of cryptocurrency markets</h4>
                                <p>
                                  Prices of digital assets can change rapidly and unpredictably, affecting yields, strategy performance, and the value of your holdings.
                                </p>
                                <h4 className="font-semibold text-gray-900">3.2 Regulatory risks and legal uncertainty</h4>
                                <p>
                                  The legal and regulatory environment for DeFi is evolving. Changes in law or enforcement could restrict or prevent your use of Autopilot or integrated protocols. You are solely responsible for ensuring your use complies with applicable laws in all relevant jurisdictions.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">4. Security Risks</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">4.1 Smart contract vulnerabilities</h4>
                                <p>
                                  Even if audited, smart contracts in Autopilot&apos;s stack — including Harvest vaults, IPOR contracts, Morpho vaults, and other integrations — may contain exploitable bugs or logic errors.
                                </p>
                                <h4 className="font-semibold text-gray-900">4.2 Third-party protocol risks</h4>
                                <p>
                                  Integrated protocols such as Morpho may change parameters, suspend vaults, freeze withdrawals, alter fee structures, or otherwise restrict access without notice. These changes are outside [Harvest Foundation]&apos;s control.
                                </p>
                                <h4 className="font-semibold text-gray-900">4.3 Cyberattacks and interface security</h4>
                                <p>
                                  Autopilot, Harvest vaults, and integrated protocols may be subject to hacks, phishing, DNS hijacking, spoofed interfaces, or other malicious attacks.
                                </p>
                                <p>
                                  You are solely responsible for ensuring that you are accessing the genuine Autopilot interface at autopilot.finance or its official subdomains. Interacting through a compromised or fraudulent interface may result in total and unrecoverable loss of assets or data, for which we cannot be held responsible.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">5. Technical Risks</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">5.1 Downtime and service disruption</h4>
                                <p>
                                  Autopilot, Harvest vaults, Morpho vaults, or IPOR Technology may experience downtime due to maintenance, congestion, upgrades, governance actions, or network-level issues (e.g., Ethereum or Base chain disruptions).
                                </p>
                                <h4 className="font-semibold text-gray-900">5.2 Allocation logic dependencies</h4>
                                <p>
                                  Autopilot&apos;s performance relies on timely and accurate data from IPOR Technology, Harvest, Morpho, and other sources. Delays, errors, manipulation, or unavailability of these inputs can lead to suboptimal or harmful allocations.
                                </p>
                                <h4 className="font-semibold text-gray-900">5.3 Emerging technology risks</h4>
                                <p>
                                  Future advances in technology (e.g., quantum computing) may compromise blockchain security.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">6. Product-Specific Risks</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">6.1 Rebalancing risks</h4>
                                <p>
                                  Frequent reallocations may incur transaction costs, slippage, or missed yield if vault entry/exit timing is suboptimal.
                                </p>
                                <h4 className="font-semibold text-gray-900">6.2 Auto-compounding risks</h4>
                                <p>
                                  Harvest&apos;s auto-compounding vaults or any other integrated auto-compounding solutions depend on scheduled &quot;harvest&quot; transactions to mechanically accrue and compound yield. Network congestion, failed transactions, or changes to underlying strategies in any of these systems may reduce expected performance.
                                </p>
                                <h4 className="font-semibold text-gray-900">6.3 Morpho vault risks</h4>
                                <p>
                                  Morpho vaults are curated and managed by independent third parties. Allocation parameters, risk profiles, and liquidity conditions may change without notice. In rare circumstances, withdrawals may be delayed or restricted due to liquidity shortfalls, market freezes, or governance decisions.
                                </p>
                                <h4 className="font-semibold text-gray-900">6.4 No guarantee of yield</h4>
                                <p>
                                  Past performance is not indicative of future results. Allocations may underperform compared to holding assets in a single vault or other strategy.
                                </p>
                                <h4 className="font-semibold text-gray-900">6.5 Fee impact on returns</h4>
                                <p>
                                  Changes in protocol fees — including but not limited to performance fees, management fees, protocol fees, transaction costs, and other applicable charges — may reduce expected yields.
                                </p>
                                <p>
                                  Some of these fees are set and collected by independent third-party protocols or integrations and are not controlled by [Harvest Foundation] or any successor operator. Others, such as those applied at the Harvest layer or through Autopilot itself, are set by [Harvest Foundation] or any successor operator and may be introduced, modified, or removed at their discretion without prior notice.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">7. Third-Party Risks</h3>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">7.1 Reliance on Morpho, IPOR Technology, and other integrations</h4>
                                <p>
                                  Autopilot depends on the continued availability and correct functioning of Morpho, IPOR Technology, and other integrated protocols. Disruptions, governance changes, forks, or deprecations could materially affect operations.
                                </p>
                                <h4 className="font-semibold text-gray-900">7.2 Data source risks</h4>
                                <p>
                                  APYs, vault capacities, and other displayed metrics may be sourced from external APIs. Delayed, manipulated, or inaccurate data could result in misleading information.
                                </p>
                                <h4 className="font-semibold text-gray-900">7.3 Fees</h4>
                                <p>
                                  Your use of Autopilot and integrated vaults or protocols may be subject to performance fees, management fees, protocol fees, transaction costs, and other applicable charges. The fee control structure follows the same split described in Section 6.5 above.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">8. User Responsibilities</h3>
                              <p>You are solely responsible for:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Securing your wallet private keys and other credentials.</li>
                                <li>Verifying all transactions before signing on-chain.</li>
                                <li>Ensuring you are using the official Autopilot domain or subdomains before interacting.</li>
                                <li>Monitoring your allocations and understanding that yield, liquidity, and risk profiles may change without notice.</li>
                                <li>Complying with all applicable laws, including tax obligations.</li>
                                <li>Conducting independent due diligence on Autopilot, Harvest vaults, Morpho vaults, and IPOR Technology before use.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">9. No Professional Advice</h3>
                              <p>
                                Information provided by Autopilot — including APYs, vault rankings, and allocation recommendations — is for informational purposes only and does not constitute financial, legal, or tax advice. Consult qualified professionals before making any decisions.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">10. Assumption of Risk and Limitation of Liability</h3>
                              <p>By using Autopilot, you:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Accept all risks associated with interacting with Autopilot, Harvest vaults, Morpho vaults, IPOR rebalancing contracts, and other integrations.</li>
                                <li>Acknowledge that [Harvest Foundation] is not liable for any loss of assets, performance shortfalls, or indirect damages resulting from your use of Autopilot.</li>
                                <li>Understand that all blockchain transactions are irreversible once confirmed.</li>
                                <li>Agree that our total liability to you will not exceed USD $1,000. This limitation applies even if the remedies fail their essential purpose.</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">11. Incident Reporting and Transparency</h3>
                              <p>
                                [Harvest Foundation] aims to maintain transparency and may disclose material incidents affecting Autopilot or its integrations. Such disclosure does not imply responsibility or liability for any resulting losses.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">12. Mitigation Measures</h3>
                              <p>
                                [Harvest Foundation] uses measures such as integrating audited smart contracts (where available) and sourcing from reputable protocols. These measures cannot eliminate all risks, and you must remain vigilant.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">13. Successor Operator</h3>
                              <p>
                                If the operation of Autopilot is transferred from [Harvest Foundation] to a successor operator, your continued use after notice of such transfer constitutes your acceptance of the successor&apos;s terms, provided they do not materially diminish your rights or increase your obligations without your affirmative consent.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">14. Acknowledgment and Waiver of Claims</h3>
                              <p>By using Autopilot, you acknowledge and agree that:</p>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>You have read, understood, and accept these Risk Disclosures in full.</li>
                                <li>You voluntarily assume all risks associated with using Autopilot, Harvest vaults, Morpho vaults, IPOR rebalancing contracts, and any other integrations.</li>
                                <li>To the fullest extent permitted by applicable law, you irrevocably waive, release, and discharge [Harvest Foundation], its affiliates, and their respective officers, directors, employees, contractors, and agents from any and all claims, actions, causes of action, liabilities, damages, losses, costs, or expenses (including legal fees) arising out of or in any way related to your use of Autopilot — including, without limitation, any loss of digital assets, performance shortfalls, protocol failures, fraudulent or spoofed interfaces, or third-party actions.</li>
                                <li>You agree not to initiate, join, or participate in any class action, arbitration, or other proceeding against [Harvest Foundation] or related parties in connection with your use of Autopilot, except where such waiver is prohibited by applicable law.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        </div>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

      {/* Mobile Bottom Navigation Menu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        {/* Expanded Menu */}
        {isMobileMenuExpanded && (
          <div className="bg-white/95 backdrop-blur-sm border-t border-purple-100/50 shadow-xl animate-[slideUpMobile_0.3s_ease-out]">
            <div className="max-h-96 overflow-y-auto p-4">
              <div className="space-y-2">
                {/* Grid for main sections - responsive layout */}
                <div className="grid grid-cols-2 gap-2">
                  {/* About Sections */}
                  <button
                    onClick={() => {
                      scrollToSection('what-is-autopilot');
                      setIsMobileMenuExpanded(false);
                    }}
                    className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-[#9159FF] transition-all duration-200"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">What is Autopilot</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('benefits');
                      setIsMobileMenuExpanded(false);
                    }}
                    className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-[#9159FF] transition-all duration-200"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Benefits</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('how-rebalancing-works');
                      setIsMobileMenuExpanded(false);
                    }}
                    className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-[#9159FF] transition-all duration-200"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Rebalancing</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('comprehensive-yield-capture');
                      setIsMobileMenuExpanded(false);
                    }}
                    className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-[#9159FF] transition-all duration-200"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Yield Capture</span>
                  </button>

                  {/* Performance Analysis */}
                  <button
                    onClick={() => {
                      changeContentType('benchmark');
                      setIsMobileMenuExpanded(false);
                    }}
                    className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                      contentType === 'benchmark'
                        ? 'bg-[#9159FF] text-white'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-[#9159FF]'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Benchmark</span>
                  </button>

                  {/* Technology & Audits */}
                  <button
                    onClick={() => {
                      changeContentType('technology');
                      setIsMobileMenuExpanded(false);
                    }}
                    className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                      contentType === 'technology'
                        ? 'bg-[#9159FF] text-white'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-[#9159FF]'
                    }`}
                  >
                    <Cpu className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Technology</span>
                  </button>

                  <button
                    onClick={() => {
                      changeContentType('audits');
                      setIsMobileMenuExpanded(false);
                    }}
                    className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                      contentType === 'audits'
                        ? 'bg-[#9159FF] text-white'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-[#9159FF]'
                    }`}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Audits</span>
                  </button>

                  <button
                    onClick={() => {
                      changeContentType('security');
                      setIsMobileMenuExpanded(false);
                    }}
                    className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                      contentType === 'security'
                        ? 'bg-[#9159FF] text-white'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-[#9159FF]'
                    }`}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Security</span>
                  </button>

                  <button
                    onClick={() => {
                      changeContentType('team');
                      setIsMobileMenuExpanded(false);
                    }}
                    className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                      contentType === 'team'
                        ? 'bg-[#9159FF] text-white'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-[#9159FF]'
                    }`}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Team</span>
                  </button>

                  {/* Terms */}
                  <button
                    onClick={() => {
                      showTermsSheet('terms-of-service');
                      setIsMobileMenuExpanded(false);
                    }}
                    className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                      contentType === 'terms' && activeTermsSheet === 'terms-of-service'
                        ? 'bg-[#9159FF] text-white'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-[#9159FF]'
                    }`}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Terms</span>
                  </button>
                </div>

                {/* Full-width Home button at bottom */}
                <Link
                  href="/"
                  className="flex items-center justify-center w-full p-3 mt-4 rounded-xl bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-[#9159FF] transition-all duration-200"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-white/95 backdrop-blur-sm border-t border-purple-100/50 shadow-xl">
          <div className="px-4 py-3">
            <button
              onClick={() => setIsMobileMenuExpanded(!isMobileMenuExpanded)}
              className="w-full flex items-center justify-center px-4 py-3 bg-[#9159FF] hover:bg-[#7c3aed] text-white rounded-xl transition-all duration-200 transform active:scale-95"
            >
              <Menu className="w-5 h-5 mr-2" />
              <span className="font-medium">Navigate Sections</span>
              <ChevronUp
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  isMobileMenuExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}