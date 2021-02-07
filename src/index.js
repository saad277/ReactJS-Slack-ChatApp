import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import firebase from "./firebase";
import { Provider } from "react-redux";

import store from "./Store/store";

import Login from "./Components/Auth/Login";
import App from "./Components/App.jsx";
import Register from "./Components/Auth/Register";

import "semantic-ui-css/semantic.min.css";

const Root = () => {
  const History = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        History.push("/");
      }
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/" />
    </Switch>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Root />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
