import z from "zod";

export const LoginFormSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

export const SignUpFormSchema = z
  .object({
    email: z.email("Enter a valid email"),
    businessName: z.string().min(2, "Business name is required"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
