interface Props {
    title:string;
    className?:string;
    icon?: string;
    link?: string;
}
const Button = ({title, className="bg-warning-400 text-xs text-gray-900 absolute left-4 top-4", icon, link}:Props)=>{
    return (
        <>
            <button
                className={`${className} ml-auto z-10 font-bold rounded-sm px-4 py-2`}><a href={link}>{title}</a>
                {icon && <i className={`fa-brands ${icon}`}></i>}
            </button>
        </>
    )
}
export default Button