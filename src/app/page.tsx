import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <HeroSection/>
        {/* <AppPreview/> */}
      </main>
      <Footer/>
    </div>
  );
}
