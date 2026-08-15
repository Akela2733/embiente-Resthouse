const About = () => {
  return (
    <section className="bg-[#f4f0e8] px-6 py-20 text-stone-800 sm:px-16 lg:min-h-screen lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.35fr] lg:gap-20">
        <div className="max-w-sm">
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            Welcome to Embiente / 01
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            A quiet place
            <br />
            to slow down.
          </h2>
          <div className="my-7 h-px w-8 bg-stone-700" />
          <p className="max-w-xs text-sm leading-7 text-stone-600">
            Just a short walk from Negombo Beach, Embiente is a peaceful
            tropical retreat where lush gardens, refreshing pool days, and warm
            Sri Lankan hospitality come together.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-3xl pb-10 pr-0 sm:pb-16 sm:pr-24">
          <img src="/about1.jpg" className="aspect-[4/5] w-[72%]" />
          <img
            src="/about2.jpg"
            className="absolute bottom-0 right-0 aspect-[4/3] w-[58%] border-4 border-[#f4f0e8]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
