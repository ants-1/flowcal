import { Step } from "@/app/lib/types"
import StepCard from "./step-card"

export default function HowItWorks() {
  const steps: Step[] = [
    {
      title: "Create Your Booking Page",
      text: "Set up your services, and availability in minutes.",
      img_url: ""
    },
    {
      title: "Share Your Link",
      text: "Send your booking link to customers or add it to your website or social media.",
      img_url: ""
    },
    {
      title: "Start Receiving Bookings",
      text: "Customer pick a time that works for them and your calendar updates automatically.",
      img_url: ""
    },
  ]

  return (
    <section id="how-it-works" className="px-8 md:px-20 my-30 min-h-screen scroll-mt-12">
      <h2 className="text-center text-4xl font-bold mb-20">How it Works</h2>
      <div className="flex flex-col items-center">
        {steps.map((step, idx) => (
          <StepCard key={idx} step={step} idx={idx} />
        ))}
      </div>
    </section>
  )
}