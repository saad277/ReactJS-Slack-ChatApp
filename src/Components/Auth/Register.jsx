import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import md5 from "md5";

import firebase from "../../firebase";
import { displayErrors, handleInputError } from "../../Utils/errorUtils";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    userRef: firebase.database().ref("users"),
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill All Fields" };

      this.setState({
        errors: [...this.state.errors, error],
      });

      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Invalid Password" };

      this.setState({
        errors: [...this.state.errors, error],
      });

      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, password, email, passwordConfirmation }) => {
    return !username || !password || !email || !passwordConfirmation;
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  saveUser = (createdUser) => {
    return this.state.userRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
          console.log(createdUser);

          createdUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://gravatar.com/avatar${md5(
                createdUser.user.email
              )}?d=identicon`,
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("user saved");
              });
            })
            .catch((error) => {
              console.log(error);

              this.setState({
                errors: [...this.state.errors, error],
                loading: false,
              });
            });

          this.setState({ loading: false });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            errors: [...this.state.errors, error],
            loading: false,
          });
        });
    }
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      loading,
      errors,
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            <h2>Register To DevChat</h2>
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="text"
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                value={username}
              />

              <Form.Input
                type="email"
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                onChange={this.handleChange}
                value={email}
                className={handleInputError(errors, "email")}
              />

              <Form.Input
                type="password"
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                className={handleInputError(errors, "password")}
              />

              <Form.Input
                type="password"
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                value={passwordConfirmation}
                className={handleInputError(errors, "password")}
              />

              <Button
                disabled={loading}
                color="orange"
                fluid
                size="large"
                className={loading ? "loading" : ""}
              >
                Submit
              </Button>
            </Segment>
          </Form>

          {errors.length > 0 ? (
            <Message error>
              <h3>Error</h3>
              {displayErrors(errors)}
            </Message>
          ) : null}

          <Message>
            Already a User ? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
