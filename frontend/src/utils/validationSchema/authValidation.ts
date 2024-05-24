import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({ message: "Invalid password" }),
});

export { loginValidationSchema };
