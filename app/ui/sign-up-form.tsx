"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SignUpFormSchema } from "../lib/schema";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 min-w-sm"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
        <p className="text-gray-500 text-sm">
          Create your account to get started.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            {...register("email")}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${
              errors.email ? "border-red-500" : ""
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
            type="text"
            placeholder="Business name"
            {...register("businessName")}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${
              errors.businessName ? "border-red-500" : ""
            }`}
          />
          {errors.businessName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.businessName.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            {...register("password")}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky-800 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition cursor-pointer shadow-md disabled:opacity-50"
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </button>

      <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="underline text-sky-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}