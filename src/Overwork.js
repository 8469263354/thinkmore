import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import webdesignimgae from './home/2.png'
import webdesignimgae2 from './home/3.png'
import webdesignimgae3 from './home/4.png'
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa6'

export default function Overwork() {
    return (
        <Container className='background-home' fluid>
            <Row className='pt-5 pb-5 text-center'>
                <h1 className='display-5 fw-semibold mt-auto  white-con'>
                    Our
                    <span className='contact-color'>Work</span></h1>
            </Row>


            <Row className='justify-content-center pt-5 pb-5' data-aos="zoom-in" data-aos-duration="1200">
                <Col lg={3} className='box-designwebdevelopment'>
                    <img src={webdesignimgae} className='img-fluid' alt='not'></img>
                    <h1>Ayas Designs</h1>

                    <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                </Col>
                <Col lg={3} className='box-designwebdevelopment'>
                    <img src={webdesignimgae2} className='img-fluid' alt='not'></img>
                    <h1>Senapati Industries
                    </h1>

                    <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                </Col>  <Col lg={3} className='box-designwebdevelopment'>
                    <img src={webdesignimgae3} className='img-fluid' alt='not'></img>
                    <h1>Niladrisaya Media
                    </h1>

                    <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                </Col>
            </Row>
        </Container>
    )
}
