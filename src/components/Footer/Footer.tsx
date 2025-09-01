import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: 2x2 grid, Desktop: 1x4 grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Product */}
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <div className="text-muted-foreground flex items-center">
                    Launch App
                    <span className="ml-2 px-2 py-1 bg-[#9159FF] text-white text-xs rounded-full font-medium">
                      Soon
                    </span>
                  </div>
                </li>
                <li>
                  <a
                    href="https://demo.autopilot.finance/"
                    target="_blank"
                    className="text-[#9159FF]">
                    Demo Account
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href={"/about"}
                    className="text-[#9159FF] hover:text-[#7c3aed] transition-colors text-left"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="text-[#9159FF] hover:text-[#7c3aed] transition-colors text-left"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about#benchmark"}
                    className="text-[#9159FF] hover:text-[#7c3aed] transition-colors text-left"
                  >
                    Benchmarks
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-medium mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <div className="text-muted-foreground">
                    Discord
                  </div>
                </li>
                <li>
                  <a href="https://x.com/Autopilot_fi" target="_blank" className="text-[#9159FF] hover:text-[#7c3aed] transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms of Service */}
            <div>
              <h4 className="font-medium mb-4">Terms of Service</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about#privacy-policy" className="text-[#9159FF] hover:text-[#7c3aed] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about#terms-of-service" className="text-[#9159FF] hover:text-[#7c3aed] transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/about#risk-disclosures" className="text-[#9159FF] hover:text-[#7c3aed] transition-colors">Risk Disclosures</Link>
                </li>
                <li>
                  <Link href="/about#security" className="text-[#9159FF] hover:text-[#7c3aed] transition-colors">Security & Risk</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-border pt-8">
            <div className="bg-muted/30 rounded-lg p-4 mb-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Important Disclaimer:</strong> Autopilot.Finance is not a financial advisor.
                All yield optimization strategies involve risk, and past performance does not guarantee future results.
                The automated allocation algorithms are provided as-is without warranty. Users should conduct their own
                research and consider their risk tolerance before depositing funds. Smart contract risks, protocol risks,
                and market volatility may result in loss of principal. By using this service, you acknowledge these risks
                and agree that Autopilot.Finance is not liable for any losses incurred.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <div>
                © 2025 Autopilot.Finance. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#cookies" className="text-[#9159FF] hover:text-[#7c3aed] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}