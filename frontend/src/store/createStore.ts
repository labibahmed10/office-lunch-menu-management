import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IUserAuth {
  user: string;
  access_token: string;
}

interface IActions {
  logIn: (data: IUserAuth) => void;
  logOut: () => void;
}

const initialState: IUserAuth = {
  user: "",
  access_token: "",
};

const userStore = create<IUserAuth & IActions>()(
  immer((setState) => ({
    ...initialState,

    logIn: (data: IUserAuth) => {
      setState({
        user: data.user,
        access_token: data.access_token,
      });
    },

    logOut: () => {
      setState({
        ...initialState,
      });
    },
  }))
);

export default userStore;
