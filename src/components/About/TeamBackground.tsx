import { Users } from "lucide-react";

export function TeamBackground() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 flex items-center">
          <Users className="w-5 h-5 mr-2 text-[#9159FF]" />
          Team Background
        </h2>

        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Autopilot Finance is developed by the team behind Harvest Finance,
            one of the longest-operating yield optimization projects in DeFi.
            The team has managed over $1B in cumulative TVL across multiple
            networks, with a proven record of security, uptime, and transparent
            communication.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Key Team Highlights
            </h3>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#9159FF] mr-3 mt-2 flex-shrink-0"></div>
                <span>
                  Over 4 years of continuous operation in DeFi yield farming and
                  optimization
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#9159FF] mr-3 mt-2 flex-shrink-0"></div>
                <span>
                  Successfully managed over $1 billion in cumulative Total Value
                  Locked (TVL)
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#9159FF] mr-3 mt-2 flex-shrink-0"></div>
                <span>
                  Maintained 100% uptime across all major protocol upgrades and
                  market events
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#9159FF] mr-3 mt-2 flex-shrink-0"></div>
                <span>
                  Established track record of transparent communication and
                  community engagement
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#9159FF] mr-3 mt-2 flex-shrink-0"></div>
                <span>
                  Deep expertise in smart contract security, yield optimization
                  algorithms, and protocol integration
                </span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50/30 rounded-xl p-6 border border-purple-100/50">
            <h4 className="font-medium text-gray-900 mb-3">
              Harvest Finance Legacy
            </h4>
            <p className="text-gray-700 leading-relaxed">
              The team&apos;s experience with Harvest Finance provides a solid
              foundation for Autopilot Finance. Having navigated multiple market
              cycles, protocol integrations, and scaling challenges, the team
              brings battle-tested expertise to the Morpho ecosystem
              optimization space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
