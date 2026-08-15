"use client";

import Image from "next/image";
import Link from "next/link";
import { EyebrowReveal, TextRevealLines, FadeUp, FadeLeft, Stagger, StaggerItem, ImageReveal } from "@/components/ui/Animate";

const bookingUrl = "https://www.booking.com/hotel/lk/embiente-guest-house-dalupotha.en-gb.html";

const roomFacilities = [
  "Balcony", "Terrace", "Air conditioning", "Private bathroom", "Flat-screen TV", "Soundproofing",
  "Pool with a view", "Garden & pool views", "Patio", "Safety deposit box", "Mosquito net", "Outdoor furniture",
];

const rooms = [
  {
    name: "Budget Double Room",
    size: "24 m²",
    image: "/stay/Budget Double Room.png",
    alt: "Budget Double Room at Embiente Guest House",
    description: "A peaceful ground-floor room with a private terrace and calming garden views.",
    detail: "Guests will have a special experience in this air-conditioned double room, with a pool with a view, private bathroom and terrace overlooking the garden.",
    price: "LKR 7,069",
    breakfast: "Exceptional breakfast LKR 3,659",
    includedPrice: "LKR 10,179",
  },
  {
    name: "Deluxe Double Room",
    size: "25 m²",
    image: "/stay/deuluxe Double Room.jpg",
    alt: "Deluxe Double Room at Embiente Guest House",
    description: "A spacious double room designed for slow mornings and restful nights.",
    detail: "This air-conditioned double room includes a pool with a view, a private bathroom and a terrace with garden views.",
    price: "LKR 7,634",
    breakfast: "Exceptional breakfast LKR 3,659",
    includedPrice: "LKR 10,745",
  },
];

const RoomCard = ({ room }: { room: (typeof rooms)[number] }) => (
  <article className="border border-stone-300 bg-[#f8f5ed] p-3 sm:p-4 transition-all duration-300 hover:shadow-lg">
    <div className="grid gap-5 sm:grid-cols-[0.95fr_1fr] sm:items-center">
      <ImageReveal className="aspect-[1.42/1]">
        <Image src={room.image} alt={room.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition-transform duration-700 hover:scale-105" />
      </ImageReveal>
      <div className="py-1 sm:pr-2">
        <h2 className="font-serif text-2xl leading-none text-stone-800">{room.name}</h2>
        <p className="mt-3 text-[11px] leading-5 text-stone-600">{room.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[9px] font-bold uppercase tracking-[0.1em] text-stone-500">
          <span>{room.size}</span><span>1 extra-large double bed</span><span>Garden view</span>
        </div>
        <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex border border-stone-300 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.13em] transition-all duration-300 hover:bg-stone-800 hover:text-white hover:shadow-sm">Book this room →</a>
      </div>
    </div>

    <details className="mt-5 border-t border-stone-300 pt-4 group">
      <summary className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.14em] text-stone-700 hover:text-stone-900 transition-colors">Room details &amp; rates</summary>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-stone-600">{room.detail}</p>
      <div className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-700">Room facilities</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-stone-600 sm:grid-cols-3">
            {roomFacilities.map((facility) => <li key={facility} className="flex gap-2"><span className="text-stone-400">•</span>{facility}</li>)}
          </ul>
          <p className="mt-4 text-xs leading-5 text-stone-600">Private bathroom with bath, shower, toiletries, towels and hairdryer. Ground-floor, wheelchair-accessible accommodation. Non-smoking.</p>
        </div>
        <div className="space-y-3 border-l-0 border-stone-300 lg:border-l lg:pl-6">
          <div><p className="font-serif text-2xl text-stone-800">{room.price}</p><p className="mt-1 text-[10px] text-stone-500">Includes taxes and charges</p><p className="mt-2 text-xs text-stone-600">{room.breakfast}</p></div>
          <div className="border-t border-stone-300 pt-3"><p className="font-serif text-2xl text-stone-800">{room.includedPrice}</p><p className="mt-1 text-xs text-stone-600">Exceptional breakfast included</p></div>
          <p className="text-[10px] leading-5 text-stone-500">Free cancellation before 22 August 2026<br />No prepayment needed – pay at the property<br />No credit card needed</p>
        </div>
      </div>
    </details>
  </article>
);

const OurRoom = () => {
  return (
    <main className="bg-[#f4f0e8] text-stone-800">
      <section className="relative isolate min-h-[390px] overflow-hidden px-6 py-10 sm:px-16 md:min-h-[470px]">
        <Image src="/pool.png" alt="Pool and gardens at Embiente Guest House" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
        <nav className="relative flex items-center justify-between text-white">
          <Link href="/" className="font-serif text-2xl tracking-[0.12em]">EMBIENTE</Link>
          <Link href="/" className="border border-white/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] transition-all hover:bg-white hover:text-stone-900">Back home</Link>
        </nav>
        <div className="absolute bottom-12 left-6 sm:left-16">
          <EyebrowReveal>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-200">Stay with us</p>
          </EyebrowReveal>
          <TextRevealLines lines={["Our rooms"]} tag="h1" className="font-serif italic text-5xl leading-none tracking-tight text-white sm:text-6xl" delay={0.1} />
          <FadeUp delay={0.25}>
            <p className="mt-3 text-sm text-stone-200">Comfortable spaces. Thoughtfully designed.</p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_2.24fr] lg:gap-16">
          <FadeLeft className="max-w-xs">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">Stay with us</p>
              <h2 className="mt-5 font-serif italic text-4xl leading-[0.98]">A home away from home.</h2>
              <div className="my-7 h-px w-8 bg-stone-600" />
              <p className="text-sm leading-7 text-stone-600">Each room at Embiente is designed for relaxation, with natural textures, soft lighting and the comforts you need for a peaceful stay.</p>
            </div>
          </FadeLeft>
          <div>
            <div className="mb-6 flex items-center gap-4"><h2 className="font-serif text-3xl">Room types</h2><span className="h-px w-10 bg-stone-400" /></div>
            <Stagger className="space-y-4">
              {rooms.map((room) => (
                <StaggerItem key={room.name}>
                  <RoomCard room={room} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-14 text-white sm:px-16 sm:py-16">
        <Image src="/hero.png" alt="Embiente pool and tropical garden" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[#183022]/75" />
        <FadeUp className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div><p className="font-serif italic text-4xl leading-none">Ready for your stay?</p><p className="mt-3 text-sm text-stone-200">Your tropical home in Negombo is waiting.</p></div>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="border border-white bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-800 transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-lg">Book your stay →</a>
        </FadeUp>
      </section>
    </main>
  );
};

export default OurRoom;
