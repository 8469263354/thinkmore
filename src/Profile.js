import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import { Button, Container, Modal, Form, Col, Row, Table } from 'react-bootstrap';
import './Profile.css';
import { AuthContext } from './AuthContext.js';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './Firebase';
import { toast } from 'react-toastify';
import search from './home/Screenshot 2024-06-19 193543.png'

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const [show, setShow] = useState(false);
    const { login } = useContext(AuthContext);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: ''
    });

    useEffect(() => {
        if (localStorage.getItem('withgoogle')) {
            fetchUserDatagoogle();
        } else {
            fetchUserData();
        }
    }, []);

    const fetchUserDatagoogle = async () => {
        try {
            const userDocId = localStorage.getItem('withgoogle');
            if (!userDocId) {
                console.error("No document ID found in localStorage for key 'withgoogle'");
                return;
            }
            const userDoc = await getDoc(doc(db, "users", userDocId));
            if (userDoc.exists()) {
                const data = userDoc.data();
                setUserData(data);
                setFormValues({
                    firstName: data.firstName || '',
                    lastName: data.lastName || '',
                    username: data.username || '',
                    city: data.city || '',
                    state: data.state || '',
                    zip: data.zip || ''
                });
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const fetchUserData = async () => {
        let id = localStorage.getItem('loginId');
        try {
            const response = await axios.post('http://localhost:8080/user/logindata', { id: id });
            setUserData(response.data);
            setFormValues({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                username: response.data.username,
                city: response.data.city,
                state: response.data.state,
                zip: response.data.zip
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const withGoogle = localStorage.getItem('withgoogle');
            if (withGoogle) {
                // Update existing user data in Firestore
                const userDoc = doc(db, "users", withGoogle);
                await updateDoc(userDoc, formValues);
                setUserData({ ...userData, ...formValues });
                toast('Profile updated successfully');
            } else if (localStorage.getItem('loginId')) {
                const id = localStorage.getItem('loginId');
                const response = await axios.post('http://localhost:8080/user/update', { id, values: formValues });
                setUserData(response.data);
                fetchUserData()
                toast('Profile updated successfully');
            }
            setShow(false);
        } catch (error) {
            toast('Error submitting form');
            console.error('Error submitting form:', error);
        }
    };

    if (!userData) {
        return <Container>
            <Row lg={3} className='justify-content-center mt-5 pt-5'>
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status" className='display-1'>Search...</span>
                    
                </button>
                <img src={search}></img>
            </Row>
        </Container>
    }

    return (
        <Layout>
            <Container className="mt-5 profile-container">
                <Table striped bordered hover className="profile-table">
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{userData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{userData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{userData.username}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{userData.city}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{userData.state}</td>
                        </tr>
                        <tr>
                            <td>Zip</td>
                            <td>{userData.zip}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={() => setShow(true)} className="me-2">
                    Edit Profile
                </Button>

                <Modal show={show} onHide={() => setShow(false)} aria-labelledby="edit-profile-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="edit-profile-modal">
                            Edit Profile
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formValues.firstName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formValues.lastName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={formValues.username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formValues.city}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="state"
                                    value={formValues.state}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="zip"
                                    value={formValues.zip}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </Layout>
    );
}
