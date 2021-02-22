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

import firebase from "../../firebase";
import { displayErrors, handleInputError } from "../../Utils/errorUtils";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((signedInUser) => {
        this.setState({ errors: [], loading: false });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          errors: [...this.state.errors, err],
          loading: false,
        });
      });
  };

  isFormValid = ({ email, password }) => {
    return email && password;
  };

  render() {
    const { email, password, loading, errors } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            <h1>Login To DevChat</h1>
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
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

              <Button
                disabled={loading}
                color="violet"
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
            Don't have an account ? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
