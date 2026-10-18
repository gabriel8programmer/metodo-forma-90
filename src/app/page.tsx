import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Method } from "@/components/landing/Method";
import { WorkoutPreview } from "@/components/landing/WorkoutPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Audience } from "@/components/landing/Audience";
import { Benefits } from "@/components/landing/Benefits";
import { Coach } from "@/components/landing/Coach";
import { Progress } from "@/components/landing/Progress";
import { Testimonials } from "@/components/landing/Testimonials";
import { Plans } from "@/components/landing/Plans";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[#F5F5F5]">
      <Header />
      <main id="main-content">
        <Hero />
        <Problems />
        <Method />
        <WorkoutPreview />
        <HowItWorks />
        <Audience />
        <Benefits />
        <Coach />
        <Progress />
        <Testimonials />
        <Plans />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
