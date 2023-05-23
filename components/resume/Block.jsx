const Block = ({ active }) => {
  return (
    <div className={`w-20 h-3 ${active ? "bg-brand_bg-500" : "bg-gray-500"}`}></div>
  )
}

export default Block