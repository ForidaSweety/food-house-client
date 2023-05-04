/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
    const [user,setUser] =useState(null);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser()
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })

    }

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/info/0'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

            })

            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <br />

                <Form.Text className="text-secondary">
                    Do not have an Account? <Link to="/register">Register</Link>
                </Form.Text>

                <Form.Text className="text-success">
                    We will never share your email with anyone else.
                </Form.Text>
                <Form.Text className="text-danger">
                    We will never share your email with anyone else.
                </Form.Text>
            </Form>
            <div>
                <Button onClick={handleGoogleSignIn}>Google Login</Button>
            </div>
            <div>
                <Button onClick={handleGithubSignIn}>Login with Github</Button>
            </div>
        </Container>
    );
};

export default Login;