import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 back-header-c ">
            <div class="vav-container">
                <div class="vav-div vav-div-1"></div>
                <div class="vav-div vav-div-2"></div>
                <div class="vav-div vav-div-3"></div>

                <Container >
                    <Row>

                        <Col md={4}>
                            <h5>Contact Us</h5>
                            <p>Email: web@thinkmore.in</p>
                            <p>Phone: (+91)8469263354</p>

                        </Col>
                        <Col md={4}>
                            <h5>Quick Links</h5>
                            <Nav className="flex-column">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/WebsiteDevelopment" className="nav-link">Services</Link>

                                <Link to="/contact" className="nav-link">Contact</Link>
                            </Nav>
                        </Col>
                        <Col md={4}>
                            <h5>Follow Us</h5>
                            <Nav className="flex-column">
                                <h5>
                                    <a className='fs-2'> <BsFacebook className='ps-2' /> </a>
                                   
                                    <a href='https://www.instagram.com/ashish_nakrani88/?next=%2F' className='fs-2'> <FaInstagram className='ps-2' /></a>
                                    <a href='https://api.whatsapp.com/send?phone=+918469263354' className='fs-2'>  <BsWhatsapp className='ps-2' /></a>
                                </h5>
                                {/* <Nav.Link href="#facebook" className="text-light">Facebook</Nav.Link>
                                <Nav.Link href="#twitter" className="text-light">Twitter</Nav.Link>
                                <Nav.Link href="#instagram" className="text-light">Instagram</Nav.Link>
                                <Nav.Link href="#linkedin" className="text-light">LinkedIn</Nav.Link> */}
                            </Nav>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </footer>
    );
}
