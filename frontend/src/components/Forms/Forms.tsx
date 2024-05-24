/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "keep-react";
import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const Forms = ({ children, defaultValues, submitHandler, resolver }: FormProps) => {
  const formConfig: FormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const { handleSubmit } = methods;

  const onsubmit = (data: any) => {
    submitHandler(data);
  };
  return (
    <Card className="min-w-72 sm:min-w-[30rem] shadow-lg">
      <Card.Content className="space-y-3">
        <FormProvider {...methods}>
          <form className="space-y-2" onSubmit={handleSubmit(onsubmit)}>
            {children}
          </form>
        </FormProvider>
      </Card.Content>
    </Card>
  );
};

export default Forms;
