"use server"
import { HeroSection, ServiceSection } from "@components/home";

export default async function Home() {
  return (
    <div className="container mx-auto p-12 max-sm:p-6 flex flex-col gap-y-16">
      <HeroSection />
      <ServiceSection />
    </div>
  );
}
