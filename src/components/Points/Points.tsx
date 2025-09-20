import { Clock, Trophy } from "lucide-react";
import Image from "next/image";

export default function Points() {
  return (
    <section className="relative max-w-[1920px] mx-auto pt-32 pb-32 2xl:pt-42 2xl:pb-42 bg-grandient bg-fixed min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Points Status Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-12 max-w-7xl mx-auto">
          {/* Current Status Section */}
          <div className="mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#9159FF]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Current Status
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently, there&apos;s{" "}
                  <span className="font-semibold text-gray-900">
                    no official points program or token
                  </span>{" "}
                  for Autopilot Finance.
                </p>
              </div>
            </div>
          </div>

          {/* Future Considerations Section */}
          <div className="mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#9159FF]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Future Considerations
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If this ever changes, users will be{" "}
                  <span className="font-semibold text-gray-900">
                    retroactively rewarded
                  </span>{" "}
                  based on their historical usage and contributions to the
                  platform.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Automate Your Morpho Yield?
            </h3>
            <button
              //   onClick={onLaunchApp}
              className="inline-flex items-center px-8 py-4 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Launching soon
              <Image
                src={"/launchIcon.png"}
                width={17.5}
                height={17.5}
                alt="launch icon"
                className="ml-3 w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
