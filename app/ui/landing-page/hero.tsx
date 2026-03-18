import Button from "../button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex px-8 md:px-20 my-10"
      style={{ height: 'calc(100vh - 10rem)' }}
    >
      <div className="flex-1 flex flex-col justify-between w-full lg:w-1/2 my-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-sky-400">Simple</span> Booking for{" "}
          <span className="block"><span className="text-sky-400">Modern</span> Businesses</span>
        </h1>
        <div>
          <p className="mb-10 max-w-96 text-base md:text-lg">
            Let customers book appointments online, manage your schedule, and never miss a booking again.
          </p>
          <Button text="Start for Free" />
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        {/* Placeholder image */}
        <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-gray-400">Image</p>
        </div>
      </div>
    </section>
  )
}