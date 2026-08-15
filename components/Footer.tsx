import Link from "next/link";

const bookingUrl = "https://www.booking.com/hotel/lk/embiente-guest-house-dalupotha.en-gb.html?aid=356938&label=metagha-link-LULK-hotel-1635859_dev-desktop_los-1_bw-8_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-21411118307_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260823_ppt-G_lp-2144_r-16952218368638342802&sid=657a061772fa5f9d536898263d69fb3c&checkin=2026-08-23&checkout=2026-08-24&dest_id=1635859&dest_type=hotel&dist=0&do_availability_check=1&group_adults=1&group_children=0&hp_avform=1&hp_group_set=0&no_rooms=1&origin=hp&sb_price_type=total&src=hotel&type=total";

const SocialIcon = ({ type }: { type: "booking" | "whatsapp" | "map" | "phone" }) => {
  const paths = {
    booking: <><path d="M5 4h10a4 4 0 0 1 0 8H5z" /><path d="M5 12h11a4 4 0 0 1 0 8H5z" /><path d="M8 7h.01M8 15h.01" /></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.6-4A8 8 0 1 1 20 11.5Z" /><path d="M9.3 8.2c.3-.7.6-.7.9-.7h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.7 2.3 2.2l.6-.5c.2-.2.5-.2.7-.1l1.8.8c.3.1.4.3.4.5v.5c0 .4-.2.7-.7.9-.7.3-1.6.1-2.6-.4-1.1-.5-2.1-1.4-2.9-2.3-.8-1-1.6-2.2-2-3.2-.4-1-.5-1.8-.2-2.5Z" /></>,
    map: <><path d="M12 21s6-6.2 6-11a6 6 0 1 0-12 0c0 4.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    phone: <path d="M7.1 3.9 9 7.5l-1.7 1.7c1 2.1 2.7 3.8 4.8 4.8l1.7-1.7 3.6 1.9c.4.2.6.7.4 1.1l-.8 2c-.2.5-.7.8-1.2.7C9.7 17.1 6.9 14.3 6 8.2c-.1-.5.2-1 .7-1.2l2-.8c.4-.2.9 0 1.1.4Z" />,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">{paths[type]}</svg>;
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#f4f0e8] px-5 pb-8 pt-12 text-stone-700 sm:px-12 sm:pb-8 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-stone-300 pt-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.85fr_0.85fr_0.85fr] lg:gap-16">
        <div>
          <a href="/" className="font-serif text-3xl tracking-[0.13em] text-stone-800">EMBIENTE</a>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Guest house · Negombo</p>
          <address className="mt-6 not-italic text-[11px] leading-5 text-stone-500">
            No. 8 Jude Lane, Eththukala,<br />
            Negombo, Sri Lanka.
          </address>
          <div className="mt-6 flex items-center gap-4 text-stone-600">
            <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Book Embiente on Booking.com" className="transition-opacity hover:opacity-55"><SocialIcon type="booking" /></a>
            <a href="https://wa.me/94763741903" target="_blank" rel="noreferrer" aria-label="Message Embiente on WhatsApp" className="transition-opacity hover:opacity-55"><SocialIcon type="whatsapp" /></a>
            <a href="https://www.google.com/maps?q=7.23702,79.8432" target="_blank" rel="noreferrer" aria-label="View Embiente on Google Maps" className="transition-opacity hover:opacity-55"><SocialIcon type="map" /></a>
            <a href="tel:+94763741903" aria-label="Call Embiente" className="transition-opacity hover:opacity-55"><SocialIcon type="phone" /></a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Navigation</h2>
          <ul className="space-y-3 text-[11px]">
            <li><a href="#stay" className="transition-opacity hover:opacity-55">Stay</a></li>
            <li><a href="#places" className="transition-opacity hover:opacity-55">Experience</a></li>
            <li><a href="#places" className="transition-opacity hover:opacity-55">The garden</a></li>
            <li><Link href="/gallery" className="transition-opacity hover:opacity-55">Gallery</Link></li>
            <li><a href="#location" className="transition-opacity hover:opacity-55">Location</a></li>
          </ul>
        </nav>

        <nav aria-label="Guest information">
          <h2 className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Guest info</h2>
          <ul className="space-y-3 text-[11px]">
            <li><a href="#book" className="transition-opacity hover:opacity-55">Check-in &amp; out</a></li>
            <li><a href="#location" className="transition-opacity hover:opacity-55">How to reach us</a></li>
            <li><a href="tel:+94763741903" className="transition-opacity hover:opacity-55">Call us</a></li>
            <li><a href="#contact" className="transition-opacity hover:opacity-55">Contact</a></li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Stay in touch</h2>
          <p className="max-w-[14rem] text-[11px] leading-5 text-stone-500">Join our newsletter for offers and real relaxation.</p>
          <form className="mt-4 flex border border-stone-400/70">
            <label className="sr-only" htmlFor="footer-email">Your email address</label>
            <input id="footer-email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[10px] outline-none placeholder:text-stone-500" />
            <button type="submit" aria-label="Subscribe to newsletter" className="px-3 text-base transition-opacity hover:opacity-55">→</button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-stone-300 pt-5 text-[9px] text-stone-500">© 2026 Embiente Guest House. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
