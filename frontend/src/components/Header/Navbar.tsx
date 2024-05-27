import { Navbar } from "keep-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-lime-200 shadow-md">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <h1 className="text-2xl font-semibold">Office Lunch Management</h1>
        </Navbar.Brand>
      </Navbar.Container>
    </Navbar>
  );
};
