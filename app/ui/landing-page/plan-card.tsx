import { Plan } from "@/app/lib/types";

export default function PlanCard({ plan, idx }: { plan: Plan, idx: number }) {
  return (
    <div
      className={`${idx % 2 == 1 ? "bg-sky-800" : "bg-sky-400"} text-white rounded-2xl px-8 py-16 shadow-md flex flex-col`}
    >
      <h3 className="text-2xl font-semibold mb-4">
        {plan.planName}
      </h3>

      <p className="text-4xl font-bold mb-6">
        £{plan.price}
        <span className="text-base font-normal">
          /month
        </span>
      </p>

      <ul className="flex flex-col gap-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i}>
            ✓ {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-auto h-11 rounded-full font-semibold bg-white text-black shadow-xl hover:cursor-pointer"
      >
        Choose {plan.planName} Plan
      </button>
    </div>
  )
}