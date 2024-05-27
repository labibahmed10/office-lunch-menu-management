import { SignIn, ListChecks, FilePlus, ListNumbers, CheckSquareOffset } from "phosphor-react";
import { Avatar, Divider, Sidebar } from "keep-react";
import userStore from "../../store/createStore";

const SideBar = () => {
  const { user, logOut } = userStore();
  return (
    <>
      <Sidebar className="h-[calc(100vh-60px)] w-full my-3">
        <Sidebar.Body>
          <Sidebar.Item className="text-body-2 cursor-pointer hover:bg-slate-100">
            <ListChecks size={28} />
            Today's Menu
          </Sidebar.Item>
          <Sidebar.Item className="text-body-2 cursor-pointer hover:bg-slate-100">
            <FilePlus size={28} />
            Add Lunch Menu
          </Sidebar.Item>
          <Sidebar.Item className="text-body-2 cursor-pointer hover:bg-slate-100">
            <CheckSquareOffset size={28} />
            Employee's choice
          </Sidebar.Item>
          <Sidebar.Item className="text-body-2 cursor-pointer hover:bg-slate-100">
            <ListNumbers size={28} />
            Employee list
          </Sidebar.Item>
          <Sidebar.Item onClick={logOut} className="text-body-2 cursor-pointer hover:bg-slate-100">
            <SignIn size={28} />
            Log Out
          </Sidebar.Item>
        </Sidebar.Body>
        <Divider className="my-3" />
        <Sidebar.Footer className="flex items-center gap-2">
          <div>
            <Avatar shape="circle" />
          </div>
          <div>{user && <p className="mb-0 text-body-3 cursor-pointer hover:bg-slate-100  font-medium text-metal-600">{user}</p>}</div>
        </Sidebar.Footer>
      </Sidebar>
    </>
  );
};

export default SideBar;
