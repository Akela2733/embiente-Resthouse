import React from "react";
import Button from "@/components/ui/Button";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 items-center w-full">
      {/* Left */}
      <div>
        <h2 className="text-3xl text-white font-bold">Embiente</h2>
        <h1 className="text-[18px] text-white">Guest House - Negombo</h1>
      </div>

      {/* Center */}
      <div className="flex items-center justify-center gap-8 text-white font-bold">
        <div>Home</div>
        <div>Stay</div>
        <div>Experience</div>
        <div>Gallery</div>
        <div>Location</div>
      </div>

      {/* Right */}
      <div className="flex justify-end">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
