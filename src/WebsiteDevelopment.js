import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from './Layout'
import './Contact.css'
import logo from './logo/thinkmore-high-resolution-logo-transparent.png'
import WebsiteDevelopmentimage from './home/1.png'
import { FaPlane } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Overwork from './Overwork'




export default function WebsiteDevelopment() {

    return (
        <Layout>
            <Container className='background-contact' fluid>
                <Row className='text-center pb-5 pt-5'>
                    <h1 className='display-3 fw-semibold white-con ' >Website <span className='contact-color'> Development</span></h1>
                    <p className='fs-3'>Design your thoughts with a valid interface.</p>
                </Row>


                <Row className='text-leif justify-content-center pt-4 mt-5 mb-5' >
                    <Col lg={5} className='m-auto  ' >
                        <Row className='white-con '><h1>Creative Solutions for <span className='contact-color'>Your Business</span></h1>
                            <p className='fs-6'>
                                At <b>Thinkmore</b>, we believe that a website is more than just an online presence. It’s a representation of your brand, your values, and your unique identity. That’s why we work closely with our clients to understand their vision, objectives, and target audience. We take the time to ask the right questions and listen to your feedback, so we can create a website that truly reflects your business.
                            </p>
                            <p className='fs-6'> Our web design and development process is tailored to meet the unique needs of each client. We start by creating a detailed plan that outlines the scope of the project, the timeline, and the budget. Then, our talented designers will work to create a visually stunning website that is consistent with your brand identity and appeals to your target audience. Our developers will then bring the design to life, ensuring that the website is optimized for speed, security, and mobile responsiveness.</p>
                        </Row>

                    </Col>
                    <Col lg={5} className='contact-box1'>
                        <h1>Features Benefits</h1>
                        <ul>
                            <li><span className='fs-5'> Continuous Improvement</span></li>
                            <li><span className='fs-5'> Streamlined Processes</span></li>
                            <li><span className='fs-5'> Value-added Services</span></li>
                            <li><span className='fs-5'> Tailored Solutions</span></li>
                            <li><span className='fs-5'> Delivery On Time</span></li>
                            <li><span className='fs-5'> 24 x 7 Support</span></li>

                        </ul>

                        <Row>
                            <h1>Suggest For</h1>
                            <span className='tag ps-3'>#Smallsizebusiness</span>
                            <span className='tag ps-3'>#GrowingCompanies</span>

                            <span className='tag ps-3'>#MidsizeCompanies</span>
                            <span className='tag ps-3'>#Established Businesses</span>

                        </Row>
                    </Col>
                </Row>
                <Row className='justify-content-center text-leif  fs-5  pt-5 pb-5 '>

                    <Col lg={6} className='mt-5'>
                        <h1 className='display-5 fw-semibold mt-auto  white-con'>
                            Develop your dreams
                            <span className='contact-color'>digitally</span></h1>
                        <p className='mb-5'> At <b>
                            Thinkmore</b>, we are committed to providing exceptional service and support throughout the entire web design and development process. We believe that communication is key, and we will keep you updated every step of the way. Our goal is to deliver a website that not only meets your expectations but exceeds them.     </p>

                    </Col>

                    <Col lg={5}> <img src={WebsiteDevelopmentimage} className='img-fluid' alt='not'></img></Col>

                </Row>
                <Row className='justify-content-center text-center pt-5 pb-5  '>

                    <Col lg={6}>     <h1 className=' white-con '>Get Free Consultation Now!</h1>
                        <p>Let’s create a powerful website that grows with your business.</p></Col>

                    <Col lg={6} className='mt-4'>     <Link to={'/contact'} className='Cousolt'>Cousolt Now <FaPlane /></Link> </Col>
                </Row>


                <Overwork />

                <Row className='text-center justify-content-center pb-5'>
                    <Col lg={12}>  <img style={{ width: '7%' }} className='ball-rout' src={logo} alt='not'></img>

                        <span className='contact-color fs-1' >   Thinkmore...</span>
                    </Col>


                </Row>
            </Container>

        </Layout>
    )
}
