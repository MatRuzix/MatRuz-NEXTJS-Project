"use client";

import { Button, Input } from "@/components";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { enqueueSnackbar } from "notistack";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import LogInSchema from "@/schemas/LogInSchema";

type SignInUser = z.infer<typeof LogInSchema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUser>({
    resolver: zodResolver(LogInSchema),
    mode: "onTouched",
  });

  const router = useRouter();

  const t1 = useTranslations("SignIn");
  const t2 = useTranslations("Errors");

  const onSubmit: SubmitHandler<SignInUser> = async (data) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (response?.error === "wrongCredentials") {
      enqueueSnackbar(t2("wrongCredentials"), { variant: "error" });
      return null;
    }
    enqueueSnackbar(t1("loginSuccessful"), { variant: "success" });
    router.push("/dashboard");
  };

  return (
    <div className="flex w-full h-screen bg-blue-900 items-center justify-center">
      <div className="flex flex-col min-w-80 min-h-40 h-1/2 w-1/3 bg-white rounded-md p-10 shadow-lg gap-4 items-center justify-center">
        <h2 className="text-left text-xl">{t1("signIn")}</h2>
        <form
          className="flex flex-col gap-8 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            label="E-mail"
            error={errors.email?.message && t2(errors.email.message)}
            {...register("email")}
          />
          <Input
            type="password"
            label={t1("password")}
            error={errors.password?.message && t2(errors.password.message)}
            {...register("password")}
          />
          <Button
            text={t1("signIn")}
            type="submit"
            className="text-white justify-center"
          />
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
