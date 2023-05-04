/* eslint-disable no-unused-vars */
import { Button } from 'bootstrap';
import React from 'react';
import { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Rsgister = () => {

    const { createUser } = useContext(AuthContext);

    const handleRsgister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email =form.email.value;
        const password =form.password.value;

        createUser(email,password,photo)
        .then(result => {
            const createdUser =result.user;
            console.log(createdUser);
        })

        .catch(error =>{
            console.log(error);
        })
    }
  
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRsgister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept terms & condition" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>

                <br />

                <Form.Text className="text-secondary">
                    Already have an Account? <Link to="/login">Login</Link>
                </Form.Text>

                <Form.Text className="text-success">
                    We will never share your email with anyone else.
                </Form.Text>
                <Form.Text className="text-danger">
                    We will never share your email with anyone else.
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Rsgister;