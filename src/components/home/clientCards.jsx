import Image from "next/image";

const ClientCards = ({ logo, alt }) => {
  return (
    <div className="snap-start max-sm:first:pl-8">
      <div className="w-48 border p-4 rounded-sm">
        <Image
          src={logo}
          alt={alt}
          className="w-auto h-full object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ClientCards;
