import { Avatar, Dropdown, Navbar } from "keep-react";
import userStore from "../../store/createStore";
import { SignOut } from "phosphor-react";

export const NavbarComponent = () => {
  const { user, logOut } = userStore();
  return (
    <Navbar fluid={true} className="bg-lime-200 shadow-md py-0">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <h1 className="text-2xl font-semibold">Office Lunch Management</h1>
        </Navbar.Brand>

        <Navbar.Container className="flex items-center gap-3">
          {user && <p>{user}</p>}
          <Dropdown action={<Avatar className="text-black" />} actionClassName="py-0 px-0 rounded-full my-2">
            <Dropdown.List>
              <Dropdown.Item onClick={logOut}>
                <SignOut size={24} />
                Logout
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
