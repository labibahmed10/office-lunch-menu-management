import { Icon, Input, Label } from "keep-react";
import { Fragment, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import zodValidator from "../../utils/validate/ZodValidations";

interface FormInputTypes {
  type: string;
  name: string;
  placeholder: string;
  icon: ReactNode;
}

const FormInput = ({ type, name, placeholder, icon }: FormInputTypes) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const validationErrors = zodValidator(errors, type);

  

  return (
    <fieldset className="space-y-1">
      <Label htmlFor={name}>{name}*</Label>
      <div className="relative">
        <Controller
          control={control}
          name={type}
          render={({ field }) => <Input id={name} type={type} placeholder={placeholder} className="ps-11" {...field} value={field?.value} />}
        />
        <Icon>
          <Fragment>{icon}</Fragment>
        </Icon>
      </div>
    </fieldset>
  );
};

export default FormInput;
