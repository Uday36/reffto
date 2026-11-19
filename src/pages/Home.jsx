
import Hero from "../sections/Home/Hero";
import PartnersSection from "../sections/Home/PartnerSection";
import LabSection from "../sections/Home/LabSection";
import WhyRefftoSection from "../sections/Home/WhyRefftoSection";
import OfferingsSection from "../sections/Home/OfferingsSection";
import LearningInActionSection from "../sections/Home/LearningInActionSection";
import ProjectsSection from "../sections/Home/ProjectsSection";
import ImpactSection from "../sections/Home/ImpactSection";
import ModernFAQ from "../sections/Home/ModernFAQ";
import CTASection from "../sections/Home/HomeCTASection";
import GalleryPreviewSection from "../sections/Home/GalleryPreviewSection.jsx";
import RefftoFooterAnimation from "../components/layout/RefftoFooterAnimation";

export default function Home() {
  return (
    <>
      <Hero />

      <PartnersSection />

      <LabSection />

      <WhyRefftoSection />

      <OfferingsSection />

      <LearningInActionSection />

      <ProjectsSection />

      <ImpactSection />

      <ModernFAQ />

      <CTASection />

      <GalleryPreviewSection />
       <RefftoFooterAnimation />
    </>
  );
}
