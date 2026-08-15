import Image from "next/image";
import Link from "next/link";
import { FadeLeft, FadeRight, EyebrowReveal, TextRevealLines, ImageReveal, FadeUp } from "@/components/ui/Animate";

const stats = [
  { value: "600m", label: "To Negombo Beach" },
  { value: "9.6", label: "Guest Rating" },
  { value: "24/7", label: "Peaceful Oasis" },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f4f0e8] px-5 py-16 text-stone-800 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      {/* Decorative subtle background watermark */}
      <span className="pointer-events-none absolute -right-10 top-10 select-none font-serif text-[10rem] sm:text-[14rem] font-bold leading-none text-stone-300/25 blur-[1px] hidden sm:block">
        01
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.1fr_1.25fr] lg:gap-24">

          {/* Left Column - Content */}
          <FadeLeft className="flex flex-col justify-center">
            <div>
              <EyebrowReveal>
                <div className="mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-stone-600" />
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.26em] text-stone-600">
                    Welcome to Embiente / 01
                  </p>
                </div>
              </EyebrowReveal>

              <TextRevealLines
                lines={["A quiet place", "to slow down."]}
                tag="h2"
                className="font-serif italic text-3xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-stone-900"
                delay={0.1}
              />

              <FadeUp delay={0.3}>
                <div className="my-6 sm:my-8 h-px w-12 bg-stone-800" />
                
                <p className="text-xs sm:text-sm leading-7 sm:leading-8 text-stone-700 sm:text-base max-w-lg">
                  Just a short walk from Negombo Beach, Embiente is a peaceful
                  tropical retreat where lush green gardens, refreshing pool days, and warm
                  Sri Lankan hospitality come together.
                </p>

                <p className="mt-3 text-xs leading-6 text-stone-600 max-w-lg">
                  Designed for travellers who appreciate quiet comfort, authentic local culture, and seamless relaxation away from the everyday rush.
                </p>
              </FadeUp>

              {/* Quick Stats Grid */}
              <FadeUp delay={0.45}>
                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-y border-stone-300/80 py-5 sm:py-6 max-w-lg">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <p className="font-serif italic text-xl sm:text-3xl font-medium text-stone-900">
                        {stat.value}
                      </p>
                      <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-stone-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Action Link */}
              <FadeUp delay={0.55}>
                <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                  <Link
                    href="/rooms"
                    className="group relative inline-flex items-center justify-center gap-3 border border-stone-800 bg-stone-900 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f4f0e8] transition-all duration-300 hover:bg-transparent hover:text-stone-900 hover:shadow-md text-center"
                  >
                    <span>Explore Our Rooms</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>

                  <a
                    href="#places"
                    className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-600 transition-colors hover:text-stone-900 underline underline-offset-4 text-center sm:text-left py-1"
                  >
                    View The Oasis
                  </a>
                </div>
              </FadeUp>
            </div>
          </FadeLeft>

          {/* Right Column - Asymmetric Multi-Image Composition */}
          <FadeRight delay={0.25}>
            <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:max-w-none">

              {/* Primary Main Image Frame */}
              <ImageReveal className="relative aspect-[4/5] w-[82%] shadow-2xl overflow-hidden border border-stone-300/40" delay={0.3}>
                <Image
                  src="/about1.jpg"
                  alt="Embiente guest house lush garden path"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </ImageReveal>

              {/* Secondary Overlapping Image Frame */}
              <ImageReveal
                className="absolute -bottom-8 -right-2 sm:-bottom-12 sm:-right-4 aspect-[4/3] w-[62%] border-8 border-[#f4f0e8] shadow-2xl overflow-hidden"
                delay={0.5}
              >
                <Image
                  src="/about2.jpg"
                  alt="Refreshing tropical swimming pool at Embiente"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </ImageReveal>



            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  );
};

export default About;
