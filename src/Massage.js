import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaWhatsapp } from "react-icons/fa";


export default function ContactFeedbackForm() {
    const [loginId, setLoginId] = useState(localStorage.getItem('loginId'));

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile number is required'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            message: '',
            loginId: loginId // Ensure 'loginId' is set correctly
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:8080/massage/addmassage', values);
                console.log(response.data);
                resetForm();
                toast('Feedback submitted successfully!');
                sendWhatsappMessage(values); // Send WhatsApp message on successful submission
            } catch (error) {
                toast('Error submitting feedback');
            }
        },
    });

    const sendWhatsappMessage = (data) => {
        const num = '+91' + 8469263354; // Ensure this number is dynamic if needed
        const sanitizedMessage = `
        Hello Thinkmore.%0a%0a
        My Name: ${encodeURIComponent(data.name.replace(/[^\w\s]/gi, ''))}.%0a%0a
        Message: ${encodeURIComponent(data.message.replace(/[^\w\s.,!?]/gi, ''))}.%0a%0a
        Email: ${encodeURIComponent(data.email.replace(/[^\w@.]/gi, ''))}.%0a%0a
        Contact Number: ${encodeURIComponent(data.mobile)}.
    `;

        const win = window.open(`https://wa.me/${num}?text=${sanitizedMessage}`, '_blank');
        win.focus();
    }

    useEffect(() => {
        if (!loginId) {
            setLoginId(localStorage.getItem('loginId'));
        }                      
    }, []);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Contact and Feedback Form</h2>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                    <Form.Label column sm={3}>
                        Name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.name && !!formik.errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.name}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm={3}>
                        Email
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.email && !!formik.errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formMobile">
                    <Form.Label column sm={3}>
                        Mobile
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            name="mobile"
                            placeholder="Enter your mobile number"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.mobile && !!formik.errors.mobile}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.mobile}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formMessage">
                    <Form.Label column sm={3}>
                        Message
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            name="message"
                            placeholder="Enter your message"
                            rows={5}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.message && !!formik.errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.message}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 9, offset: 3 }}>

                        <Button type="submit" style={{backgroundColor:'green'}}> 
                            <FaWhatsapp className='ms-2' />
                             WhatsApp</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}
