/* eslint-disable @typescript-eslint/no-explicit-any */
import { Envelope, Lock, Person } from "phosphor-react";
import FormInput from "../../components/Forms/FormInput";
import FormButton from "../../components/Buttons/FormButton";
import Forms from "../../components/Forms/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupValidationSchema } from "../../utils/validationSchema/authValidation";

export const SignUp = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };

  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Forms submitHandler={submitHandler} defaultValues={defaultValues} resolver={zodResolver(signupValidationSchema)}>
      <FormInput icon={<Person size={19} color="#AFBACA" />} type="text" label="name" placeholder="Enter your name" />
      <FormInput icon={<Envelope size={19} color="#AFBACA" />} type="email" label="email" placeholder="Enter your email" />
      <FormInput icon={<Lock size={19} color="#AFBACA" />} type="password" label="password" placeholder="Enter your password" />
      <FormButton title="Sign Up" />
    </Forms>
  );
};
