import { Github, Twitter, BookOpen, FileText } from "lucide-react";
import Image from "next/image";

const DiscordIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-background max-w-[1920px] mx-auto border-r border-l border-[#9159FF26]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Image src="/black-logo.svg" width={172} height={35} alt="Autopilot" className="h-10 w-auto" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 max-w-xs">
                Supply once, done.
              </p>
              <div className="flex space-x-3">
                <a href="#twitter" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-green-600" />
                </a>
                <a href="#discord" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <DiscordIcon />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    // onClick={onLaunchApp}
                    className="hover:text-foreground transition-colors text-left text-[#9159FF]"
                  >
                    Demo Account
                  </button>
                </li>
                <li>
                  <button
                    // onClick={onLaunchApp}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    USDC Autopilot
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground text-[#9159FF]">
                <li>
                  <a href="#docs" className="hover:text-foreground transition-colors flex items-center">
                    About
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-foreground transition-colors">Support</a>
                </li>
              </ul>
            </div>

            {/* Autopilot */}
            <div>
              <h4 className="font-medium mb-4">Terms of Use</h4>
              <ul className="space-y-2 text-sm text-muted-foreground text-[#9159FF]">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-foreground transition-colors flex items-center">
                    Risk Disclosure
                  </a>
                </li>
                <li>
                  <a href="#privacy-policy" className="hover:text-foreground transition-colors flex items-center">
                    Privacy Policy
                  </a>
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
                © 2025 Autopilot.Finance
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#cookies" className="hover:text-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}