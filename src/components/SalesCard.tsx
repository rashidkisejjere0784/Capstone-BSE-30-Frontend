interface Props {
    img: string;
    title: string;
    price: string;
}
const SalesCard = ({img, title, price}:Props)=>{
    return (
        <div className={"p-2 border-[1px] border-gray-100 grid grid-cols-7 gap-4 items-center"}>
            <div className={"col-span-2"}>
                <img src={img} className={"Camera"} alt={"Camera"}/>
            </div>
            <div className={"col-span-5"}>
                <p>{title}</p>
                <h4 className={"font-bold mt-2 text-secondary-500"}>{price}</h4>
            </div>
        </div>
    )
}
export default SalesCard