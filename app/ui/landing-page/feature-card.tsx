import { Feature } from "@/app/lib/types"

export default function FeatureCard({ feature }: { feature: Feature}) {
  return (
    <div className="bg-sky-800 text-white rounded-2xl max-w-96 p-10 text-center shadow-lg">
      <h3 className="font-bold mb-4">{feature.title}</h3>
      <p className="text-sm md:text-base">{feature.text}</p>
    </div>
  )
}