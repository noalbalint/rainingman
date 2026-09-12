import { CalendarDaysIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../../../../components/ui/button";

const navigationItems = ["VISION", "PRINCIPLES", "JOIN"];

const eventDetails = [
  {
    icon: MapPinIcon,
    label: "Southern Vancouver Island",
  },
  {
    icon: CalendarDaysIcon,
    label: "Spring 2027",
  },
];

export const EventIntroductionSection = (): JSX.Element => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState<
    string | null
  >(null);

  return (
    <section
      aria-labelledby="event-introduction-title"
      className= "flex min-h-[760px] w-full flex-col justify-between px-6 pb-12 pt-8 sm:px-10 sm:pb-16 lg:px-20 lg:pb-20"
      style=
        {{
          backgroundImage:
            "linear-gradient(rgba(74,46,36,0.45), rgba(74,46,36,0.45)), url('/main_image.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
     >
      <header className="flex w-full items-center justify-between">
        <img
          className="h-[50px] w-[74px] object-cover"
          alt="Rainingman logo"
          src="logo.png"
        />
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-6">
            {navigationItems.map((item) => (
              <li key={item}>
                <Button
                  type="button"
                  variant="ghost"
                  aria-pressed={selectedNavigationItem === item}
                  onClick={() => setSelectedNavigationItem(item)}
                  className="h-auto rounded-none p-0 [font-family:'DM_Sans',Helvetica] text-sm font-semibold leading-normal text-[#fff7ea] hover:bg-transparent hover:text-[#fff7ea] focus-visible:ring-[#fff7ea]"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="flex w-full max-w-[952px] flex-col items-start gap-6">
        <h1
          id="event-introduction-title"
          className="[font-family:'Fraunces',Helvetica] text-6xl font-bold leading-[1.1] text-[#fff7ea] sm:text-7xl lg:text-8xl lg:leading-[86.4px]"
        >
          Rainingman
        </h1>
        <p className="[font-family:'DM_Sans',Helvetica] text-xl font-normal leading-8 text-neutral-100 sm:text-2xl sm:leading-9">
          A new not-for-profit community event for <br />
          Vancouver Island inspired by Burning Man <br />
          principles where we can <em>actually</em> burn.
        </p>
        <Button
          type="button"
          className="h-auto rounded-md border border-solid border-[#2f241f] bg-[#d9a23a] px-8 py-4 [font-family:'DM_Sans',Helvetica] text-base font-bold leading-normal text-[#2f241f] hover:bg-[#d9a23a]/90 focus-visible:ring-[#fff7ea]"
        >
          GET INVOLVED
        </Button>
      </div>
      <dl className="flex w-full flex-col items-start justify-center gap-2.5">
        {eventDetails.map(({ icon: Icon, label }) => (
          <div key={label} className="flex h-14 items-center gap-2">
            <dt className="sr-only">
              {label === "Spring 2027" ? "Date" : "Location"}
            </dt>
            <Icon
              aria-hidden="true"
              className="h-[30px] w-[30px] shrink-0 fill-[#d9a23a] text-[#d9a23a]"
              strokeWidth={1.5}
            />
            <dd className="[font-family:'DM_Sans',Helvetica] text-xl font-normal leading-normal text-white">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
