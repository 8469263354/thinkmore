import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import homeimg from './home/Resize.png'
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa6'


export default function Teamwork() {

    return (
        <Container className='back-teamwork' fluid>
            <Row className='justify-content-center text-center  fs-5  overflow '>

                <Col lg={6} className='mt-5'>
                    <h1 className='display-5 fw-semibold mt-auto  white-con'>Who We

                        <span className='contact-color'>Are</span></h1>
                    <p className='mb-5'>We are a dynamic team of builders, designers, and investors creating disruptive Web3 products and supporting founders on their journey. As a React full-stack developer, I collaborate with this talented crew to deliver innovative solutions that push the boundaries of decentralized technologies.

                    </p>
                    <Link to={'/contact'} className='get-contact mt-5'>Get A Quote <FaPlane /></Link>

                </Col>

                <Col lg={6} data-aos="flip-up" data-aos-duration="1200"> <img src={homeimg} className='img-fluid' alt='not'></img></Col>

            </Row>
        </Container>
    )
}
