interface Props {
    maxWidth?: string;
    className?: string;
}

const SearchInput = ({maxWidth = "max-w-[45rem]", className}:Props)=>{
    return (
        <>
            <div
                className={`${maxWidth} ${className} w-full bg-white rounded-sm py-[.9rem] px-6 flex gap-4 justify-between items-center`}>
                <div className="flex-1">
                    <input
                        id="search"
                        type="text"
                        className="w-full text-gray-500 ring-0 border-0 outline-none focus:outline-none"
                        placeholder="Search for anything..."
                    />
                </div>
                <div className="text-gray-900 whitespace-nowrap">
                    <label htmlFor="search">
                        <i className="fa-solid fa-magnifying-glass"/>
                    </label>
                </div>
            </div>
        </>
    )
}
export default SearchInput