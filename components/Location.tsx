import Image from "next/image";

const nearby = [
  ["Negombo Beach", "600 m · 7 min walk"],
  ["Bandaranaike Airport", "8 km · 20 min drive"],
  ["Negombo Town", "2 km · 10 min drive"],
  ["Colombo", "40 km · 1 hr drive"],
];

const Location = () => {
  return (
    <section id="location" className="bg-[#f4f0e8] px-3 py-3 sm:px-5 sm:py-5">
      <div className="grid overflow-hidden border border-stone-300/60 text-stone-800 lg:grid-cols-[0.75fr_1.35fr_1.1fr]">
        <div className="px-8 py-12 sm:px-14 lg:px-12 lg:py-14 xl:px-16">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            Location / 05
          </p>
          <h2 className="font-serif text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Close to
            <br />
            everything.
            <br />
            Far from
            <br />
            the noise.
          </h2>
          <div className="my-7 h-px w-8 bg-stone-700" />
          <p className="max-w-xs text-sm leading-7 text-stone-600">
            Perfectly located in Eththukala, just steps from the beach and close
            to everything you need.
          </p>
          <ul className="mt-7 space-y-3">
            {nearby.map(([place, distance]) => (
              <li
                key={place}
                className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-500"
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                  {place}
                </span>
                <span className="shrink-0">{distance}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[330px] lg:min-h-full">
          <Image
            src="/stay/beach2.png"
            alt="Sunset at Negombo Beach near Embiente"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>

        <div className="relative min-h-[330px] overflow-hidden bg-[#e9e4da] lg:min-h-full">
          <iframe
            title="Map showing Embiente Guest House in Eththukala, Negombo"
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
              className="h-8 w-8 fill-current drop-shadow-sm"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.1 7 13 7 13s7-7.9 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            <span className="font-serif text-xl tracking-[0.12em]">
              EMBIENTE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
