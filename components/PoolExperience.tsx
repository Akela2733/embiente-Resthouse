import Image from "next/image";

const PoolExperience = () => {
  return (
    <section className="bg-[#f4f0e8]  ">
      <div className="relative isolate min-h-[430px] overflow-hidden border py-1 border-stone-300/60 text-stone-100 sm:min-h-[500px] md:min-h-[530px]">
        <Image
          src="/pool.png"
          alt="The swimming pool at Embiente Guest House"
          fill
          sizes="(max-width: 640px) 100vw, 96vw"
          className="-z-20 object-cover object-[45%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,24,19,0.15)_0%,rgba(14,28,22,0.2)_38%,rgba(11,25,19,0.9)_67%,rgba(11,25,19,0.95)_100%)]" />

        <div className="relative flex min-h-[430px] items-end px-7 py-9 sm:min-h-[500px] sm:px-12 sm:py-12 md:min-h-[530px] md:items-center md:justify-end md:px-20">
          <div className="max-w-sm md:mr-20">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-300">
              Pool experience
            </p>
            <h2 className="font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.2rem]">
              Swim. Relax.
              <br />
              Repeat.
            </h2>
            <div className="my-6 h-px w-8 bg-stone-300/65" />
            <p className="max-w-xs text-sm leading-7 text-stone-200 sm:text-[15px]">
              Our pool is open all day. The perfect place for slow mornings and
              golden afternoons.
            </p>
          </div>

          <p className="absolute right-6 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[9px] font-semibold uppercase tracking-[0.22em] text-stone-300 md:block">
            The pool / all day
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoolExperience;
