import LocationIcon from "@assets/icons/locationIcon";
import { SectionTitle } from "@components/common";

const ContactUsSection = () => {
  return (
    <div className="pt-16" id="contact">
      <SectionTitle title="Let's Talk" />
      <div className="grid sm:grid-cols-2 gap-16 bg-white text-[#333]">
        <div>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            we&apos;d love to hear about your project and provide help.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-bold text-neutral-700">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    className="fill-yellow-500"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:business.foxmarc@gmail.com"
                  className="text-yellow-500 text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>business.foxmarc@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-bold text-neutral-700">Address</h2>
            <div className="flex mt-3 space-x-4">
              <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <div className="h-12 w-12 fill-yellow-500 stroke-yellow-500 flex items-center">
                  <LocationIcon />
                </div>
              </div>
              <strong className="text-yellow-500 text-sm leading-relaxed">
                Bh-711, Arved Transcube Plaza, <br />
                Bandhu Nagar, Vijay Nagar,
                <br />
                Ranip, Ahmedabad, Gujarat 382480
              </strong>
            </div>
          </div>
        </div>
        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-sm py-3 px-4 bg-gray-100 text-sm outline-yellow-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-sm py-3 px-4 bg-gray-100 text-sm outline-yellow-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full rounded-sm py-3 px-4 bg-gray-100 text-sm outline-yellow-500"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-sm px-4 bg-gray-100 text-sm pt-3 outline-yellow-500"
            defaultValue={""}
          />
          <button
            type="button"
            className="text-white bg-yellow-500 hover:bg-yellow-700 font-semibold rounded-sm text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;
