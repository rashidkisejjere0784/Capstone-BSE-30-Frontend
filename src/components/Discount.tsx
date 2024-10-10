interface Props{
    price: string;
    discount?: string;
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
 * @constructor
 *
 */
const Discount = ({price, discount, discountPosition, priceColor = "text-gray-300", className}:Props) => {
    return (
        <>
            <div className={`${className} my-4 flex gap-2 items-center font-bold`}>
                {
                    discount !== "" && discountPosition === "left" ? <p className={`text-gray-300 line-through font-medium`}>{discount}</p> : ""
                }

                    <p className={`${priceColor} text-base`}>{price}</p>
                {
                    discount !== "" && discountPosition === "right"?
                        <p className={`text-gray-300 line-through font-medium`}>{discount}</p> : ""
                }
            </div>
        </>
    )
}
export default Discount