import {useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";

interface Props {
    qty?: number
}
const CartItems= ({qty = 0}:Props) => {
    const [addItemsToCart, setAddItemsToCart] = useState(qty);
    const handleAddItemsToCart = () => {
        setAddItemsToCart(prev => ++prev)

    }
    const handleRemoveItemsFromCart = ()=>{
        if(addItemsToCart !== 0){
            setAddItemsToCart((prev)=> --prev)
        }
    }
    return (
        <div className={"py-4 px-6 flex w-40 items-center justify-between gap-4 border-2 border-gray-200 min-w-[10rem]"}>
            <button onClick={handleRemoveItemsFromCart}><FaMinus /></button>
            <p>{addItemsToCart}</p>
            <button onClick={handleAddItemsToCart}><FaPlus /></button>
        </div>
    )
}
export default CartItems