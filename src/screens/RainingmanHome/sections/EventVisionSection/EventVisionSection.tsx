import { Button } from "../../../../components/ui/button";

export const EventVisionSection = (): JSX.Element => {
  return (
    <section className="self-stretch w-full bg-[#f7f1e8] px-6 pt-20 pb-12 sm:px-10 lg:px-12 lg:pt-24 lg:pb-0">
      <div className="mx-auto flex w-full max-w-[1097px] flex-col items-center justify-center gap-16">
        <h2 id="what-were-building" className="m-0 text-center [font-family:'Fraunces',Helvetica] text-[40px] font-semibold leading-[1.1] tracking-[0] text-[#6b5a4f] sm:text-[48px] lg:text-[56px] lg:leading-[61.6px]">
          What We&apos;re Building
        </h2>
        <div className="flex w-full max-w-[1048px] flex-col gap-[66px]">
          <div className="flex flex-col gap-5">
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              Under fir canopies and tent canopies, in gumboots and birthday suits, 
              we celebrate the arrival of spring with art, dance, song, connection, easter eggs, whimsy, and of course, <strong>fire.</strong>
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              As the popularity of Otherworld increased, tickets became harder to find, and Kindle Arts
              requested new associate events to relieve the over-demand.
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl text-center font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              Raining Man is our answer.
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              We aspire to provide more people access to this rich cultural 
              experiment and to continue fostering Vancouver Island's vibrant burner community (the biggest in Kanata!).
            </p>
            <p className="m-0 w-full max-w-[1097px] [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              <strong>TOP TIP:</strong> March 26th - 29th is Easter Weekend of 2027. That means Friday and Monday are statutory holidays: no PTO needed 😎
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              While we are not (yet) an official regional partner, we operate in
              good faith under the Burning Man principles and ethos.{" "}
              <strong className="font-bold">This is </strong>
              <strong className="font-bold italic">not</strong>
              <strong className="font-bold"> a festival. {" "}</strong>
            </p>
            <p className="m-0 w-full max-w-[1097px] [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              A “festival” is a product: attendees buy it and consume it, and organizers profit from it. Here, <strong>ticket prices only cover production costs</strong>: nobody is making any money,
              from the executive producer all the way to the "vendor" who gifts you coffee and a breakfast wrap at 11am after 4 hours of sleep.
            </p>
            <p className="m-0 w-full max-w-[1097px] [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              Everybody is a participant, and nobody is a consumer. There are no sidelines. What will you bring? What is <em>your</em> gift?
            </p>
            <div>
              <p className="m-0 pt-4 w-full max-w-[1097px] text-center [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
                "Rain or shine, it <strong>will</strong> be divine."
              </p>
              <p className="m-0 w-full max-w-[1097px] text-center [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
                - Medusa
              </p>
            </div>
          </div>
        </div>
        <h2 id="what-were-building" className="m-0 pb-10 text-center [font-family:'Fraunces',Helvetica] text-[40px] font-semibold leading-[1.1] tracking-[0] text-[#6b5a4f] sm:text-[48px] lg:text-[56px] lg:leading-[61.6px]">
          Get Involved
        </h2>
        {/* <div>
          <Button
            type="button"
            className="h-auto min-h-[79px] w-full max-w-[503px] whitespace-normal rounded-md border border-[#2f241f] bg-[#d9a23a] px-8 py-[11px] [font-family:'DM_Sans',Helvetica] text-xl font-bold leading-normal text-[#2f241f] shadow-none hover:bg-[#d9a23a] focus-visible:ring-[#2f241f] lg:text-2xl"
          >
            <a target="_blank" href="https://burningman.org/about-us/10-principles/">THE 10 PRINCIPLES OF BURNING MAN</a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};
