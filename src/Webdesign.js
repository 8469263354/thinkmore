import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import design from './home/brooke-cagle-NoRsyXmHGpI-unsplash-1.png'
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa6'



export default function Webdesign() {

    return (
        <Container className='back-webdesign pt-5 pb-5' fluid>
            <Row className='justify-content-center text-leif  fs-5   overflow'>
                <Col lg={6}> <img src={design} className='img-fluid ' data-aos="zoom-out-up" data-aos-duration="1000" alt='not'></img></Col>
                <Col lg={6} className='mt-5 pb-5' data-aos="fade-left" data-aos-duration="1000">
                    <Row>
                        <h1 className='fs-3 fw-semibold   white-con'>We Design,
                        </h1>
                    </Row>
                    <Row >  <h1 className='fs-1 fw-semibold pb-4   white-con '>Builds Brand &
                        <br />
                        Digital Project <span className='contact-color'>Designs</span></h1>
                        <p className='mb-5 pb-4 pt-3 '>
                          As a leading web design and development team, we are committed to delivering high-quality, custom-built websites for businesses of all sizes. Specializing in React full-stack development, we create scalable digital solutions that help brands thrive and succeed in the online world. </p></Row>
                    <Link to={'/contact'} className='get-contact mt-5 '>Get A Quote <FaPlane /></Link>

                </Col>
            </Row>
        </Container>
    )
}
