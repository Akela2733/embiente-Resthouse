const CalendarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-stone-300">
    <rect x="4" y="5" width="16" height="15" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 3v4M16 3v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Availability = () => {
  return (
    <section id="book" className="bg-[#f4f0e8] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="bg-[#1d3025] px-8 py-10 text-stone-100 sm:px-14 lg:grid lg:grid-cols-[1.35fr_1fr_1fr_1fr_auto] lg:items-center lg:gap-9 lg:px-16 lg:py-8">
        <div className="mb-8 max-w-40 lg:mb-0">
          <h2 className="font-serif text-3xl leading-[0.88] tracking-tight sm:text-4xl">
            Your stay
            <br />
            awaits.
          </h2>
          <p className="mt-4 text-[11px] leading-4 text-stone-300">
            We can&apos;t wait to welcome you to your tropical home in Negombo.
          </p>
        </div>

        <label className="mb-6 block border-b border-stone-400/35 pb-3 lg:mb-0">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Check-in</span>
          <span className="flex items-center justify-between gap-3">
            <input aria-label="Check-in date" type="date" defaultValue="2026-05-24" className="min-w-0 flex-1 bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-stone-100 outline-none [color-scheme:dark]" />
            <CalendarIcon />
          </span>
        </label>

        <label className="mb-6 block border-b border-stone-400/35 pb-3 lg:mb-0">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Check-out</span>
          <span className="flex items-center justify-between gap-3">
            <input aria-label="Check-out date" type="date" defaultValue="2026-05-27" className="min-w-0 flex-1 bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-stone-100 outline-none [color-scheme:dark]" />
            <CalendarIcon />
          </span>
        </label>

        <label className="mb-8 block border-b border-stone-400/35 pb-3 lg:mb-0">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Guests</span>
          <select aria-label="Guests" defaultValue="2" className="w-full bg-transparent text-[11px] font-bold uppercase tracking-[0.1em] text-stone-100 outline-none">
            <option value="1" className="text-stone-900">1 guest</option>
            <option value="2" className="text-stone-900">2 guests</option>
            <option value="3" className="text-stone-900">3 guests</option>
            <option value="4" className="text-stone-900">4 guests</option>
          </select>
        </label>

        <a href="#contact" className="block w-full border border-stone-300 bg-[#f4f0e8] px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-stone-800 transition-colors hover:bg-white lg:min-w-48">
          Check availability
        </a>
      </div>
    </section>
  );
};

export default Availability;
