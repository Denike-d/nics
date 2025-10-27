import Image from "next/image";
import HeroSection from "@/components/landing/hero-section";
import GradientLayout from "@/components/landing/uikits/GradientLayout";
import Why from "@/components/landing/why";
import Documents from "@/components/landing/documents";
import Clearance from "@/components/landing/clearance";
import Verify from "@/components/landing/verify";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <HeroSection />
          <Why />
          <Documents />
          <Clearance />
          <Verify />
          <Footer />
        </section>
      </main>
    </div>
  );
}
