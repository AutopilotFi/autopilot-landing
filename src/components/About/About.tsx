"use client"
import { useState } from "react";
import { Home, FileText, ExternalLink, Info, Target, Users, CheckCircle, Settings, TrendingUp, Shield, Compass, Cpu } from "lucide-react";
import Link from "next/link";
import Header from "../Header";


type TermsSheet = 'privacy-policy' | 'terms-of-service' | 'risk-disclosures';
type ContentType = 'about' | 'terms';

export default function About() {
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const [contentType, setContentType] = useState<ContentType>('about');
  const [activeTermsSheet, setActiveTermsSheet] = useState<TermsSheet>('privacy-policy');

  const scrollToSection = (sectionId: string) => {
    if (contentType === 'terms') {
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
    }, contentType === 'terms' ? 300 : 0);
  };

  const showTermsSheet = (sheet: TermsSheet) => {
    setContentType('terms');
    setActiveTermsSheet(sheet);
    setHighlightedSection(null);
    window.scrollTo(0, 0);
  };

  const showAboutContent = () => {
    setContentType('about');
    setHighlightedSection(null);
    window.scrollTo(0, 0);
  };

  return (
    <div
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        style={{backgroundImage: "url('./bg-gradient.png')", backgroundAttachment: "fixed"}}
    >
    {/* Header - Matching homepage proportions */}
    <Header disableNavLinks/>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-8">

            {/* Left Sidebar Navigation */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-28">
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
                        onClick={() => scrollToSection('value-proposition')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Target className="w-4 h-4 mr-2" />
                        Value Proposition
                      </button>
                      <button
                        onClick={() => scrollToSection('team-background')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Team Background
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
                      <button
                        onClick={() => scrollToSection('vault-integration')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Vault Integration
                      </button>
                      <button
                        onClick={() => scrollToSection('why-choose-autopilot')}
                        className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Why Choose Autopilot?
                      </button>
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
                          onClick={() => scrollToSection('technology-audits')}
                          className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#9159FF] hover:bg-purple-50 rounded-lg transition-colors"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Technology & Audits
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
                        href="/"
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
            <div className="flex-1">
              <div className="bg-white rounded-3xl shadow-2xl border border-purple-100/50 p-8 md:p-12">
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
                      Autopilot Finance is a yield optimization platform with a dedicated product line for Morpho lenders. It automatically allocates liquidity across multiple vaults in the Morpho ecosystem, enabling efficient allocation without manual rebalancing.
                    </p>
                  </div>

                  {/* Value Proposition */}
                  <div
                    id="value-proposition"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'value-proposition'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-[#9159FF]" />
                      What is the value proposition of Autopilot Finance?
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Autopilot delivers higher yield potential than any standalone Morpho vault via high-frequency, automated rebalancing.
                      </p>
                      <p>
                        It also provides a simple, single entry point to Morpho&apos; broad range of curated vaults.
                      </p>
                      <p>
                        This combination enables optimized allocation without the need to monitor rates or manage multiple positions.
                      </p>
                    </div>
                  </div>

                  {/* Team Background */}
                  <div
                    id="team-background"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'team-background'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-[#9159FF]" />
                      Who is behind Autopilot Finance?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Autopilot Finance is developed by the team behind Harvest Finance, one of the longest-operating yield optimization projects in DeFi. The team has managed over $1B in cumulative TVL across multiple networks, with a proven record of security, uptime, and transparent communication.
                    </p>
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
                        Autopilot&apos; rebalancing setup continuously monitors Morpho vaults and reallocates liquidity to maintain the most favorable setup at any given time.
                      </p>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Tracks Morpho vaults' performance in real time</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Factors in gas costs, interest rates, and market liquidity when making allocation decisions</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Dynamically adjusts to maximize efficiency and yield potential</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Adjusts allocations multiple times per hour when conditions change</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Splits liquidity across several vaults if this produces better efficiency</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Operates on-chain through audited, non-custodial smart contracts</span>
                      </div>
                      <p>
                        This process allows Autopilot to respond to shifting rates at a speed and precision that is not feasible with manual management.
                      </p>
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
                      <p>
                        Autopilot harvests all yield sources associated with its allocations, including manually claimable rewards, points programs, and lending interest.
                      </p>
                      <p>
                        All harvested amounts are automatically converted and compounded back into the Autopilot&apos; default token, such as USDC or WETH, increasing the overall position size over time.
                      </p>
                    </div>
                  </div>

                  {/* How new Morpho vaults are added to Autopilot */}
                  <div
                    id="vault-integration"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'vault-integration'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-[#9159FF]" />
                      How new Morpho vaults are added to Autopilot
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Autopilot&apos; initial Morpho-focused product line is limited to vaults covered under OpenCover&apos; Morpho Vaults Cover Annex.
                      </p>
                      <p>
                        This ensures that all integrated vaults meet a predefined security and eligibility standard.
                      </p>
                      <p>
                        The annex is regularly updated by OpenCover and reflects covered Morpho vaults that qualify for on-chain insurance.
                      </p>
                      <p>
                        When a new Morpho vault is added to the annex, Autopilot can integrate it into relevant strategies, subject to internal review and strategy alignment.
                      </p>

                      <div className="bg-gray-50 rounded-xl p-4 mt-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Process overview:</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                            <span>Monitor OpenCover&apos; Morpho Vaults Cover Annex for new vault additions</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                            <span>Evaluate the new vault&apos; yield potential, liquidity depth, and compatibility with Autopilot strategies</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                            <span>If approved, connect it to Autopilot&apos; rebalancing engine for automated allocation</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-blue-900 font-medium mb-2">View OpenCover&apos; Morpho Vaults Cover Annex</p>
                        <a
                          href="https://api.nexusmutual.io/ipfs/Qmd7cbiW228KWZK6tywaoMcaMKWYHT6i4qrnHRmWNfWVDD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-700 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Cover Annex Documentation
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Autopilot Finance */}
                  <div
                    id="why-choose-autopilot"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'why-choose-autopilot'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-[#9159FF]" />
                      Why choose Autopilot Finance
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Higher yield potential than any standalone Morpho vault</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Single, simple entry point to Morpho&apos; broad range of curated vaults</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Automated, high-frequency allocation without manual intervention</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#22c55e] flex-shrink-0" />
                        <span>Non-custodial and built on audited, production-grade infrastructure</span>
                      </div>
                    </div>
                  </div>

                  {/* Technology & Audits */}
                  <div
                    id="technology-audits"
                    className={`space-y-4 p-6 rounded-2xl transition-all duration-1000 ease-in-out ${
                      highlightedSection === 'technology-audits'
                        ? 'bg-purple-50/70 shadow-sm'
                        : 'bg-transparent'
                    }`}
                  >
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
                        [Harvest Foundation] integrates IPOR&apos; rebalancing technology in parallel with its own auto-compounding vault infrastructure to create Autopilot&apos; allocation setups.
                      </p>
                      <p>
                        Harvest&apos; core vault infrastructure underwent a comprehensive audit by Halborn in January 2025. The audit report is available{' '}
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
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Protocol</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Auditor</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Report</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-900">IPOR Labs Technology</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Multiple Independent Auditors</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Various Dates</td>
                                <td className="px-4 py-3 text-sm">
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
                                <td className="px-4 py-3 text-sm text-gray-900">Harvest Finance Core Infrastructure</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Halborn</td>
                                <td className="px-4 py-3 text-sm text-gray-700">January 2025</td>
                                <td className="px-4 py-3 text-sm">
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
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center pt-8 border-t border-gray-200">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">
                        Ready to optimize your yields with automated strategies?
                      </p>
                      <button
                        // onClick={onLaunchApp}
                        className="inline-flex items-center px-8 py-4 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Try Autopilot Finance
                        <img src="/launchIcon.png"alt="" className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Terms Content */}
                    {activeTermsSheet === 'privacy-policy' && (
                      <div className="prose prose-lg max-w-none">
                        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Autopilot Privacy Policy</h1>
                        <p className="text-gray-600 mb-8">Updated and effective: 11 August 2025</p>

                        <div className="space-y-8">
                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              This Privacy Policy explains how [Harvest Foundation], and any future successor operator of the Autopilot Finance platform ("we," "us," or "our"), collects, uses, and protects information when you use Autopilot.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot is available at autopilot.finance and any subdomains, related pages, interfaces, APIs, or applications operated by [Harvest Foundation] and, if applicable in the future, any successor operator.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot is a non-custodial allocation engine that automates deployment of digital assets across decentralised finance ("DeFi") strategies, including Harvest Finance auto-compounding vaults, Morpho vaults, and other integrated protocols. Autopilot uses IPOR Technology (the rebalancing smart contract system and related software stack initially developed by IPOR Labs AG, including any modifications, upgrades, forks, or rebrands thereof, and any successor entity responsible for its operation).
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              By using Autopilot, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              We do not collect personal data in the traditional sense (e.g., names, physical addresses) when you use Autopilot. However, the following information may be processed:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li><strong>Blockchain transaction data:</strong> Public wallet addresses, transaction hashes, and smart contract interactions.</li>
                              <li><strong>Usage data:</strong> Non-identifiable technical information such as device type, browser type, pages visited, and interaction timestamps.</li>
                              <li><strong>Voluntary submissions:</strong> Information you provide through forms, customer support, or feedback channels.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                              <li>Operate and maintain Autopilot&apos; interface and allocation engine.</li>
                              <li>Diagnose and fix technical issues.</li>
                              <li>Analyse usage patterns to improve stability and user experience.</li>
                              <li>Comply with applicable legal obligations.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              You acknowledge that your use of integrated vaults or protocols via Autopilot may be subject to various fees — including but not limited to performance fees, management fees, protocol fees, transaction costs, and other applicable charges.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Some of these fees are set and collected by independent third-party protocols or integrations and are not controlled by [Harvest Foundation] or any successor operator. Others, such as those applied at the Harvest layer or by Autopilot itself, are set by [Harvest Foundation] or any successor operator and may be introduced, modified, or removed at their discretion without prior notice.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              We do not use your data to personally profile you or sell it to third parties.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Public Nature of Blockchain Data</h2>
                            <p className="text-gray-700 leading-relaxed">
                              Any transaction you make through Autopilot is recorded on public blockchains (such as Ethereum or Base) and is accessible to anyone. We cannot modify, remove, or control such data.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Services and Integrations</h2>
                            <p className="text-gray-700 leading-relaxed">
                              Autopilot connects to protocols operated by independent third parties, including but not limited to Harvest Finance vaults, Morpho vaults, and IPOR Technology. These third parties may have their own privacy practices and terms. We are not responsible for their policies or actions.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
                            <p className="text-gray-700 leading-relaxed">
                              We retain minimal technical logs for as long as necessary to operate and secure Autopilot. Public blockchain data is permanent and cannot be deleted.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Security Measures and User Awareness</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              We implement reasonable security measures to protect information from loss, theft, misuse, and unauthorised access. However, no security measure can guarantee absolute protection, especially for public blockchain transactions.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              You are solely responsible for ensuring that you are accessing the genuine Autopilot interface at autopilot.finance or its official subdomains. Autopilot&apos; interface could be subject to hacking, phishing, DNS hijacking, spoofing, or other malicious interference. Interacting through a compromised or fraudulent interface may result in total and unrecoverable loss of assets or data.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. No Guarantee of Accuracy</h2>
                            <p className="text-gray-700 leading-relaxed">
                              Any performance metrics, APYs, vault rankings, or allocation-related data shown in Autopilot are for informational purposes only. They may be delayed, inaccurate, or sourced from third-party APIs. You are solely responsible for verifying any such information before acting on it.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
                            <p className="text-gray-700 leading-relaxed">
                              Autopilot may be accessed globally. By using Autopilot, you consent to the transfer and processing of any collected data outside your country of residence, subject to applicable laws.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                              We may update this Privacy Policy at any time by posting the revised version on our website. Your continued use of Autopilot after such updates constitutes your acceptance of the revised Privacy Policy.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Successor Operator</h2>
                            <p className="text-gray-700 leading-relaxed">
                              If the operation of Autopilot is transferred from [Harvest Foundation] to a successor operator, your continued use after notice of such transfer constitutes your acceptance of the successor&apos; privacy policy, provided it does not materially diminish your rights or increase your obligations without your affirmative consent.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              To the fullest extent permitted by law, [Harvest Foundation], its affiliates, and any successor operator will not be liable for any damages, losses, or claims arising from:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                              <li>Your reliance on any data or information provided through Autopilot.</li>
                              <li>Loss of assets, performance shortfalls, protocol failures, or third-party actions.</li>
                              <li>Security breaches, DNS hijacks, spoofed interfaces, or unauthorised access to your wallet or transactions.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                              Our total liability to you will not exceed USD $1,000. This limitation applies even if the remedies fail their essential purpose.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              If you have questions about this Privacy Policy, contact:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="text-gray-700">
                                [Harvest Foundation]<br />
                                Email: [Insert email address]<br />
                                Address: [Insert address]
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                    )}

                    {activeTermsSheet === 'terms-of-service' && (
                      <div className="prose prose-lg max-w-none">
                        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Autopilot Terms of Service</h1>
                        <p className="text-gray-600 mb-8">Updated and effective: 11 August 2025</p>

                        <div className="space-y-8">
                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction and Agreement</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">1.1 Welcome and Overview</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              These Terms of Use ("Terms") govern your access to and use of the Autopilot Finance platform ("Autopilot"), available at autopilot.finance and any subdomains, related pages, interfaces, APIs, or applications operated by [Harvest Foundation] and, if applicable in the future, any successor operator ("Company," "we," "us," or "our").
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot is a non-custodial interface and allocation engine that automates the deployment of digital assets across decentralised finance ("DeFi") strategies, including Harvest Finance auto-compounding vaults, Morpho vaults, and other integrated protocols, using IPOR Technology (the rebalancing smart contract system and related software stack initially developed by IPOR Labs AG, including any modifications, upgrades, forks, or rebrands thereof, and any successor entity responsible for its operation) (collectively, the "Services").
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">1.2 Binding Agreement</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              By accessing or using Autopilot, you confirm that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and our Risk Disclosures. If you do not agree, you must cease using Autopilot immediately.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">1.3 No Custody</h3>
                            <p className="text-gray-700 leading-relaxed">
                              [Harvest Foundation] does not hold or control your digital assets at any time. All interactions occur via your self-custodied wallet and direct blockchain transactions.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Modifications to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                              We may update these Terms at any time by posting a revised version on our website. The updated Terms will be effective immediately upon posting. Your continued use of Autopilot constitutes your acceptance of the updated Terms.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Disclaimers and Acknowledgments</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">3.1 No Financial Advice</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              All information provided through Autopilot — including APYs, allocation logic, rankings, and other performance-related data — is for informational purposes only and does not constitute financial, legal, or tax advice. Statements such as "improved performance" or "optimized allocations" are descriptive of intended functionality only and are not guarantees of results.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">3.2 Risks</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Using Autopilot involves significant risks, including potential loss of all assets allocated to connected protocols. You must read and understand our Risk Disclosures before using the Services.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">3.3 Third-Party Integrations</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot connects to protocols operated by independent third parties, including Harvest Finance vaults, Morpho vaults, and IPOR Technology. We do not control these protocols and are not responsible for their operation, performance, or security.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">3.4 Interface Authenticity and Security Awareness</h3>
                            <p className="text-gray-700 leading-relaxed">
                              You are solely responsible for ensuring you are accessing the genuine Autopilot interface at autopilot.finance or its official subdomains. The interface could be subject to hacking, phishing, DNS hijacking, spoofing, or other malicious interference. Interacting through a compromised or fraudulent interface may result in total and unrecoverable loss of assets or data, for which we cannot be held responsible.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li>Maintain full control of your private keys and wallet credentials.</li>
                              <li>Verify all transaction details before confirming on-chain.</li>
                              <li>Ensure you are using the official Autopilot domain or subdomains before interacting.</li>
                              <li>Comply with all applicable laws, including tax reporting obligations.</li>
                              <li>Conduct independent due diligence on all vaults and protocols you allocate to.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Eligibility</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">To use Autopilot, you must:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li>Be at least 18 years old (or legal age of majority in your jurisdiction).</li>
                              <li>Not be located in, or a resident of, any sanctioned jurisdiction (including Iran, Belarus, Cuba, DPRK, Syria, Crimea, Donetsk, Luhansk, and Russia).</li>
                              <li>Not be a "Sanctioned Person" as defined under applicable sanctions laws.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Prohibited Uses</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">You may not:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li>Use Autopilot for any illegal activity.</li>
                              <li>Circumvent geoblocking or access controls.</li>
                              <li>Deploy malicious code, perform denial-of-service attacks, or attempt unauthorised access.</li>
                              <li>Manipulate vault APYs, liquidity, or strategy performance through deceptive or abusive behaviour.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Fees and Transactions</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">7.1 Fees</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Certain vaults and integrations may charge fees, including but not limited to performance fees, management fees, protocol fees, transaction costs, and other applicable charges.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Some of these fees are set and collected by independent third-party protocols or integrations and are not controlled by [Harvest Foundation] or any successor operator.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Other fees, such as those applied at the Harvest layer or through Autopilot itself, are set by [Harvest Foundation] or any successor operator and may be introduced, modified, or removed at their discretion without prior notice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              It is your responsibility to review current fee information, where available, before initiating any allocation.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">7.2 Finality of Transactions</h3>
                            <p className="text-gray-700 leading-relaxed">
                              All blockchain transactions are final and irreversible. [Harvest Foundation] cannot reverse, refund, or modify any transaction.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                              All intellectual property in Autopilot&apos; website, branding, and user interface is owned by or licensed to [Harvest Foundation]. You may not copy, modify, or distribute our materials without written consent.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              To the fullest extent permitted by law, [Harvest Foundation], its affiliates, and any successor operator will not be liable for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                              <li>Any loss of assets due to protocol failures, bugs, exploits, or third-party actions.</li>
                              <li>Any inaccuracies or delays in APY data, vault metrics, or allocation logic.</li>
                              <li>Any interruptions, downtime, or inability to access Autopilot.</li>
                              <li>Losses resulting from interacting through a fraudulent or compromised interface.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                              Our total liability to you will not exceed USD $1,000. This limitation applies even if the remedies fail their essential purpose.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
                            <p className="text-gray-700 leading-relaxed">
                              You agree to indemnify and hold harmless [Harvest Foundation], its affiliates, any successor operator, and their personnel from any claims, damages, liabilities, or expenses arising from your use of Autopilot, including your breach of these Terms, violation of applicable law, or actions related to connected protocols.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Assumption of Risk and Waiver of Claims</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">By using Autopilot, you:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li>Accept all risks associated with the Services, Harvest vaults, Morpho vaults, IPOR Technology, and other integrations.</li>
                              <li>Acknowledge that [Harvest Foundation] is not liable for any loss of assets, performance shortfalls, or other damages.</li>
                              <li>Irrevocably waive, release, and discharge [Harvest Foundation], its affiliates, and any successor operator from any and all legal claims or causes of action, to the fullest extent permitted by law.</li>
                              <li>Agree not to initiate, join, or participate in any class action, arbitration, or similar proceeding against [Harvest Foundation], its affiliates, or any successor operator in connection with your use of Autopilot, except where prohibited by applicable law.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Governing Law and Disputes</h2>
                            <p className="text-gray-700 leading-relaxed">
                              These Terms are governed by the laws of [Insert Country]. Any dispute that is not subject to mandatory arbitration will be resolved exclusively in the courts of [Insert Country].
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Termination</h2>
                            <p className="text-gray-700 leading-relaxed">
                              We may suspend or terminate your access to Autopilot at any time without notice if you violate these Terms or if required by law. Sections relating to disclaimers, limitation of liability, indemnification, and dispute resolution will survive termination.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Successor Operator</h2>
                            <p className="text-gray-700 leading-relaxed">
                              If the operation of Autopilot is transferred from [Harvest Foundation] to a successor operator, your continued use of Autopilot after notice of such transfer constitutes your acceptance of the successor operator&apos; Terms of Use.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              For questions about these Terms, contact:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                              <p className="text-gray-700">
                                [Harvest Foundation]<br />
                                Email: [Insert email address]<br />
                                Address: [Insert address]
                              </p>
                            </div>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Acknowledgment</h2>
                            <p className="text-gray-700 leading-relaxed">
                              By accessing or using Autopilot, you confirm that you have read, understood, and agree to these Terms of Use, the Privacy Policy, and the Risk Disclosures, and that you voluntarily assume all associated risks.
                            </p>
                          </section>
                        </div>
                      </div>
                    )}

                    {activeTermsSheet === 'risk-disclosures' && (
                      <div className="prose prose-lg max-w-none">
                        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Autopilot Risk Disclosures</h1>
                        <p className="text-gray-600 mb-8">Updated and effective: 11 August 2025</p>

                        <div className="space-y-8">
                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">Purpose</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              These Risk Disclosures are intended to inform users of the potential risks involved in using the Autopilot Finance platform ("Autopilot"), available at autopilot.finance and any subdomains, related pages, interfaces, APIs, or applications operated by [Harvest Foundation] and, if applicable in the future, any successor operator.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot is a non-custodial allocation engine that automates asset deployment across decentralised finance ("DeFi") strategies, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                              <li>Vaults on the Morpho protocol</li>
                              <li>Harvest Finance auto-compounding vaults</li>
                              <li>Other integrated strategies available through supported smart contracts</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot uses IPOR Technology (the rebalancing smart contract system and related software stack initially developed by IPOR Labs AG, including any modifications, upgrades, forks, or rebrands thereof, and any successor entity responsible for its operation) to determine allocation shifts between these strategies ("Services").
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              By using Autopilot, you acknowledge that you are participating in an experimental, high-risk, and rapidly evolving sector, and that you have read, understood, and accept these risks.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">Scope</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              These disclosures apply to all interactions with Autopilot, autopilot.finance, and its subdomains and related pages, as well as its connected services, including allocations, withdrawals, rebalancing, and any interactions with third-party or Harvest smart contracts.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">Non-custodial nature</h3>
                            <p className="text-gray-700 leading-relaxed">
                              [Harvest Foundation] does not hold, manage, or take custody of your digital assets at any time. All allocations occur through your self-custodied wallet via direct interactions with on-chain contracts.
                            </p>
                          </section>



                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Experimental Nature</h2>
                            <p className="text-gray-700 leading-relaxed">
                              Autopilot, Harvest vaults, Morpho vaults, IPOR Technology, and other integrated contracts are experimental and provided "as is" without warranties. Unexpected behaviour — including total loss of assets — is possible.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. General Risks</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">3.1 Volatility of cryptocurrency markets</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Prices of digital assets can change rapidly and unpredictably, affecting yields, strategy performance, and the value of your holdings.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">3.2 Regulatory risks and legal uncertainty</h3>
                            <p className="text-gray-700 leading-relaxed">
                              The legal and regulatory environment for DeFi is evolving. Changes in law or enforcement could restrict or prevent your use of Autopilot or integrated protocols. You are solely responsible for ensuring your use complies with applicable laws in all relevant jurisdictions.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Security Risks</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">4.1 Smart contract vulnerabilities</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Even if audited, smart contracts in Autopilot&apos; stack — including Harvest vaults, IPOR contracts, Morpho vaults, and other integrations — may contain exploitable bugs or logic errors.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">4.2 Third-party protocol risks</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Integrated protocols such as Morpho may change parameters, suspend vaults, freeze withdrawals, alter fee structures, or otherwise restrict access without notice. These changes are outside [Harvest Foundation]&apos; control.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">4.3 Cyberattacks and interface security</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot, Harvest vaults, and integrated protocols may be subject to hacks, phishing, DNS hijacking, spoofed interfaces, or other malicious attacks.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              You are solely responsible for ensuring that you are accessing the genuine Autopilot interface at autopilot.finance or its official subdomains. Interacting through a compromised or fraudulent interface may result in total and unrecoverable loss of assets or data, for which we cannot be held responsible.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Technical Risks</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">5.1 Downtime and service disruption</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot, Harvest vaults, Morpho vaults, or IPOR Technology may experience downtime due to maintenance, congestion, upgrades, governance actions, or network-level issues (e.g., Ethereum or Base chain disruptions).
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">5.2 Allocation logic dependencies</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot&apos; performance relies on timely and accurate data from IPOR Technology, Harvest, Morpho, and other sources. Delays, errors, manipulation, or unavailability of these inputs can lead to suboptimal or harmful allocations.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">5.3 Emerging technology risks</h3>
                            <p className="text-gray-700 leading-relaxed">
                              Future advances in technology (e.g., quantum computing) may compromise blockchain security.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Product-Specific Risks</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">6.1 Rebalancing risks</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Frequent reallocations may incur transaction costs, slippage, or missed yield if vault entry/exit timing is suboptimal.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">6.2 Auto-compounding risks</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Harvest&apos; auto-compounding vaults or any other integrated auto-compounding solutions depend on scheduled "harvest" transactions to mechanically accrue and compound yield. Network congestion, failed transactions, or changes to underlying strategies in any of these systems may reduce expected performance.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">6.3 Morpho vault risks</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Morpho vaults are curated and managed by independent third parties. Allocation parameters, risk profiles, and liquidity conditions may change without notice. In rare circumstances, withdrawals may be delayed or restricted due to liquidity shortfalls, market freezes, or governance decisions.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">6.4 No guarantee of yield</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Past performance is not indicative of future results. Allocations may underperform compared to holding assets in a single vault or other strategy.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">6.5 Fee impact on returns</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Changes in protocol fees — including but not limited to performance fees, management fees, protocol fees, transaction costs, and other applicable charges — may reduce expected yields.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Some of these fees are set and collected by independent third-party protocols or integrations and are not controlled by [Harvest Foundation] or any successor operator. Others, such as those applied at the Harvest layer or through Autopilot itself, are set by [Harvest Foundation] or any successor operator and may be introduced, modified, or removed at their discretion without prior notice.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Third-Party Risks</h2>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">7.1 Reliance on Morpho, IPOR Technology, and other integrations</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Autopilot depends on the continued availability and correct functioning of Morpho, IPOR Technology, and other integrated protocols. Disruptions, governance changes, forks, or deprecations could materially affect operations.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">7.2 Data source risks</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              APYs, vault capacities, and other displayed metrics may be sourced from external APIs. Delayed, manipulated, or inaccurate data could result in misleading information.
                            </p>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">7.3 Fees</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Your use of Autopilot and integrated vaults or protocols may be subject to performance fees, management fees, protocol fees, transaction costs, and other applicable charges. The fee control structure follows the same split described in Section 6.5 above.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. User Responsibilities</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">You are solely responsible for:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li>Securing your wallet private keys and other credentials.</li>
                              <li>Verifying all transactions before signing on-chain.</li>
                              <li>Ensuring you are using the official Autopilot domain or subdomains before interacting.</li>
                              <li>Monitoring your allocations and understanding that yield, liquidity, and risk profiles may change without notice.</li>
                              <li>Complying with all applicable laws, including tax obligations.</li>
                              <li>Conducting independent due diligence on Autopilot, Harvest vaults, Morpho vaults, and IPOR Technology before use.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. No Professional Advice</h2>
                            <p className="text-gray-700 leading-relaxed">
                              Information provided by Autopilot — including APYs, vault rankings, and allocation recommendations — is for informational purposes only and does not constitute financial, legal, or tax advice. Consult qualified professionals before making any decisions.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Assumption of Risk and Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">By using Autopilot, you:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                              <li>Accept all risks associated with interacting with Autopilot, Harvest vaults, Morpho vaults, IPOR rebalancing contracts, and other integrations.</li>
                              <li>Acknowledge that [Harvest Foundation] is not liable for any loss of assets, performance shortfalls, or indirect damages resulting from your use of Autopilot.</li>
                              <li>Understand that all blockchain transactions are irreversible once confirmed.</li>
                              <li>Agree that our total liability to you will not exceed USD $1,000. This limitation applies even if the remedies fail their essential purpose.</li>
                            </ul>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Incident Reporting and Transparency</h2>
                            <p className="text-gray-700 leading-relaxed">
                              [Harvest Foundation] aims to maintain transparency and may disclose material incidents affecting Autopilot or its integrations. Such disclosure does not imply responsibility or liability for any resulting losses.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Mitigation Measures</h2>
                            <p className="text-gray-700 leading-relaxed">
                              [Harvest Foundation] uses measures such as integrating audited smart contracts (where available) and sourcing from reputable protocols. These measures cannot eliminate all risks, and you must remain vigilant.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Successor Operator</h2>
                            <p className="text-gray-700 leading-relaxed">
                              If the operation of Autopilot is transferred from [Harvest Foundation] to a successor operator, your continued use after notice of such transfer constitutes your acceptance of the successor&apos; terms, provided they do not materially diminish your rights or increase your obligations without your affirmative consent.
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Acknowledgment and Waiver of Claims</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">By using Autopilot, you acknowledge and agree that:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                              <li>You have read, understood, and accept these Risk Disclosures in full.</li>
                              <li>You voluntarily assume all risks associated with using Autopilot, Harvest vaults, Morpho vaults, IPOR rebalancing contracts, and any other integrations.</li>
                              <li>To the fullest extent permitted by applicable law, you irrevocably waive, release, and discharge [Harvest Foundation], its affiliates, and their respective officers, directors, employees, contractors, and agents from any and all claims, actions, causes of action, liabilities, damages, losses, costs, or expenses (including legal fees) arising out of or in any way related to your use of Autopilot — including, without limitation, any loss of digital assets, performance shortfalls, protocol failures, fraudulent or spoofed interfaces, or third-party actions.</li>
                              <li>You agree not to initiate, join, or participate in any class action, arbitration, or other proceeding against [Harvest Foundation] or related parties in connection with your use of Autopilot, except where such waiver is prohibited by applicable law.</li>
                            </ul>
                          </section>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mobile Navigation Menu (shown on small screens) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50 p-4">
          <div className="flex justify-around">
            <button
              onClick={showAboutContent}
              className={`flex flex-col items-center text-xs transition-colors ${
                contentType === 'about' ? 'text-[#9159FF] font-medium' : 'text-gray-600 hover:text-[#9159FF]'
              }`}
            >
              <Info className="w-5 h-5 mb-1" />
              About
            </button>
            <button
              onClick={() => showTermsSheet('privacy-policy')}
              className={`flex flex-col items-center text-xs transition-colors ${
                contentType === 'terms' ? 'text-[#9159FF] font-medium' : 'text-gray-600 hover:text-[#9159FF]'
              }`}
            >
              <FileText className="w-5 h-5 mb-1" />
              Terms
            </button>
            <Link
              href="/"
              className="flex flex-col items-center text-xs text-gray-600 hover:text-[#9159FF] transition-colors"
            >
              <Home className="w-5 h-5 mb-1" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}