import Link from "next/link"
import Button from "../button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-20 bg-sky-400 text-white px-8 md:px-20">
      <p className="text-2xl font-bold">FlowCal</p>

      <div className="flex gap-6 text-sm md:text-base">
        <Link href="#features">Features</Link>
        <Link href="#how-it-works">How it Works</Link>
        <Link href="#pricing">Pricing</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/login" className="text-sm md:text-base">Login</Link>
        <Link href="/signup">
          <Button text="Get Started" />
        </Link>
      </div>
    </nav>
  )
}