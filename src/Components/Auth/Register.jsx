import React, { Component } from 'react'

import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import firebase from '../../firebase'

class Register extends Component {


    state = {

        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""

    }

    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault()

        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((createdUser) => {

                console.log(createdUser)
            })
            .catch((error) => console.log(error))
    }

    render() {

        const { username, email, password, passwordConfirmation } = this.state

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">

                        <Icon name="puzzle piece" color="orange" />
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
                                type="text"
                                fluid
                                name="email"
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={email}
                            />

                            <Form.Input
                                type="password"
                                fluid
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={password}
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
                            />

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>

                    </Form>
                    <Message>Already a User ?
                        <Link to="/login">Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }




}


export default Register; 