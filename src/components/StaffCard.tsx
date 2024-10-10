interface Props {
  img: string;
  name: string;
  role: string;
}

const StaffCard = ({ img, name, role }: Props) => {
  return (
    <div
      className={
        "p-2 border-[1px] border-gray-100 grid grid-cols-7 gap-4 items-center"
      }
    >
      <div className={"col-span-2"}>
        <img src={img} alt={"profile picture"} />
      </div>
      <div className={"col-span-5"}>
        <p className="font-bold text-gray-900" >{name}</p>
        <h4 className={" mt-2 text-gray-700"}>{role}</h4>
      </div>
    </div>
  );
};

export default StaffCard;
