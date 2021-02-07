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
import { Provider, connect } from "react-redux";

import store from "./Store/store";
import { setUser } from "./Store/actions";

import Login from "./Components/Auth/Login";
import App from "./Components/App.jsx";
import Register from "./Components/Auth/Register";
import { Spinner } from "./Components/Spinner";

import "semantic-ui-css/semantic.min.css";

const Root = (props) => {
  const { setUser, isLoading } = props;

  const History = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
        History.push("/");
      }
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

const mapDispatchToProps = {
  setUser,
};

const RootWithRedux = connect(mapStateToProps, mapDispatchToProps)(Root);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <RootWithRedux />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
