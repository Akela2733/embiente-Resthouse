"use client";

import Image from "next/image";
import Link from "next/link";
import { EyebrowReveal, TextRevealLines, FadeUp, FadeLeft, Stagger, StaggerItem, ImageReveal } from "@/components/ui/Animate";

const details = [
  { label: "Location", value: "Eththukala, Negombo, Sri Lanka", icon: "pin" },
  {
    label: "Distance",
    value: "8 km from Bandaranaike International Airport",
    icon: "route",
  },
  { label: "Beach", value: "600 m · a 7 minute walk", icon: "beach" },
  { label: "City centre", value: "2 km · a 10 minute drive", icon: "city" },
];

const DetailIcon = ({ icon }: { icon: string }) => {
  const paths: Record<string, React.ReactNode> = {
    pin: (
      <>
        <path d="M12 21s6-6.2 6-11a6 6 0 1 0-12 0c0 4.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="7" r="2" />
        <path d="M7.7 15.8 16.3 8.2M9.5 7H6a2 2 0 0 0-2 2v1" />
      </>
    ),
    beach: (
      <>
        <path d="M3 17h18M5 13h14M12 13V5M8 8c2.2-3 5.8-3 8 0" />
        <path d="m12 5-2-2M12 5l2-2" />
      </>
    ),
    city: (
      <>
        <path d="M4 21V7l8-4 8 4v14M8 21v-5h8v5M8 10h.01M12 10h.01M16 10h.01" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-none stroke-current stroke-[1.4]"
    >
      {paths[icon]}
    </svg>
  );
};

const OurLocation = () => {
  return (
    <main className="bg-[#f4f0e8] text-stone-800">
      <section className="relative isolate min-h-[390px] overflow-hidden px-6 py-10 sm:px-16 md:min-h-[470px]">
        <Image
          src="/our location.png"
          alt="Negombo coastline at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
        <nav className="relative flex items-center justify-between text-white">
          <Link href="/" className="font-serif text-2xl tracking-[0.12em]">
            EMBIENTE
          </Link>
          <Link
            href="/"
            className="border border-white/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] transition-all hover:bg-white hover:text-stone-900"
          >
            Back home
          </Link>
        </nav>
        <div className="absolute bottom-12 left-6 sm:left-16">
          <EyebrowReveal>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-200">
              Find us in Negombo
            </p>
          </EyebrowReveal>
          <TextRevealLines
            lines={["Our location"]}
            tag="h1"
            className="font-serif italic text-5xl leading-none tracking-tight text-white sm:text-6xl"
            delay={0.1}
          />
          <FadeUp delay={0.25}>
            <p className="mt-3 text-sm text-stone-200">
              A peaceful escape in the heart of Negombo.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <FadeLeft className="max-w-xs">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">
                Find us
              </p>
              <h2 className="mt-5 font-serif italic text-4xl leading-[0.98]">
                A little oasis.
                <br />
                Perfectly placed.
              </h2>
              <div className="my-7 h-px w-8 bg-stone-600" />
              <p className="text-sm leading-7 text-stone-600">
                Embiente is located in Negombo, a charming coastal town on Sri
                Lanka&apos;s west coast — just minutes from the beach and close to
                local attractions.
              </p>
            </div>
          </FadeLeft>

          <FadeUp className="relative min-h-[300px] overflow-hidden bg-[#e9e4da]" delay={0.2}>
            <iframe
              title="Map showing Embiente Guest House in Negombo"
              src="https://www.google.com/maps?q=7.23702,79.8432&z=15&output=embed"
              className="absolute inset-0 h-full w-full grayscale opacity-45 contrast-75"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#ece7dc]/45" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 whitespace-nowrap text-[#29372d]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-8 w-8 fill-current"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.1 7 13 7 13s7-7.9 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              <span className="font-serif text-xl tracking-[0.12em]">
                EMBIENTE
              </span>
            </div>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
          <ImageReveal className="aspect-[0.95/1]">
            <Image
              src="/hero.png"
              alt="Embiente pool and tropical gardens"
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="object-cover"
            />
          </ImageReveal>

          <div>
            <div className="mb-7 flex items-center gap-4">
              <h2 className="font-serif text-3xl">Key information</h2>
              <span className="h-px w-10 bg-stone-400" />
            </div>
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {details.map((detail) => (
                <StaggerItem key={detail.label}>
                  <li className="flex gap-3 text-stone-600">
                    <DetailIcon icon={detail.icon} />
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-700">
                        {detail.label}
                      </h3>
                      <p className="mt-1 text-xs leading-5">{detail.value}</p>
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </Stagger>
            <a
              href="https://www.google.com/maps?q=7.23702,79.8432"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex border border-stone-300 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.13em] transition-all duration-300 hover:bg-stone-800 hover:text-white hover:shadow-md"
            >
              Get directions →
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative isolate overflow-hidden px-6 py-14 text-white sm:px-16 sm:py-16"
      >
        <Image
          src="/places.webp"
          alt="Embiente's peaceful tropical garden"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#173021]/85" />
        <FadeUp className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="font-serif italic text-4xl leading-none">Get in touch</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-stone-200">
              We&apos;d love to hear from you. Have a question or need help
              planning your stay? Reach out — we&apos;re here for you.
            </p>
            <a
              href="https://wa.me/94763741903"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex border border-white bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-stone-800 transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-lg"
            >
              Contact us →
            </a>
          </div>
          <address className="not-italic text-sm leading-7 text-stone-100">
            <p>+94 76 374 1903</p>
            <p>No. 8 Jude Lane, Eththukala</p>
            <p>Negombo, Sri Lanka</p>
          </address>
        </FadeUp>
      </section>
    </main>
  );
};

export default OurLocation;
