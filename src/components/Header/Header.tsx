"use client"
import Link from "next/link";
import clsx from "clsx";
import { Menu, X, TrendingUp, BarChart3, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";

export default function Header({whiteTheme} : {
  whiteTheme?: boolean
}) {
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
  const pathName = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuExpanded) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      // Prevent scroll on the root element as well for better compatibility
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore scrolling
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    // Cleanup function to ensure scrolling is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMobileMenuExpanded]);

  const toggleMobileMenu = () => {
    setIsMobileMenuExpanded(!isMobileMenuExpanded);
  };

  const closeMobileMenu = () => {
     setIsMobileMenuExpanded(false);
  }

  useEffect(() => {
    closeMobileMenu();
  }, [pathName]);

  return (
    <header className={clsx(whiteTheme ? "fixed bg-white/95 border-b border-gray-100" : "absolute", "top-0 z-50 w-full")}>
      <div className="max-w-7xl mx-auto flex h-20 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image width={134} height={28} src={whiteTheme ? `/black-logo.svg` : `/logo.svg`} alt="Autopilot" className="h-8 w-auto" />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Navigation - Centered */}
        {
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href={"/about?section=about"}
              className={clsx((whiteTheme ? "text-black" : "text-white"), "nav-badge-pill group")}
            >
              <TrendingUp className="nav-badge-icon" />
              Benefits
            </Link>
            <Link
              href={"/about?section=benchmark"}
              className={clsx((whiteTheme ? "text-black" : "text-white"), "nav-badge-pill group")}
            >
              <BarChart3 className="nav-badge-icon" />
              Benchmark
            </Link>
          </nav>
        }

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-2 bg-[#9159FF] hover:bg-[#7c3aed] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Launch App
            <Image width={14} height={14} src={"/launchIcon.png"} alt="launch icon" className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-200 border border-purple-200"
        >
          <span className="text-sm font-medium text-purple-700">Menu</span>
          {isMobileMenuExpanded ? (
            <X className="w-4 h-4 text-purple-700" />
          ) : (
            <Menu className="w-4 h-4 text-purple-700" />
          ) }
        </button>
      </div>

      {/* Mobile Navigation - Expanding Menu */}
      {isMobileMenuExpanded && (
        <div
          className="md:hidden fixed inset-0 top-20 bg-gradient-to-br from-purple-50/95 via-white/95 to-blue-50/95 backdrop-blur-md z-40 animate-slideUpMobile"
          onClick={() => setIsMobileMenuExpanded(false)}
        >
          <div className="bg-white border-t border-purple-200 p-6 space-y-6" onClick={(e) => e.stopPropagation()}>

            {/* Main Navigation Links */}
            <div className="space-y-3">
              <Link
                href="/about?section=about"
                onClick={closeMobileMenu}
                className="flex items-center p-4 rounded-xl transition-all duration-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-200 hover:text-[#9159FF] w-full group"
              >
                <TrendingUp className="w-5 h-5 mr-3 group-hover:text-[#9159FF] transition-colors" />
                <span className="font-medium">Benefits</span>
              </Link>

              <Link
                href="/about?section=benchmark"
                onClick={closeMobileMenu}
                className="flex items-center p-4 rounded-xl transition-all duration-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-200 hover:text-[#9159FF] w-full group"
              >
                <BarChart3 className="w-5 h-5 mr-3 group-hover:text-[#9159FF] transition-colors" />
                <span className="font-medium">Benchmark</span>
              </Link>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-purple-200/50 space-y-3">
              <button
                onClick={() => {
                  // Demo functionality placeholder
                  setIsMobileMenuExpanded(false);
                }}
                className="flex items-center justify-center w-full p-4 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-700 transition-all duration-200 font-medium border border-purple-300"
              >
                <Zap className="w-5 h-5 mr-3" />
                <span>Open Demo</span>
              </button>

              <button
                disabled
                className="flex items-center justify-center w-full p-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 cursor-not-allowed font-medium border border-gray-300 relative"
              >
                <Image width={17.5} height={17.5} src={"/black-logo.svg"} alt="" className="w-5 h-5 mr-3 opacity-60" />
                <span style={{ color: '#575757' }}>Launch App</span>
                <div className="ml-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                  Soon
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}