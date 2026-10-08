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
      title: "Interested Party(goer)",
      description: [
        "General expression of interest in the Raining Man 2026 concept. If this sounds cool to you, register here to let us know 😎",
        "We will use this list to estimate attendance numbers, keep ourselves motivated, and share updates such as:",
        "• Venue and Date Confirmation",
        "• Community Callouts",
        "• Ticket Drops 🎟️",
      ],
      backgroundClass: "bg-[#924344]",
      actionLabel: "SUBSCRIBE FOR UPDATES",
      href: "https://tally.so/r/jaN52a",
      isAvailable: true,
      isMailingList: true,
    },
  ],
  [
    {
      title: "Producers",
      description: [
        "Do you have (or want) experience organizing events? Join BaseCamp.",
      ],
      backgroundClass: "bg-[#435892]",
      actionLabel: "JOIN PRODUCERS",
      href: "https://tally.so/r/ODvdK7",
      isAvailable: true,
    },
    {
      title: "Build Crew",
      description: [
        "The core pre-production crew that builds the festival site. No organizing required.",
      ],
      backgroundClass: "bg-[#2f4a24]",
      href: "https://tally.so/r/rj7GQl",
      actionLabel: "JOIN BUILDERS",
      isAvailable: true,
    },
  ],
  [
    {
      title: "Camps / Art",
      description: [
        "Theme Camps, Sound Camps, Art Projects, Mutant Vehicles, etc. We love it all.",
      ],
      backgroundClass: "bg-[#832019]",
      actionLabel: "OFFER ART",
      isAvailable: false,
    },
    {
      title: "Volunteers",
      description: [
        "Are you a human with brain, body, and limited planning capacity? Join BigCamp, and we'll find a spot for you.",
      ],
      backgroundClass: "bg-[#429792]",
      actionLabel: "JOIN VOLUNTEERS",
      isAvailable: false,
    },
  ],
];

export const CommunityParticipationSection = (): JSX.Element => {
  return (
    <section
      className="flex w-full flex-col gap-14 bg-[#f7f1e8] px-6 pb-16 sm:px-10 md:px-20 md:pb-[104px]"
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
                    <a href={item.href} target="_blank">
                      {item.actionLabel}
                    </a>
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
