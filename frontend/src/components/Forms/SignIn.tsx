/* eslint-disable @typescript-eslint/no-explicit-any */
import { Envelope, Lock } from "phosphor-react";
import FormInput from "./FormInput";
import FormButton from "../Buttons/FormButton";
import Forms from "./Forms";
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
    <Forms submitHandler={submitHandler} defaultValues={defaultValues} resolver={zodResolver(loginValidationSchema)}>
      <FormInput icon={<Envelope size={19} color="#AFBACA" />} type="email" name="Email" placeholder="Enter your email" />
      <FormInput icon={<Lock size={19} color="#AFBACA" />} type="password" name="Password" placeholder="Enter your password" />
      <FormButton title="Sign In" />
    </Forms>
  );
};
