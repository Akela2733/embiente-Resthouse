import Image from "next/image";
import { EyebrowReveal, TextRevealLines, FadeUp, Stagger, StaggerItem } from "@/components/ui/Animate";

type AmenityIcon = "pool" | "garden" | "loungers" | "quiet";

const amenities: { label: string; icon: AmenityIcon }[] = [
  { label: "Pool", icon: "pool" },
  { label: "Garden", icon: "garden" },
  { label: "Sun loungers", icon: "loungers" },
  { label: "Quiet corners", icon: "quiet" },
];

const AmenityIcon = ({ icon }: { icon: AmenityIcon }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.4,
  };

  const paths = {
    pool: (
      <>
        <path
          {...common}
          d="M3 9c2.2 0 2.2 1.5 4.4 1.5S9.6 9 11.8 9s2.2 1.5 4.4 1.5S18.4 9 20.6 9"
        />
        <path
          {...common}
          d="M3 14c2.2 0 2.2 1.5 4.4 1.5S9.6 14 11.8 14s2.2 1.5 4.4 1.5 2.2-1.5 4.4-1.5"
        />
        <path {...common} d="M5 4h14v3H5z" />
      </>
    ),
    garden: (
      <>
        <path {...common} d="M12 21V8" />
        <path
          {...common}
          d="M12 13c-4.2-.2-6.1-2.5-6.5-6.5 4.1.3 6.3 2.4 6.5 6.5Z"
        />
        <path
          {...common}
          d="M12 10c.2-4.2 2.5-6.1 6.5-6.5-.3 4.1-2.4 6.3-6.5 6.5Z"
        />
      </>
    ),
    loungers: (
      <>
        <path {...common} d="M3 18h18" />
        <path {...common} d="m6 17 2-8h6l4 8" />
        <path {...common} d="M9 9 7 5h7" />
        <path {...common} d="M18 17v3M6 17v3" />
      </>
    ),
    quiet: (
      <>
        <circle {...common} cx="12" cy="12" r="8.5" />
        <path {...common} d="M12 7v5l3.2 2" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
      {paths[icon]}
    </svg>
  );
};

const Places = () => {
  return (
    <section id="places" className="bg-[#f4f0e8] ">
      <div className="relative isolate min-h-[540px] overflow-hidden px-7 py-9 text-stone-100 sm:min-h-[590px] sm:px-14 sm:py-12 lg:min-h-[640px] lg:px-20 lg:py-14">
        <Image
          src="/places.png"
          alt="Swimming pool surrounded by tropical gardens at Embiente"
          fill
          sizes="(max-width: 640px) 100vw, 96vw"
          className="-z-20 object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,13,10,0.92)_0%,rgba(12,17,12,0.85)_60%,rgba(10,15,11,0.6)_100%)] sm:bg-[linear-gradient(90deg,rgba(9,13,10,0.88)_0%,rgba(12,17,12,0.67)_43%,rgba(10,15,11,0.16)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-black/10" />

        <div className="flex min-h-[470px] max-w-md flex-col justify-between sm:min-h-[510px]">
          <div>
            <EyebrowReveal>
              <p className="mb-4 sm:mb-6 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-300">
                The oasis / 02
              </p>
            </EyebrowReveal>

            <TextRevealLines
              lines={["Your own", "little piece of paradise."]}
              tag="h2"
              className="font-serif italic text-3xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight"
              delay={0.1}
            />

            <FadeUp delay={0.35}>
              <div className="my-7 h-px w-8 bg-stone-300/75" />
              <p className="max-w-xs text-sm leading-7 text-stone-200 sm:text-[15px]">
                Step through the gates and leave the energy of Negombo behind.
                Surrounded by greenery, the garden and pool create a peaceful
                place to swim, rest and simply do nothing.
              </p>
            </FadeUp>
          </div>

          <Stagger className="grid max-w-2xl grid-cols-2 gap-x-7 gap-y-5 pt-10 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-5">
            {amenities.map(({ label, icon }) => (
              <StaggerItem key={label}>
                <li className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-200">
                  <AmenityIcon icon={icon} />
                  <span>{label}</span>
                </li>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Places;
