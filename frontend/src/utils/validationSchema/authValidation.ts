import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({ message: "Invalid password" }).min(4, "password must contain at least 4 characters"),
});

const signupValidationSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({ message: "Invalid password" }).min(4, "password must contain at least 4 characters"),
});

export { loginValidationSchema, signupValidationSchema };
