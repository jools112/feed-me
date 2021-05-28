import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLoginStore } from "./pages/login/store/login-store";
import { Login } from "./pages/login/login";
import { addUserCount } from "./pages/login/store/login-actions";
import { Main } from "./pages/main/main";

export const App = () => {
  const store = useLoginStore();
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/users">
          <button onClick={() => addUserCount()}>increment user count</button>
          <div>current user count: {store.users}</div>
          <h6>edi</h6>
          <h6>viktor</h6>
          <h6>julia</h6>
          <h6>KC</h6>
        </Route>
      </Router>
    </React.Fragment>
  );
};
