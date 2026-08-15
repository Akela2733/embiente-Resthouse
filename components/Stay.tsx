import Image from "next/image";
import { EyebrowReveal, TextRevealLines, FadeUp, FadeLeft, Stagger, StaggerItem, ImageReveal } from "@/components/ui/Animate";

const rooms = [
  {
    name: "Budget double room",
    details: "2 guests · king bed · garden view",
    image: "/stay/Budget Double Room.png",
    position: "object-[48%_center]",
  },
  {
    name: "Deluxe double room",
    details: "2 guests · king bed · pool view",
    image: "/stay/deuluxe Double Room.jpg",
    position: "object-[50%_58%]",
  },
  {
    name: "Family room",
    details: "4 guests · 2 bedrooms · garden view",
    image: "/stay/Budget Double Room.png",
    position: "object-[44%_center]",
  },
];

const experiences = [
  {
    name: "Beach walks",
    detail: "Just a few minutes away.",
    image: "/stay/beach.jpg",
  },
  {
    name: "Pool days",
    detail: "Swim, rest and cool down.",
    image: "/pool.png",
  },
  {
    name: "Delicious breakfast",
    detail: "Fresh, local and made with love.",
    image: "/stay/breakfast.png",
  },
  {
    name: "Peaceful corners",
    detail: "Find your own quiet spot.",
    image: "/stay/quiet.jpg",
  },
];

const Stay = () => {
  return (
    <section
      id="stay"
      className="bg-[#f4f0e8] px-5 py-12 text-stone-800 sm:px-12 sm:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <FadeLeft>
            <div className="max-w-xs">
              <EyebrowReveal>
                <p className="mb-4 sm:mb-7 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Stay / 03
                </p>
              </EyebrowReveal>
              <TextRevealLines
                lines={["Rooms that", "feel like home."]}
                tag="h2"
                className="font-serif italic text-3xl sm:text-5xl leading-[1.02] tracking-tight"
                delay={0.1}
              />
              <FadeUp delay={0.35}>
                <div className="my-7 h-px w-8 bg-stone-600" />
                <p className="text-sm leading-7 text-stone-600">
                  Comfortable, peaceful and surrounded by nature. Every room opens
                  into a slower, more restful stay.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] transition-opacity hover:opacity-60"
                >
                  View all rooms{" "}
                  <span aria-hidden="true" className="text-base">→</span>
                </a>
              </FadeUp>
            </div>
          </FadeLeft>

          <Stagger className="grid gap-5 sm:grid-cols-3 sm:gap-2 lg:gap-3">
            {rooms.map((room) => (
              <StaggerItem key={room.name}>
                <article>
                  <ImageReveal className="aspect-[1.35/1]">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 29vw"
                      className={`object-cover ${room.position}`}
                    />
                  </ImageReveal>
                  <h3 className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em]">
                    {room.name}
                  </h3>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500">
                    {room.details}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="grid gap-12 border-t border-stone-300 pt-14 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <FadeLeft>
            <div className="max-w-xs">
              <EyebrowReveal>
                <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Experience / 04
                </p>
              </EyebrowReveal>
              <TextRevealLines
                lines={["Simple pleasures.", "Every day."]}
                tag="h2"
                className="font-serif italic text-4xl leading-[1.02] tracking-tight sm:text-5xl"
                delay={0.1}
              />
              <FadeUp delay={0.35}>
                <div className="my-7 h-px w-8 bg-stone-600" />
                <p className="text-sm leading-7 text-stone-600">
                  From relaxed mornings to golden beach walks, life at Embiente is
                  beautifully slow.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] transition-opacity hover:opacity-60"
                >
                  See all experiences{" "}
                  <span aria-hidden="true" className="text-base">→</span>
                </a>
              </FadeUp>
            </div>
          </FadeLeft>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {experiences.map((experience) => (
              <StaggerItem key={experience.name}>
                <article>
                  <ImageReveal className="aspect-[1.08/1]">
                    <Image
                      src={experience.image}
                      alt={experience.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 21vw"
                      className="object-cover"
                    />
                  </ImageReveal>
                  <h3 className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em]">
                    {experience.name}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">{experience.detail}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Stay;
