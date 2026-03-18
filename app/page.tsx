import Features from "./ui/landing-page/features";
import Footer from "./ui/landing-page/footer";
import Hero from "./ui/landing-page/hero";
import HowItWorks from "./ui/landing-page/how-it-works";
import Navbar from "./ui/landing-page/navbar";
import Pricing from "./ui/landing-page/pricing";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
