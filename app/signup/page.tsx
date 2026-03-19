import SignUpForm from "../ui/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="p-5 min-h-screen flex ">
      <div className="hidden lg:block lg:w-1/2 h-full">
        {/* Placeholder image */}
        <div
          className="w-full bg-gray-200 rounded-xl flex items-center justify-center"
          style={{ height: 'calc(100vh - 2.5rem)' }}
        >
          <p className="text-gray-400">Image</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <SignUpForm />
      </div>
    </div>
  )
}