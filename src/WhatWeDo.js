import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa6'
import webdesignimgae from './home/web-de.jpeg'
import webdesignimgae2 from './home/App-Development-e1707888848696.jpg'
import webdesignimgae3 from './home/Mask-group-2.png'

export default function WhatWeDo() {
    return (
        <Container className='back-whatweDo' fluid>
            <Row className='text-center pt-5 pb-5'>
                <h1 className='display-5 fw-semibold mt-auto  white-con'>What We
                    <span className='contact-color'>Are</span></h1>
            </Row>
            <Row className='justify-content-center' data-aos="zoom-in" data-aos-duration="1200">
                <Col lg={3} className='box-design'>
                    <img src={webdesignimgae} className='img-fluid' alt='not'></img>
                    <h1>Web Design</h1>
                    <p>Developing a user-friendly interface to engage more possible customers.
                    </p>
                    <Link to={'/contact'} className='get-contact-design'>more Information<FaPlane className='ms-2' /></Link>

                </Col>
                <Col lg={3} className='box-design'>
                    <img src={webdesignimgae2} className='img-fluid' alt='not'></img>
                    <h1>App Development
                    </h1>
                    <p>  Developing mobile Apps for both IOS and Androids with the latest techniques.
                    </p>
                    <Link to={'/contact'} className='get-contact-design'>more Information<FaPlane className='ms-2' /></Link>

                </Col>  <Col lg={3} className='box-design'>
                    <img src={webdesignimgae3} className='img-fluid' alt='not'></img>
                    <h1>Graphic Design
                    </h1>
                    <p>    Magically designing logos, and other media to build the brand identity.
                    </p>
                    <Link to={'/contact'} className='get-contact-design'>more Information<FaPlane className='ms-2' /></Link>

                </Col>
            </Row>
        </Container>
    )
}
