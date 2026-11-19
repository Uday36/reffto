import LabSetupHero from "../sections/LabSetup/LabSetupHero";
import LabIncludesSection from "../sections/LabSetup/LabIncludesSection";
import LabSetupJourneySection from "../sections/LabSetup/LabSetupJourneySection";
import InstitutionBenefitsSection from "../sections/LabSetup/InstitutionBenefitsSection";
import LabEnquiryFormSection from "../sections/LabSetup/LabEnquiryFormSection";
import LabSetupCTASection from "../sections/LabSetup/LabSetupCTASection";

export default function LabSetupPage() {
  return (
    <main>
      <LabSetupHero />
      <LabIncludesSection />
      <LabSetupJourneySection />
      <InstitutionBenefitsSection />
      <LabEnquiryFormSection />
      <LabSetupCTASection />
    </main>
  );
}