type ButtonProps = {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button type="button" className="w-36 h-11 flex justify-center items-center bg-black text-white rounded-full font-semibold text-sm hover:cursor-pointer shadow-lg">
      {text}
    </button>
  )
}