const footerMessages = [
  "Rainingman 2027 · Built with love, rain, and radical participation.",
  "Organised by Village Builders NRG",
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#4a2e24] bg-[#4a2e24] px-20 py-16 text-[#f7f1e8]">
      <div className="flex w-full items-center justify-between gap-10">
        {footerMessages.map((message) => (
          <p
            key={message}
            className="[font-family:'DM_Sans',Helvetica] text-[13px] font-normal leading-[normal] tracking-[0]"
          >
            {message}
          </p>
        ))}
      </div>
    </footer>
  );
};
