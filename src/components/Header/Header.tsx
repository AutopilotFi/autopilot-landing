"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
// import autopilotLogo from "figma:asset/a533f6cd7fc231dd6479e232ccdb87f508ca1518.png";
// import launchIcon from "figma:asset/a64b09b987af046ac18554166c814e5f1a34259f.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex h-20 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
        //   onClick={onNavigateHome}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
            <Image src="/logo.png" width={137} height={52} alt="Autopilot" className="h-8 w-auto"/>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ml-8">
          {/* Temporarily hidden
          <button
            onClick={onNavigateToDocumentation}
            className="text-sm hover:text-[#9159FF] transition-colors"
          >
            Docs
          </button>
          */}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

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
      </div>

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