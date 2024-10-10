interface Props {
    title: string;
    value: string;
    className?: string;
}
const DropDown = ({title, value, className}:Props)=>{
    return (
        <>
        <div className={`${className}`}>
            <h3 className={"text-sm font-medium"}>{title}</h3>
            <button
                className="block border-[1px] border-gray-100 text-sm text-gray-700 rounded-sm px-6 py-4 w-full">
                {value}
                <i className="ml-4 fa-solid fa-angle-down"></i>
            </button>
        </div>
        </>
    )
}
export default DropDown