import { Button } from "keep-react";

const FormButton = ({ title }: { title: string }) => {
  return (
    <Button className="!mt-3 block w-1/2 mx-auto" size="xs" color="secondary" variant="outline" type="submit">
      {title}
    </Button>
  );
};

export default FormButton;
