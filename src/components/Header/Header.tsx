"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      <nav className="flex w-full justify-between max-w-7xl mx-auto h-20 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
        //   onClick={onNavigateHome}
          className="flex items-center justify-between hover:opacity-80 transition-opacity"
        >
            <Image src="/logo.svg" width={137} height={52} alt="Autopilot" className="h-8 w-auto"/>
        </button>

        <div className="hidden md:flex gap-5 font-bold text-white">
          <span>About</span>
          <span>Security</span>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            // onClick={onLaunchApp}
            className="inline-flex items-center px-6 py-2 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Launch App
            <Image src="/launchIcon.png" width={14} height={14} alt="Launch icon" className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur border-t border-purple-200/30">
            <button
              onClick={() => {
                // onNavigateToDocumentation();
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#9159FF] hover:bg-gray-50 w-full text-left transition-colors"
            >
              Docs
            </button>
            <div className="px-3 py-2">
              <button
                onClick={() => {
                //   onLaunchApp();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-medium rounded-lg transition-all duration-300"
              >
                Launch App
                {/* <img src={launchIcon} alt="" className="ml-2 w-4 h-4" /> */}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}