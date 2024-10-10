import AssistCard from "@/components/AssistCard";
import ContactCard from "@/components/ContactCard";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {FaAngleRight, FaCreditCard, FaHome, FaLayerGroup, FaRegUser, FaSearch, FaTruck, FaUnlock, FaReceipt} from "react-icons/fa";
import {FaShop} from "react-icons/fa6";

const topics = [
  "How do I return my item?",
  "How long is the refund process?",
  "What is Misercom Returns Policy?",
  "What are the 'Delivery Timelines'?",
  "How to cancel Misercom Order.",
  "What is the Voucher & Gift Offer in this Campaign?",
  "What is 'Discover Your Daraz Campaign 2022'?",
  "Ask the Digital and Device Community",
  "How to change my shop name?",
];
const ContactUs = () => {
  return (
    <>
      <div className={"section py-5 bg-gray-50"}>
        <ul className={"flex gap-4 items-center text-gray-600 text-sm"}>
          <Link to={"/"} className={"flex duration-150 gap-4 items-center hover:text-secondary-500"}>
            <FaHome className={"text-xl"} />
            <li className={"flex gap-2 items-center"}>
              Home <FaAngleRight />
            </li>
          </Link>

          <Link to={"/products"}>
            <li className=" text-secondary-500">Customer Support</li>
          </Link>
        </ul>
      </div>

      <section className="section md:flex py-10 justify-between items-center grid grid-cols-1">
        <div>
          <Card className="bg-warning-400 w-fit py-1 px-3 rounded-none text-sm font-semibold">
            HELP CENTER
          </Card>
          <p className="text-gray-900 text-[28px]">How can we help you!</p>
          <div className="flex justify-center bg-white px-3 py-2 my-5 border items-center md:w-[30vw] w-90vw">
            <FaSearch className={"text-primary-500 text-xl"}/>
            <input
              type="email"
              placeholder="Enter your question of keyword"
              className="w-full h-[40px] px-5 reset-input"
            />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-700 text-white flex justify-center items-center gap-2 px-5 py-1"
            >
              search
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="/images/businesswoman.png"
            alt="business woman"
            width={400}
          />
        </div>
      </section>

      <section className="section">
        <p className="text-gray-900 md:text-[28px] text-center text-[22px]">
          How can we assist you today?
        </p>

        <div className="grid md:grid-cols-4 gap-3 py-7 grid-cols-2">
          <AssistCard icon={<FaTruck className={"text-primary-500 text-lg"} />} name="Track order" link="/" />
          <AssistCard
            name="Reset Password"
            icon={<FaUnlock className={"text-primary-500 text-lg"} />}
            link="/"
          />
          <AssistCard
            name="Payment option"
            icon={<FaCreditCard className={"text-primary-500 text-lg"} />}
            link="/"
          />
          <AssistCard name="User Account" icon={<FaRegUser className={"text-primary-500 text-lg"} />} link="/" />
          <AssistCard
            name="Wishlist & compare"
            icon={<FaLayerGroup className={"text-primary-500 text-lg"} />}
            link="/"
          />
          <AssistCard
            name="Shipping & billing"
            icon={<FaReceipt className={"text-primary-500 text-lg"} />}
            link="/"
          />
          <AssistCard
            name="Shopping cart & wallet"
            icon={<FaCreditCard className={"text-primary-500 text-lg"} />}
            link="/"
          />
          <AssistCard
            name="Sell on Misercom"
            icon={<FaShop className={"text-primary-500 text-lg"} />}
            link="/"
          />
        </div>
      </section>
      <section className="section">
        <p className="text-gray-900 font-bold text-[20px] text-center pt-5">
          Popular topics
        </p>
        <div className="grid md:grid-cols-3 gap-3 py-7 text-sm">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={"#"}
              className="hover:text-primary-500 transition duration-150"
            >
              <li>{topic}</li>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="section ">
          <div className="center-item flex-col">
            <button
              type="submit"
              className="bg-secondary-500 hover:bg-primary-700 text-white flex justify-center items-center gap-2 px-5 py-1"
            >
              CONTACT US
            </button>
            <p className="text-gray-900 text-[28px] text-center mb-[-10px] mt-5 font-semibold">
              Did not find the answer,
            </p>
            <p className="text-gray-900 text-[28px] text-center font-semibold">
              Contact with us
            </p>
          </div>

          <div className="md:flex md:gap-32 gap-5 justify-center grid grid-cols-1">
            <ContactCard
              image="/images/call.png"
              title="Call us now"
              info="we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now"
              contact="+1-202-555-0126"
              button="CALL NOW"
              color="bg-secondary-500"
            />
            <ContactCard
              image="/images/message.png"
              title="Chat with us"
              info="we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now"
              contact="support@misercom.com"
              button="CONTACT US"
              color="bg-success-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
