import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
//import { AuthContext } from "../../../../providers/AuthProvider";
//import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
//import app from '../../../firebase/firebase.config';

const Login = () => {
  /* const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    } */

        const {loginUser} = useContext(AuthContext);
        const location = useLocation();
        const from = location?.state?.from?.pathname || '/';
        const navigate = useNavigate()
        const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            navigate(from, {replace: true})
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })

        }


  return (
    <div>
      <Container className="w-25 mx-auto">
        <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          
          <Link></Link>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-secondary">
                   Don't Have an Account? <Link to="/register">Register</Link>
            </Form.Text>
          <Form.Text className="text-success">
             
            </Form.Text>
          <Form.Text className="text-danger">
             
            </Form.Text>
        </Form>
      </Container>

      <br />
      <div className="text-center mt-5">
        <h4>Login With</h4>
        <Button variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <br />
        <Button className="mt-2" variant="outline-secondary">
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </div>
    </div>
  );
};

export default Login;
