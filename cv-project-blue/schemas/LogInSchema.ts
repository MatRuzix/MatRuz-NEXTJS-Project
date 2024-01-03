import z from "zod";

const LogInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "noEmpty" })
    .email({ message: "wrongMail" }),

  password: z
    .string()
    .min(1, { message: "noEmpty" })
    .regex(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$&+,:;=?@#|'<>.-^*()%!]).{6,}$/
      ),
      {
        message: "wrongPassword",
      }
    ),
});

export default LogInSchema;
