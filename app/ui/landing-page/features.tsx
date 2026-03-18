import { Feature } from "@/app/lib/types"
import FeatureCard from "./feature-card"

export default function Features() {
  const features: Feature[] = [
    {
      title: "Online Booking Page",
      text: "Create a personalised booking page where customers can choose a time and book instantly."
    },
    {
      title: "Booking Dashboard",
      text: "Manage all your appointments from one simple dashboard where you can view, update, or track bookings."
    },
    {
      title: "Service Management",
      text: "Create and customise the services you offer, including duration, price, and availability."
    },
    {
      title: "Shareable Booking Link",
      text: "Get a personalised booking link you can share with customers so they can book anytime."
    }
  ]

  return (
    <section id="features" className="min-h-screen flex flex-col items-center justify-center bg-sky-200 px-8 md:px-20 py-30">
      <h2 className="text-4xl font-bold mb-20"><span className="text-sky-800">Simplify</span> Your Booking <span className="block">Process</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} feature={feature} />
        ))}
      </div>
    </section>
  )
}