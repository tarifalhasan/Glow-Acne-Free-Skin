import { Header } from "@/components/ui/header";
import { lazy, Suspense } from "react";
import Footer from "./components/ui/footer";
import TopHeader from "./components/ui/top-header";

// Lazy load the components
const Hero = lazy(() => import("./components/pages/home/Hero"));
const Benefits = lazy(() => import("./components/pages/home/Benefits"));
const Tokenomics = lazy(() => import("./components/pages/home/Tokenomics"));
const Roadmap = lazy(() => import("./components/pages/home/Roadmap"));
const Faqs = lazy(() => import("./components/pages/home/Faqs"));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-primary z-[9999]">
          <img src="/img/Spinner-5.gif" alt="Spinner-5.gif" />
        </div>
      }
    >
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
