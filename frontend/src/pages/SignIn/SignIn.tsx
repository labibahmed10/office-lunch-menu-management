/* eslint-disable @typescript-eslint/no-explicit-any */
import { Envelope, Lock } from "phosphor-react";
import FormInput from "../../components/Forms/FormInput";
import FormButton from "../../components/Buttons/FormButton";
import Forms from "../../components/Forms/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../utils/validationSchema/authValidation";

export const SignIn = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };

  const defaultValues = {
    email: "",
    password: "",
  };

  return (
    <section className="w-screen h-[calc(100vh-72px)] flex justify-center items-center">
      <Forms submitHandler={submitHandler} defaultValues={defaultValues} resolver={zodResolver(loginValidationSchema)}>
        <FormInput icon={<Envelope size={19} color="#AFBACA" />} type="email" label="email" placeholder="Enter your email" />
        <FormInput icon={<Lock size={19} color="#AFBACA" />} type="password" label="password" placeholder="Enter your password" />
        <FormButton title="Sign In" />
      </Forms>
    </section>
  );
};
