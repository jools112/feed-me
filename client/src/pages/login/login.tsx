import { useLoginStore } from "./store/login-store";

export const Login = () => {
  const store = useLoginStore();
  return (
    <div>
      LOG IN <button>push me</button>
      <div>user count: {store.users}</div>
    </div>
  );
};
