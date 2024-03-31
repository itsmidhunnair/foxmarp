import Image from "next/image";
import heroImg from "@assets/images/homepage/hero-img.webp";

const HeroSection = () => {
  const circleLinks = [
    { text: "Service", link: "/service", color: "bg-yellow-500" },
    { text: "Clients", link: "/clients", color: "bg-red-500" },
    { text: "Contact", link: "/contact", color: "bg-blue-500" },
  ];

  return (
    <div className="flex w-full h-full max-md:flex-col">
      <div className="flex-1">
        <Image src={heroImg} alt="hero_img" className="w-full" priority />
      </div>
      <div className="md:p-16 flex-1 max-md:text-center font-bold text-neutral-700">
        <h2 className="text-7xl pb-6">Hello</h2>
        <h4 className="capitalize tracking-wide font-bold text-xl text-neutral-500">
          We&apos;re repainting things around here to greet you again in better
          spirits. We&apos;ll be back soon!
        </h4>
        <p className="font-light pt-2 leading-relaxed md:w-2/3 text-neutral-400">
          However, brand magicians are never off-duty! Till we&apos;re back
          here, you can contact us on:
        </p>
        <div className="flex gap-4 mt-8 justify-between">
          {circleLinks.map((link) => (
            <div
              key={link.link}
              className={` w-full h-full max-w-52 max-h-52 aspect-square flex justify-center items-center rounded-full border border-black ${link.color}`}
            >
              {link.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;