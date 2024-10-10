import { Card } from "./ui/card";

type Props = {
  image: string;
  title: string;
  info: string;
  contact: string;
  button: string;
  color: string;
};
const ContactCard = ({ image, title, info, contact, button, color }: Props) => {
  return (
    <Card className=" flex-col p-8 rounded-sm my-5 ">
      <div className="flex-col gap-10">
        <div className="flex gap-6">
          <img src={image} alt="call" width={72}/>
          <div className="flex-col gap-4">
            <p className="text-[16px] font-semibold text-gray-900"> {title}</p>
            <p className="md:text-sm text-gray-600 w-full">{info}</p>
            <p className="font-semibold md:text-2xl text-lg">{contact}</p>
          </div>
        </div>
        
      </div>
      <div className="pt-10 center-item">
          <button className={`${color} px-5 py-2 text-gray-00 text-sm flex gap-3 items-center`}
        >
            {button } <i className="fa fa-long-arrow-right text-gray-00"></i>
          </button>
        </div>
    </Card>
  );
};

export default ContactCard;
