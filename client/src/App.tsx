import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLoginStore } from "./pages/login/store/login-store";
import { Login } from "./pages/login/login";
import { addUserCount } from "./pages/login/store/login-actions";

function App() {
  console.log("badå");
  const store = useLoginStore();
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <div>
              feed me!
              <div>
                <div>ok</div>
              </div>
            </div>
          </Route>
          <Route exact path="/users">
            <button onClick={() => addUserCount()}>increment user count</button>
            <div>current user count: {store.users}</div>
            <h6>edi</h6>
            <h6>viktor</h6>
            <h6>julia</h6>
            <h6>KC</h6>
          </Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
