import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from './Layout'
import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Massage from './Massage';
import logo from './logo/thinkmore-high-resolution-logo-transparent.png'

export default function Contact() {



    return (
        <Layout>
            <Container className='background-contact' fluid>
                <Row className='text-center pb-5 pt-5'>
                    <h1 className='display-3 fw-semibold white-con ' >Contact <span className='contact-color'>US</span></h1>
                </Row>

                <Row className='text-center'>
                    <h1 className='display-5  white-con'>Our Contact<span className='contact-color'> Information</span></h1>
                </Row>
                <Row className='text-center justify-content-center gap-4 mt-5 mb-5 ms-4 me-4'>
                    <Col lg={3} className='contact-box'>
                        <h1 className='contact-color'><FaLocationDot />
                        </h1>
                        <h2 className='contact-color'>Address</h2>
                        <p>304, Mahadev Chowk, Dhara Arcade, near, Lajamni Chowk, Maruti Dham Society, Mota Varachha, Surat, Gujarat 39410</p>
                    </Col>
                    <Col lg={3} className='contact-box'><h1 className='contact-color'><FaPhoneAlt />
                    </h1>
                        <h2 className='contact-color'>Phone</h2>
                        <p>+91-8469263354</p></Col>
                    <Col lg={3} className='contact-box'>
                        <h1 className='contact-color'><IoMdMail />
                        </h1>
                        <h2 className='contact-color'>Mail</h2>
                        <p>web@thinkmore.in</p></Col>

                </Row>
                <Row className='text-center justify-content-center pt-4 mt-5 mb-5' >
                    <Col lg={5} className='m-auto ' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5598.893000164727!2d72.88211515468329!3d21.23704791585813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa5461ed579%3A0x9dd86eb5467765f4!2sDecode%20Softtech!5e0!3m2!1sen!2sin!4v1716297123102!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    <Col lg={5} className='contact-box1 mt-5'>
                        <Row><h1>Let's <span className='contact-color'>Talk</span></h1></Row>
                        <Massage />
                    </Col>
                </Row>
                <Row className='text-center justify-content-center pb-5'>
                    <Col lg={12}>  <img className='ball-rout' style={{ width: '7%' }} src={logo}></img>

                        <span className='contact-color fs-1 '>   Thinkmore...</span>
                    </Col>
                </Row>
            </Container>

        </Layout>
    )
}
