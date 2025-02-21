import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Regisrt.css';
import styled from 'styled-components';
import Layout from './Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { db } from './Firebase'; // Ensure correct import path
import { doc, updateDoc } from 'firebase/firestore';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
    password: Yup.string().required('Password is required'),
    terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

const SectionTitle = styled.h2`
  color: #f39c12;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #333333;
`;

const StyledButton = styled.a`
  display: inline-block;
  background-color: #f39c12;
  color: #ffffff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
`;

const FooterText = styled.p`
  margin: 0;
`;



export default function Moreinfogoogleuser() {

    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            state: '',
            zip: '',
            password: '',
            terms: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const withGoogle = localStorage.getItem('withgoogle');
                if (withGoogle) {
                    // Update existing user data in Firestore
                    const userDoc = doc(db, "users", withGoogle);
                    await updateDoc(userDoc, values);
                    console.log("Document successfully updated!");
                } else if (localStorage.getItem('loginId')) {
                    const response = await axios.post('http://localhost:8080/user/add', values);
                    console.log(response.data);
                }
                setShow(true);
                toast('Submitted successfully');
                formik.resetForm();
            } catch (error) {
                toast('Error submitting form');
                console.error('Error submitting form:', error);
            }
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleClose = () => {
        setShow(false);
        navigate('/login');
    };

    return (
        <Layout>
            <Container fluid>
                <Row className='login-backround'>
                    <Col lg={4} sm={4} md={6} className='ms-auto'>
                        <h1 className='text-center contact-color'>Add more</h1>
                        <Form noValidate onSubmit={formik.handleSubmit} className='registrbox body1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.lastName && !!formik.errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.city && !!formik.errors.city}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.state && !!formik.errors.state}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.state}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="zip"
                                        placeholder="Zip"
                                        value={formik.values.zip}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.zip && !!formik.errors.zip}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.zip}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Row} md="3" controlId="validationCustom06">
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
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    name="terms"
                                    label="Agree to terms and conditions"
                                    onChange={formik.handleChange}
                                    isInvalid={formik.touched.terms && !!formik.errors.terms}
                                    feedback={formik.errors.terms}
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>✨ Register successfully ✨</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <SectionTitle>Hello Beautiful Souls,</SectionTitle>
                                <Paragraph>We are excited to announce some fabulous news from marketing book!</Paragraph>
                                <Paragraph>
                                    <StyledButton href="Your Booking URL">Book Your Appointment Today!</StyledButton>
                                </Paragraph>
                                <Paragraph>
                                    Visit our website www.Ashishmarketing or call us at +918469263354 to book your appointment and take
                                    advantage of these fantastic offers. Follow us on Social Media Handles for the latest updates and hair
                                    inspiration.
                                </Paragraph>
                            </Modal.Body>
                            <Modal.Footer>
                                <FooterText>Stay Fabulous,<br />Ashish<br />Nakrani</FooterText>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
