import { CommunityParticipationSection } from "./sections/CommunityParticipationSection/CommunityParticipationSection";
import { EventIntroductionSection } from "./sections/EventIntroductionSection/EventIntroductionSection";
import { EventVisionSection } from "./sections/EventVisionSection/EventVisionSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";

export const RainingmanHome = (): JSX.Element => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f7f1e8]">
      <EventIntroductionSection />
      <EventVisionSection />
      <CommunityParticipationSection />
      <SiteFooterSection />
    </main>
  );
};
