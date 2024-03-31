import { SectionTitle } from "@components/common";
import ClientCards from "./clientCards";
import { clientList } from "../../constants/clients";

const ClientSection = () => {
  return (
    <div id="clients" className="pt-16">
      <SectionTitle title="Featured Partners" />
      <div className="mt-6 flex sm:justify-center gap-x-12 no-scrollbar snap-x snap-mandatory overflow-x-auto">
        {clientList.map((client) => (
          <ClientCards key={client} alt={client.alt} logo={client.logo} />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
