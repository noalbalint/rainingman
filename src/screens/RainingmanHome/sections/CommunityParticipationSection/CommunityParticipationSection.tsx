import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

type ParticipationAction = {
  label: string;
  href: string;
};

type ParticipationCard = {
  title: string;
  description: string[];
  backgroundClass: string;
  actionLabel: string;
  isAvailable: boolean;
  isMailingList?: boolean;
  // Only used by the mailing-list card: buttons shown in the right-hand column.
  actions?: ParticipationAction[];
};

const participationRows: ParticipationCard[][] = [
  [
    {
      title: "Interested Party(goer)",
      description: [
        "If this sounds cool to you, let us know! Sign up for email updates, or follow us on Instagram to stay connected and get updates about the project such as upcoming events, calls for camp and art submissions, ticket release dates, and more.",
      ],
      backgroundClass: "bg-[#924344]",
      href: "https://tally.so/r/jaN52a",
      isAvailable: true,
      isMailingList: true,
      actions: [
        { label: "EMAIL UPDATES", href: "https://tally.so/r/jaN52a" },
        // TODO: replace with the real label and link
        { label: "INSTAGRAM PAGE", href: "https://www.instagram.com/rainingman.ca" },
      ],
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
      // actionLabel: "OFFER ART",
      actionLabel: "COMING SOON",
      isAvailable: false,
    },
    {
      title: "Volunteers",
      description: [
        "Are you a human with brain, body, and limited planning capacity? Join BigCamp, and we'll find a spot for you.",
      ],
      backgroundClass: "bg-[#429792]",
      // actionLabel: "JOIN VOLUNTEERS",
      actionLabel: "COMING SOON",
      isAvailable: false,
    },
  ],
];

const buttonBaseClass =
  "flex h-auto w-full items-center justify-center gap-2 rounded-md px-5 py-3 [font-family:'DM_Sans',Helvetica] text-base font-bold leading-none text-[#2f241f] shadow-none hover:bg-[#d9a23a] md:text-xl";

const availableClass = "border border-[#4a2e24] bg-[#d9a23a]";
const unavailableClass = "bg-[#d9a23a7a] opacity-100 hover:bg-[#d9a23a7a]";

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
          className={`grid w-full gap-6 lg:gap-8 ${row.length === 1
              ? "grid-cols-1"
              : row.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
        >
          {row.map((item) => (
            <Card
              key={item.title}
              className={`flex flex-col rounded-xl border-[#4a2e24] text-[#f7f1e8] shadow-none ${item.backgroundClass} ${item.isMailingList ? "min-h-0" : "min-h-[320px]"
                }`}
            >
              <CardHeader className="p-6 pb-0 md:p-8 md:pb-0">
                <CardTitle className="[font-family:'Fraunces',Helvetica] text-3xl font-semibold leading-tight tracking-[0] text-[#f7f1e8] md:text-5xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent
                className={`flex flex-1 flex-col p-6 pt-4 md:p-8 md:pt-4 ${
                  // First card: text in the left half, buttons in the right half.
                  item.isMailingList
                    ? "md:grid md:grid-cols-2 md:items-start md:gap-12"
                    : ""
                  }`}
              >
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

                {item.isMailingList && item.actions ? (
                  <div className="mt-6 flex flex-col gap-4 md:mt-0">
                    {item.actions.map((action) => (
                      <Button
                        key={action.label}
                        type="button"
                        className={`${buttonBaseClass} ${availableClass}`}
                      >
                        <a href={action.href} target="_blank">
                          {action.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="mt-auto">
                    <Button
                      type="button"
                      disabled={!item.isAvailable}
                      className={`mt-6 ${buttonBaseClass} ${item.isAvailable ? availableClass : unavailableClass
                        }`}
                    >
                      <a href={item.href} target="_blank">
                        {item.actionLabel}
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
};