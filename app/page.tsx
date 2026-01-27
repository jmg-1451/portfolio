import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-1";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import { SparklesCore } from "@/components/ui/sparkles";
import { Stats } from "fs";

export default function Home() {
  return (
  
    <div> 
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <TeamSection />
      <FAQsFour />
      <FooterSection /> 
    </div>
  );
}
