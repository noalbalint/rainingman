import { Button } from "../../../../components/ui/button";

export const EventVisionSection = (): JSX.Element => {
  return (
    <section className="self-stretch w-full bg-[#f7f1e8] px-6 pt-20 pb-12 sm:px-10 lg:min-h-[974px] lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1097px] flex-col items-center justify-center gap-16 lg:min-h-[780px]">
        <h2 id="what-were-building" className="m-0 text-center [font-family:'Fraunces',Helvetica] text-[40px] font-semibold leading-[1.1] tracking-[0] text-[#6b5a4f] sm:text-[48px] lg:text-[56px] lg:leading-[61.6px]">
          What We&apos;re Building
        </h2>
        <div className="flex w-full max-w-[1016px] flex-col gap-[66px]">
          <div className="flex flex-col gap-5">
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              As the popularity of Otherworld increased, tickets became harder to secure, and
              new associate events were requested to relieve the over-demand. Raining Man is our answer.
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              Under fir canopies and tent canopies, in gumboots and birthday suits, 
              we celebrate the arrival of spring with art, dance, song, connection, easter eggs, whimsy, and of course, <strong>fire.</strong>
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              We aspire to provide more and more people access to this rich cultural 
              experiment and continue to foster Vancouver Island's burner community.
            </p>
            <p className="m-0 [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              While we are not (yet) an official regional partner, we operate in
              good faith under the Burning Man ethos. Everybody is a
              participant, and nobody is a consumer.{" "}
              <strong className="font-bold">This is </strong>
              <strong className="font-bold italic">not</strong>
              <strong className="font-bold"> a festival.</strong>
            </p>
            <p className="m-0 w-full max-w-[1097px] [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              Be a founding member of Raining Man: Year Zero via our lovely volunteeripation forms ↓
            </p>
          </div>
        </div>
        <div>
          <Button
            type="button"
            className="h-auto min-h-[79px] w-full max-w-[503px] whitespace-normal rounded-md border border-[#2f241f] bg-[#d9a23a] px-8 py-[11px] [font-family:'DM_Sans',Helvetica] text-xl font-bold leading-normal text-[#2f241f] shadow-none hover:bg-[#d9a23a] focus-visible:ring-[#2f241f] lg:text-2xl"
          >
            <a target="_blank" href="https://burningman.org/about-us/10-principles/">THE 10 PRINCIPLES OF BURNING MAN</a>
          </Button>
          <div>
            <p className="m-0 pt-8 w-full max-w-[1097px] text-center [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              "Rain or shine, it <i>will</i> be divine!"
            </p>
            <p className="m-0 w-full max-w-[1097px] text-center [font-family:'DM_Sans',Helvetica] text-xl font-normal leading-[1.7] tracking-[0] text-[#6b5a4f] lg:text-2xl lg:leading-[40.8px]">
              - Santa Claus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
