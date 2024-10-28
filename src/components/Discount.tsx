interface Props{
    price: number;
    discount?: number;
    discountPosition?: string;
    priceColor?: string;
    className?: string;
}

/**
 *
 * @param price "string of the price"
 * @param discount "string of the discount"
 * @param discountPosition "left":"right"
 * @param priceColor
 * @param className
 * @constructor
 *
 */
const Discount = ({price, discount, discountPosition, priceColor = "text-gray-300", className}:Props) => {
    return (
        <>
            <div className={`${className} my-4 flex gap-2 items-center font-bold`}>
                {
                    discount !== 0 && discountPosition === "left" ? <p className={`text-gray-300 line-through font-medium`}>{discount} ugx</p> : ""
                }

                    <p className={`${priceColor} text-base`}>{price} ugx</p>
                {
                    discount !== 0 && discountPosition === "right"?
                        <p className={`text-gray-300 line-through font-medium`}>{discount} ugx</p> : ""
                }
            </div>
        </>
    )
}
export default Discount