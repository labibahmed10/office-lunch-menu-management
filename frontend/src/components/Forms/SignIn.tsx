import { Envelope } from "phosphor-react";
import { Button, Card, Icon, Input, Label } from "keep-react";

export const SignIn = () => {
  return (
    <Card className="max-w-sm">
      <Card.Content className="space-y-3">
        <form className="space-y-2">
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email*</Label>
            <div className="relative">
              <Input id="email" type="email" placeholder="Enter email" className="ps-11" />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password*</Label>
            <div className="relative">
              <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
              <Icon>{/* <Lock size={19} color="#AFBACA" /> */}</Icon>
            </div>
          </fieldset>
          <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
            Create Account
          </Button>
        </form>
      </Card.Content>
    </Card>
  );
};
