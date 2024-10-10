const ShopNowButton = ({className}:{className?: string})=>{
    return (
        <button
            className={`${className} flex items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 gap-4`}>
            <a href={"#"}>SHOP NOW</a>
            <span><i className="fa-solid fa-arrow-right"/></span>
        </button>
    )
}
export default ShopNowButton