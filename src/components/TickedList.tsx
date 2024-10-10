type Props ={
    subject: string
}
const TickedList = ({subject}:Props) => {
  return (
    <div className="flex gap-4 items-center py-1">
        <i className="fa-solid fa-check-double text-success-500"></i>
        <div>{subject}</div>
    </div>
  )
}

export default TickedList