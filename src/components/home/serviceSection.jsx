import brandMessage from "@assets/images/homepage/services/brand-message-design.webp";
import smMarketing from "@assets/images/homepage/services/sm-marketing.webp";
import googleAds from "@assets/images/homepage/services/google-ads.webp";
import seo from "@assets/images/homepage/services/seo.webp";
import branding from "@assets/images/homepage/services/branding.webp";
import graphics from "@assets/images/homepage/services/graphics.webp";
import printing from "@assets/images/homepage/services/printing.webp";

import ServiceCard from "./serviceCard";

const ServiceSection = () => {
  const serviceList = [
    {
      id: "service-1",
      primaryColorText: "text-neutral-600",
      primaryColorBg: "bg-neutral-600",
      bgColor: "bg-neutral-200",
      title: "Brand Message Design",
      subTitle: "Crafting Compelling Brand Narratives.",
      learnMoreLink: "/learn-more",
      img: brandMessage,
    },
    {
      id: "service-2",
      primaryColorText: "text-yellow-600",
      primaryColorBg: "bg-yellow-600",
      bgColor: "bg-yellow-200",
      title: "Social Media Marketing",
      subTitle: "Building Digital Community Engagement.",
      learnMoreLink: "/learn-more",
      img: smMarketing,
    },
    {
      id: "service-3",
      primaryColorText: "text-blue-600",
      primaryColorBg: "bg-blue-600",
      bgColor: "bg-blue-200",
      title: "Google Ads",
      subTitle: "Maximizing Online Advertising ROI.",
      learnMoreLink: "/learn-more",
      img: googleAds,
    },
    {
      id: "service-4",
      primaryColorText: "text-orange-600",
      primaryColorBg: "bg-orange-600",
      bgColor: "bg-orange-200",
      title: "SEO",
      subTitle: "Enhancing Online Visibility and Ranking.",
      learnMoreLink: "/learn-more",
      img: seo,
    },
    {
      id: "service-5",
      primaryColorText: "text-green-600",
      primaryColorBg: "bg-green-600",
      bgColor: "bg-green-200",
      title: "Print Media",
      subTitle: "Crafting Tangible Brand Communication.",
      learnMoreLink: "/learn-more",
      img: printing,
    },
    {
      id: "service-6",
      primaryColorText: "text-purple-600",
      primaryColorBg: "bg-purple-600",
      bgColor: "bg-purple-200",
      title: "Graphic Design",
      subTitle: "Visual Communication Mastery.",
      learnMoreLink: "/learn-more",
      img: graphics,
    },
    {
      id: "service-7",
      primaryColorText: "text-amber-600",
      primaryColorBg: "bg-amber-600",
      bgColor: "bg-amber-200",
      title: "Branding",
      subTitle: "Crafting Identity and Perception.",
      learnMoreLink: "/learn-more",
      img: branding,
    },
  ];
  const renderServices = () => {
    return serviceList.map((service, i) =>
      i % 3 === 0 ? (
        <div key={service.id} className="col-span-2">
          <ServiceCard {...service} />
        </div>
      ) : (
        <div key={service.id} className="col-span-1 max-md:col-span-2">
          <ServiceCard {...service} />
        </div>
      )
    );
  };

  return (
    <div>
      <div className="relative w-max">
        <h2 className="text-5xl font-bold text-neutral-700">Services</h2>
        <div className="h-2 w-2/3 mt-2 bg-yellow-500" />
      </div>
      <div className="mt-6 grid gap-4 grid-cols-2">{renderServices()}</div>
    </div>
  );
};

export default ServiceSection;
