import Forms from "../../components/Forms/Forms";
import FormInput from "../../components/Forms/FormInput";
import { CallBell } from "@phosphor-icons/react";

const AddMenu = () => {
  const submitHandler = () => {};
  return (
    <section className="flex justify-center items-center w-full">
      <Forms submitHandler={submitHandler}>
        <FormInput type="text" label="name" placeholder="Enter Food Menu Name" icon={<CallBell size={19} />} />
      </Forms>
    </section>
  );
};

export default AddMenu;
