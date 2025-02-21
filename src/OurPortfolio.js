import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import webdesignimgae from './home/2.png'
import webdesignimgae2 from './home/3.png'
import webdesignimgae3 from './home/4.png'
import webdesignimgae11 from './home/11-1.png'
import webdesignimgae122 from './home/12.jpg'
import webdesignimgae13 from './home/13post-5.jpg'
import webdesignimgae14 from './home/14post-7.jpg'
import webdesignimgae15 from './home/15.png'
import webdesignimgae16 from './home/16eviman.png'



import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa6'
import Layout from './Layout'

export default function OurPortfolio() {
    return (
        <Layout>
            <Container className='background-home' fluid>
                <Row className='text-center pb-5 pt-5'>
                    <h1 className='display-3 fw-semibold white-con ' >Our <span className='contact-color'>Portfolio</span></h1>
                </Row>


                <Row className='justify-content-center pt-5 pb-5'>
                    <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae} className='img-fluid redus-border redus-border' alt='not'></img>
                        <h1>Ayas Designs</h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>
                    <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae2} className='img-fluid redus-border' alt='not'></img>
                        <h1>Senapati Industries
                        </h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>  <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae3} className='img-fluid redus-border' alt='not'></img>
                        <h1>Eviman
                        </h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>

                </Row>
                <Row className='justify-content-center pt-5 pb-5'>
                    <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae11} className='img-fluid redus-border' alt='not'></img>
                        <h1>GrowMyCony</h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>
                    <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae122} className='img-fluid redus-border' alt='not'></img>
                        <h1>Anandfitness
                        </h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>  <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae13} className='img-fluid redus-border' alt='not'></img>
                        <h1>Debadatta Club
                        </h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>

                </Row> <Row className='justify-content-center pt-5 pb-5'>
                    <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae14} className='img-fluid redus-border' alt='not'></img>
                        <h1>Sarbanetra Infrastructure</h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>
                    <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae15} className='img-fluid redus-border' alt='not'></img>
                        <h1>Audium
                        </h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>  <Col lg={3} className='box-designwebdevelopment'>
                        <img src={webdesignimgae16} className='img-fluid redus-border' alt='not'></img>
                        <h1>Eviman
                        </h1>

                        <Link to={'/contact'} className='get-contact-design'>view site<FaPlane className='ms-2' /></Link>

                    </Col>

                </Row>
            </Container>
        </Layout>
    )
}
