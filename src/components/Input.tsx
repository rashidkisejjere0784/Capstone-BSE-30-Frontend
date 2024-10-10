interface Props {
    placeHolder?: string;
    type?: string;
    id?: string;
    value?: string;
}
const Input = ({placeHolder, type, id, value}:Props)=>{
    return (
        <>
            <div
                className={`w-full mb-6 bg-white rounded-sm py-[.9rem] px-6 flex gap-4 justify-between items-center border border-gray-100`}>

                <input
                    id={id}
                    type={type}
                    className="w-full text-gray-500 ring-0 border-0 outline-none focus:outline-none"
                    placeholder={placeHolder}
                    value={value}
                />
            </div>
        </>
    )
}

export default Input;