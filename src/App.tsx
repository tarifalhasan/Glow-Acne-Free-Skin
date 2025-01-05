import { Header } from "@/components/ui/header";
import { lazy, Suspense } from "react";
import Footer from "./components/ui/footer";
import { Loader } from "./components/ui/Loader";
import TopHeader from "./components/ui/top-header";

// Lazy load the components
const Hero = lazy(() => import("./components/pages/home/Hero"));
const Benefits = lazy(() => import("./components/pages/home/Benefits"));
const Tokenomics = lazy(() => import("./components/pages/home/Tokenomics"));
const Roadmap = lazy(() => import("./components/pages/home/Roadmap"));
const Faqs = lazy(() => import("./components/pages/home/Faqs"));

export default function Home() {
  return (
    <Suspense fallback={<Loader size={70} strokeWidth={2} duration={2} />}>
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
    </Suspense>
  );
}
