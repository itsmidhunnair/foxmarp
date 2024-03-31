import Link from "next/link";
import Image from "next/image";
import ContactInformationHelp from "@assets/icons/contactInformationHelp-icon";

const ServiceCard = ({
  primaryColorText = "text-neutral-600",
  primaryColorBg = "bg-neutral-600",
  bgColor = "bg-neutral-200",
  title = "Brand Message Design",
  subTitle = "Crafting Compelling Brand Narratives.",
  learnMoreLink = "/learn-more",
  img = "",
}) => {
  const primary = { bg: primaryColorBg, text: primaryColorText };
  return (
    <div
      className={`w-full h-80 flex p-12 ${bgColor} max-sm:flex-col-reverse max-sm:h-auto max-sm:p-6`}
    >
      <div className="sm:w-2/3 flex flex-col justify-between">
        <div className="max-sm:mt-4">
          <h4
            className={`text-3xl capitalize font-bold ${primary.text} w-full sm:w-1/2`}
          >
            {title}
          </h4>
          <p className={`font-light pt-3 ${primary.text}`}>{subTitle}</p>
        </div>
        <div className="flex gap-x-6 items-center max-md:flex-col max-md:items-start">
          <Link
            href={learnMoreLink}
            className={`elative inline-block w-max group p-3 max-md:pl-0 ${primary.text}`}
          >
            Learn More
            <div
              className={`w-0 group-hover:w-full transition-all duration-300 max-md:w-full h-0.5 ${primary.bg}`}
            />
          </Link>
          <Link
            href={"/contact-us"}
            className={`${primary.bg} p-3 py-2 flex items-center gap-2 overflow-hidden group text-white`}
          >
            <span className="w-6 h-6 inline-block -translate-x-10 group-hover:translate-x-0 max-md:translate-x-0 transition-all duration-300 fill-white stroke-white">
              <ContactInformationHelp />
            </span>
            Inquire Now
          </Link>
        </div>
      </div>
      <div className="w-1/3 flex justify-end min-w-36 max-sm:mx-auto">
        <Image
          src={img}
          alt="card_img"
          className="w-auto h-full object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ServiceCard;
