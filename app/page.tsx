import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Intro from "@/components/intro";
import Partners from "@/components/partnerships";
import SectionDivider from "@/components/section-divider";
import Timeline from "@/components/timeline";

export default function Hackathon() {
  const images = [
    "/hackathon_center.jpg",
  ];
  return (

      <main className="flex flex-col items-center antialiased px-4 w-full">
        <Intro />
        <SectionDivider />
        <Partners/>
        <Timeline/>
        <FAQ/>
        <Contact />
      </main>

  );
}