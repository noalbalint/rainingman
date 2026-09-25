import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

type ParticipationCard = {
  title: string;
  description: string[];
  backgroundClass: string;
  actionLabel: string;
  isAvailable: boolean;
  isMailingList?: boolean;
};

const participationRows: ParticipationCard[][] = [
  [
    {
      title: "Join the Mailing List",
      description: [
        "General expression of interest in the Rainingman concept and 2026 event.",
        "We will use this list to estimate attendance numbers when selecting a venue, and also to updates such as:",
        "• Venue Selected and Date Confirmed",
        "• Applications for Volunteers / Camps / Art Projects",
        "• Community Callouts / Requests For Support",
      ],
      backgroundClass: "bg-[#924344]",
      actionLabel: "SUBSCRIBE FOR UPDATES",
      isAvailable: true,
      isMailingList: true,
    },
  ],
  [
    {
      title: "Leads / Producers",
      description: [
        "Do you have (or want) experience organising events? We would love your help!",
      ],
      backgroundClass: "bg-[#435892]",
      actionLabel: "APPLY AS LEAD",
      isAvailable: true,
    },
    {
      title: "Volunteers",
      description: [
        "Are you a human with brain, body, and limited planning capacity? Join the Big Camp, and we will find a spot for you!",
      ],
      backgroundClass: "bg-[#427792]",
      actionLabel: "COMING SOON",
      isAvailable: false,
    },
  ],
  [
   
    {
      title: "Camps / Art",
      description: [
        "Theme Camps, Sound Camps, Art Projects, Mutant Vehicles, and more. Please note: grants may or may not be available for this Year Zero event.",
      ],
      backgroundClass: "bg-[#2f4a24]",
      actionLabel: "COMING SOON",
      isAvailable: false,
    },
    {
      title: "Not Listed / Do-ocracy",
      description: [
        "We're always learning! If something could be better, tell us how you'd like to fix it.",
      ],
      backgroundClass: "bg-[#439286]",
      actionLabel: "SEND A NOTE",
      isAvailable: true,
    },
  ],
];

export const CommunityParticipationSection = (): JSX.Element => {
  return (
    <section
      className="flex w-full flex-col gap-14 border-y border-[#4a2e24] bg-[#f7f1e8] px-6 py-16 sm:px-10 md:px-20 md:py-[104px]"
      aria-label="Community participation"
      id="get-involved"
    >
      {participationRows.map((row, rowIndex) => (
        <div
          key={`participation-row-${rowIndex}`}
          className={`grid w-full gap-6 lg:gap-8 ${
            row.length === 1
              ? "grid-cols-1"
              : row.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {row.map((item) => (
            <Card
              key={item.title}
              className={`flex min-h-[320px] flex-col rounded-xl border-[#4a2e24] text-[#f7f1e8] shadow-none ${item.backgroundClass} ${
                item.isMailingList ? "min-h-[420px]" : ""
              }`}
            >
              <CardHeader className="p-6 pb-0 md:p-8 md:pb-0">
                <CardTitle className="[font-family:'Fraunces',Helvetica] text-3xl font-semibold leading-tight tracking-[0] text-[#f7f1e8] md:text-5xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6 pt-4 md:p-8 md:pt-4">
                <div className="space-y-4 [font-family:'DM_Sans',Helvetica] text-base font-normal leading-[1.6] tracking-[0] text-[#f7f1e8] md:text-2xl">
                  {item.description.map((line, index) => (
                    <p
                      key={`${item.title}-description-${index}`}
                      className={
                        item.isMailingList && index > 1
                          ? "leading-[1.35]"
                          : undefined
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    type="button"
                    disabled={!item.isAvailable}
                    className={`mt-6 flex h-auto w-full items-center justify-center gap-2 rounded-md px-5 py-3 [font-family:'DM_Sans',Helvetica] text-[10px] font-bold leading-none text-[#2f241f] shadow-none hover:bg-[#d9a23a] md:text-sm ${
                      item.isAvailable
                        ? "border border-[#4a2e24] bg-[#d9a23a]"
                        : "bg-[#d9a23a7a] opacity-100 hover:bg-[#d9a23a7a]"
                    }`}
                  >
                    <span>{item.actionLabel}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
};
