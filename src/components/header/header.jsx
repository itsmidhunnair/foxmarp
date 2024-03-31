"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@assets/icons/hamburger";
import logo from "@assets/images/header-logo.webp";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const navlinks = [
    {
      text: "Services",
      link: "#services",
      color: "bg-yellow-600",
    },
    {
      text: "Clients",
      link: "#clients",
      color: "bg-red-600",
    },
    {
      text: "Contact us",
      link: "#contact",
      color: "bg-blue-600",
    },
  ];

  return (
    <>
      <div className="fixed h-16 top-0 left-0 right-0 shadow-lg z-40 bg-white">
        <div className="container mx-auto h-full w-full flex items-center sm:px-12 px-6 justify-between">
          <div className="w-32">
            <Image
              src={logo}
              alt="card_img"
              className="w-auto h-full object-contain"
              priority
            />
          </div>
          <button
            onClick={() => setNavbar(!navbar)}
            className="sm:hidden w-12 h-12 stroke-black"
          >
            <Hamburger />
          </button>
          <div className="max-sm:hidden h-full flex gap-8 justify-between">
            {navlinks?.map((navlink) => (
              <Link
                href={navlink.link}
                key={navlink.link}
                className={`relative flex items-center px-2 font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 group`}
              >
                {navlink.text}
                <div
                  className={`inline-block absolute h-1 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 ${navlink.color}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden overflow-hidden z-30 fixed top-16 bg-white w-full flex flex-col gap-6 shadow-md ${
          navbar ? "h-36 py-4" : "h-0 py-0"
        }`}
      >
        {navlinks?.map((navlink) => (
          <Link
            href={navlink.link}
            key={navlink.link}
            className={`w-full px-2 text-center font-semibold text-neutral-700 hover:text-neutral-900`}
          >
            {navlink.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
