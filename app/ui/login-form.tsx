"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { LoginFormSchema } from "../lib/schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data: any) => {
    const response = await signIn("credentials", {
      email: data.email,
      passwod: data.password,
      redirect: false,
    })

    if (response?.error) {
      alert("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 min-w-sm"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-gray-500 text-sm">
          Please enter your login details down below.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            {...register("email")}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${errors.email ? "border-red-500" : ""
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            {...register("password")}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${errors.password ? "border-red-500" : ""
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-500 cursor-pointer hover:underline">
          Forgot Password?
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky-800 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition cursor-pointer shadow-md disabled:opacity-50"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>

      <button
        type="button"
        className="w-full border py-3 rounded-lg font-medium hover:bg-sky-100 transition cursor-pointer shadow-md"
      >
        Sign Up with Google
      </button>

      <p className="text-sm text-center text-gray-500">Don't have an account?{" "}<Link href="/signup" className="underline text-sky-500 font-bold">Sign Up</Link>.</p>
    </form>
  );
}