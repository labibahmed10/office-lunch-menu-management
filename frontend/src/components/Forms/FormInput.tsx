import { Icon, Input, Label } from "keep-react";
import { Fragment, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import zodValidator from "../../utils/validate/ZodValidations";

interface FormInputTypes {
  type: string;
  label: string;
  placeholder: string;
  icon: ReactNode;
}

const FormInput = ({ type, label, placeholder, icon }: FormInputTypes) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const validationErrors = zodValidator(errors, label);
  
  return (
    <fieldset className="space-y-1">
      <Label htmlFor={label} className="capitalize">
        {label} *
      </Label>
      <div className="relative">
        <Controller
          control={control}
          name={label}
          render={({ field }) => <Input id={label} type={type} placeholder={placeholder} className="ps-11" {...field} value={field?.value} />}
        />
        <Icon>
          <Fragment>{icon}</Fragment>
        </Icon>
      </div>
      <span className="text-red-500">{validationErrors && validationErrors}</span>
    </fieldset>
  );
};

export default FormInput;
