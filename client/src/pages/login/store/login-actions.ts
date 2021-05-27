import { useLoginStore } from "./login-store";

const { getState, setState } = useLoginStore;

export const addUserCount = () => setState({ users: getState().users + 1 });
