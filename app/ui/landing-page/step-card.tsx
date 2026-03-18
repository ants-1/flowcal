import { Step } from "@/app/lib/types";

export default function StepCard({ step, idx }: { step: Step, idx: number }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 1 ? "lg:flex-row-reverse lg:text-right" : ""} mb-10 max-w-4xl w-full`}
    >
      {/* Text */}
      <div className="w-full lg:w-2/5">
        <h4 className="text-xl md:text-2xl font-semibold mb-3">
          <span className={`text-sky-400 mr-2 ${idx % 2 == 1 ? "text-sky-800" : "text-sky-400"}`}>
            {String(idx + 1).padStart(2, "0")}.
          </span>
          {step.title}
        </h4>
        <p className="text-gray-700 text-sm md:text-base">
          {step.text}
        </p>
      </div>

      {/* Placeholder image */}
      <div className="w-full lg:w-3/5">
        <div className="w-full h-56 md:h-72 bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-gray-400">Image</p>
        </div>
      </div>
    </div>
  )
}