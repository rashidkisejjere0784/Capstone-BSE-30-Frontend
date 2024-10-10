import Sales from "@/components/Home/Sales";
import StaffCard from "@/components/StaffCard";
import TickedList from "@/components/TickedList";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <section className="section md:flex justify-center py-20 gap-4 items-center">
        <div className="md:flex-1">
          <Card className="bg-secondary-500 py-1 px-2 rounded-none w-fit text-gray-00 mb-4">
            WHO WE ARE
          </Card>
          <p className="md:text-[40px] text-[26px] font-semibold leading-tight pb-3">
            Kinbo - largest electronics retail shop in the world.
          </p>
          <p className="pb-4 text-gray-700 text-[16px]">
            Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
            vestibulum risus, ac tincidunt diam lectus id magna. Praesent
            maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui
            aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
          </p>

          <div>
            <TickedList subject="Great 24/7 customer services." />
            <TickedList subject="600+ Dedicated employe." />
            <TickedList subject="50+ Branches all over the world." />
            <TickedList subject="Over 1 Million Electronics Products" />
          </div>
        </div>
        <div className="md:flex-1 ">
          <img
            src="/images/about-us-image.png"
            alt="Client with our worker"
            width={648}
            height={732}
          />
        </div>
      </section>

      <hr className="my-4 border-gray-300 w-full" />

      <section className="section py-8">
        <p className="flex justify-center text-[32px] font-semibold pb-5">
          Our core team members
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          <StaffCard
            name="Kevin Gilbert"
            role="Chief Executive officer"
            img="/images/staff1.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="Assistant of CEO"
            img="/images/staff1.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="Head of Designer"
            img="/images/staff2.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="Design Engineer"
            img="/images/staff4.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="UX Designer"
            img="/images/staff4.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="UI Designer"
            img="/images/staff5.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="Product Designer"
            img="/images/staff6.png"
          />
          <StaffCard
            name="Kevin Gilbert"
            role="Head of Development"
            img="/images/staff7.png"
          />
        </div>
      </section>

      <div
        className="bg-cover bg-center h-[360px] my-6 flex items-center"
        style={{ backgroundImage: "url('/images/aboutbg.png')" }}
      >
        <div className="section py">
          <div className="md:w-[25vw]">
            <p className="text-gray-900 md:text-[32px] text-2xl font-semibold leading-tight py-6">
              Your trusted and reliable retail shop
            </p>
            <p className="text-gray-900 ">
              Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
              elit gravida eget. Nunc consequat auctor urna a placerat.
            </p>
            <img
              src="/images/about-btn.png"
              alt="button"
              width={50}
              className="py-5"
            />
          </div>
        </div>
      </div>
      <section>
        <Sales />
      </section>

      <section className="bg-secondary-700 flex justify-center">
        <div className="section md:w-[60vw] py-10 ">
          <p className="text-[32px] text-center text-gray-00 font-semibold py-3">
            Subscribe to our newsletter
          </p>
          <p className="text-gray-100 text-[16px] text-center ">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          <div className="w-full flex justify-center bg-white px-3 py-3 my-5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-[40px] px-5 "
            />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-700 text-white flex justify-center items-center gap-2 px-5"
            >
              SUBSCRIBE
              <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
          <div className="flex gap-5 justify-center">
            <a href="#">
              {" "}
              <img src="/images/googlelogo.png" alt="google" width={72} />
            </a>
            <a href="#">
              {" "}
              <img src="/images/amazon.png" alt="google" width={72} />
            </a>
            <a href="#">
              {" "}
              <img src="/images/phillip.png" alt="google" width={72} />
            </a>

            <a href="#"><img src="/images/toshiba.png" alt="google" width={72} /></a>
            <a href="#"><img src="/images/sumsang.png" alt="google" width={72} /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
