const ShopNowButton = ({className, link}:{className?: string; link?: string})=>{
    return (
        <a href={link ? link : '/products'}
            className={`${className} flex items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 gap-4`}>
            SHOP NOW
            <span><i className="fa-solid fa-arrow-right"/></span>
        </a>
    )
}
export default ShopNowButton