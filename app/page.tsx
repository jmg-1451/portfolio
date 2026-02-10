import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-1";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import TextReveal from "@/components/text-reveal";
import { Timeline } from "@/components/ui/timeline";
import { Stats } from "fs";
import * as React from "react";



export default function Home() {
  return (
  
    <div> 
      {/* <HeroSection /> */}
<TextReveal/>
<Timeline data={[]}/>
       
      
      {/* <Features /> */}
      {/* <IntegrationsSection />
      <StatsSection />
      {/* <TeamSection /> */}
      {/* <FAQsFour />
      <FooterSection />  */}
    </div>
  );
}
