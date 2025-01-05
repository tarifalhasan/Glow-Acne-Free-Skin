import { Header } from "@/components/ui/header";
import { Benefits } from "./components/pages/home/Benefits";
import Faqs from "./components/pages/home/Faqs";
import Hero from "./components/pages/home/Hero";
import Roadmap from "./components/pages/home/Roadmap";
import Tokenomics from "./components/pages/home/Tokenomics";
import Footer from "./components/ui/footer";
import TopHeader from "./components/ui/top-header";
export default function Home() {
  return (
    <main className="relative">
      <TopHeader />
      <Header />

      <Hero />
      <Benefits />
      <Tokenomics />
      <Roadmap />
      <Faqs />
      <Footer />
    </main>
  );
}
