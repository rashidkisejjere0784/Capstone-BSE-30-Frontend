interface Props {
    value: string;
    icon: string;
}

const Feature = ({value, icon}:Props)=>{
    return (
        <>
            <div className={"flex gap-4 items-center"}>
                <i className={`fa-solid text-primary-500 text-lg ${icon}`}></i>
                <p>{value}</p>
            </div>
        </>
    )
}

export default Feature