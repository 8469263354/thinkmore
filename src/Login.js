import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import './Regisrt.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup, db } from './Firebase.js';
import { FcGoogle } from "react-icons/fc";
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthContext.js';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import Layout from './Layout.js';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();
    const { setLogin } = useContext(AuthContext);


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:8080/user/login', values);
                if (response.data) {
                    localStorage.setItem('loginId', response.data[0]._id);
                    setLogin(response.data[0].username);
                    toast('Logged in successfully');
                    navigate('/');
                } else {
                    toast('Login failed, please check your credentials');
                    setLoginFailed(true);
                }
            } catch (error) {
                toast('Error logging in');
                console.error('Error logging in:', error);
                setLoginFailed(true);
            }
        },
    });

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem('withgoogle', user.uid);

            const userPayload = {
                firstName: user.displayName,
                email: user.email,

                // email: user.email,
            };

            // Add user data to Firestore
            const userDoc = doc(db, 'users', user.uid);
            await setDoc(userDoc, userPayload);

            setLogin(user.displayName);
            toast('Logged in successfully with Google');
            navigate('/moreinfoadd');
        } catch (error) {
            console.error('Error with Google Sign-In:', error);
            toast('Google Sign-In failed, please try again');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const registerBox = () => {
        navigate('/register');
    };

    return (
        <Layout>
            <Container fluid>
                <Row className='login-backround'>
                    <Col lg={4} className='ms-auto'>
                        <Form noValidate onSubmit={formik.handleSubmit} className='mt-5 mb-5 registrbox body1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            isInvalid={formik.touched.username && !!formik.errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.username}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustomPassword">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            isInvalid={formik.touched.password && !!formik.errors.password}
                                        />
                                        <InputGroup.Text className="password-toggle" onClick={togglePasswordVisibility}>
                                            {showPassword ? 'Hide' : 'Show'}
                                        </InputGroup.Text>
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.password}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            {loginFailed && (
                                <Alert variant="danger" onClose={() => setLoginFailed(false)} dismissible>
                                    Invalid username or password. Please try again.
                                </Alert>
                            )}
                            <Button type="submit">Login</Button>
                            <Row className='justify-content-center text-center mt-5'>
                                <h3>Don't have an account? <Button onClick={registerBox}>Register</Button></h3>
                                <h1>Or</h1>
                                <span onClick={handleGoogleSignIn} className="mt-3 signwithggoofle"><FcGoogle /> Sign in with Google</span>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>

    );
}
