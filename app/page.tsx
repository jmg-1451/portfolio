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
import Image from "next/image";
import StickyHeroButton from "@/components/sticky-hero-button";
import { SocialLinks } from "@/components/ui/social-links";



export default function Home() {
  const timelineData = [
    {
      title: "Jan 27, 2026",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
            Started this project
          </p>
          <Image 
            src="/images/start-image-1.png" 
            alt="Start image" 
            width={700} 
            height={500} 
            className="rounded-lg"
          />
          
        </div>
      ),
    },
    {
      title: "Feb 10, 2026",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
            Fixed body content to display timeline of changes applied to this project
          </p>
          <Image
            src="/images/start-image-2.png"
            alt="Start image 2"
            width={700}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Feb 24, 2026",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
            Added external links to my Facebook and GitHub page
          </p>
          <Image
            src="/images/social-links.png"
            alt="Social Links"
            width={700}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];

  const socials = [
    {
    name: "Facebook",
    image: "/images/facebook-icon-1.png",
    link: "https://www.facebook.com/jm.gososo123/"
  },
  {
    name: "Github",
    image: "/images/Github-Logo-PNG.png",
    link: "https://github.com/jmg-1451"
  },
  ];

  return (
  
    <div> 
      {/* <HeroSection /> */}
<TextReveal/>
<Timeline data={timelineData}/>
       
      
      {/* <Features /> */}
      {/* <IntegrationsSection />
      <StatsSection />
      {/* <TeamSection /> */}
      {/* <FAQsFour /> */}
      {/*FooterSection//*> */}
      <StickyHeroButton />
      <SocialLinks socials={socials} />
    </div>
  );
}
