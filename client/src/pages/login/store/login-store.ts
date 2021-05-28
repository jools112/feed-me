import create from "zustand";

interface LoginState {
  users: number;
}

const initialState: LoginState = {
  users: 0,
};

export const useLoginStore = create<LoginState>(() => initialState);
