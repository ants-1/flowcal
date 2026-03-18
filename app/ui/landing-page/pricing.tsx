import { Plan } from "@/app/lib/types"
import PlanCard from "./plan-card"

export default function Pricing() {
  const pricingInfo: Plan[] = [
    {
      price: 0,
      planName: "Starter",
      features: [
        "Up to 1 booking calendar per service",
        "Up to 3 services",
        "Up to 50 bookings per month"
      ]
    },
    {
      price: 9,
      planName: "Pro",
      features: [
        "Up to 5 booking calendar per service",
        "Unlimited services",
        "Unlimited bookings per month"
      ]
    }
  ]

  return (
    <section
      id="pricing"
      className="min-h-screen flex flex-col items-center justify-center bg-sky-200 px-8 md:px-20 py-20 scroll-m-0"
    >
      <h2 className="text-4xl font-bold mb-20 text-center">
        <span className="text-sky-800">Choose</span> Your Plan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {pricingInfo.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} idx={idx} />
        ))}
      </div>
    </section>
  )
}