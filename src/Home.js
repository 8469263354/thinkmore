import React from 'react'
import Layout from './Layout'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { FaPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Teamwork from './Teamwork';
import Webdesign from './Webdesign';
import WhatWeDo from './WhatWeDo';
import Overwork from './Overwork';
import OurTestimonials from './OurTestimonials';
import Howtoworkweb from './Howtoworkweb';
import OurPartners from './OurPartners';



export default function Home() {
    return (
        <Layout>
            <Container className='background-home text-center pt-5 pb-5' fluid>
                <Row>
                    <h1 className='display-5 fw-semibold   white-con'>Crafting<span className='contact-color'>Your</span></h1>
                </Row>
                <Row className='typewriter'>  <h1 className='display-3 fw-semibold   white-con '>Web Destiny <br />
                    Starts  <span className='contact-color'>Here</span></h1></Row>
                <Row className='justify-content-center whitetext fs-5 '>
                    <Col className='text-center' lg={6}> We are a team of forward-thinking builders, designers, and investors creating disruptive Web3 solutions. As a full-stack React developer, I build powerful, end-to-end applications that empower founders and shape the future of decentralized technologies.</Col>
                </Row>
                <Row className='justify-content-center  fs-5 mt-5  '>

                    <Link to={'/contact'} className='get-contact'>Get A Quote <FaPlane /></Link>

                </Row>

            </Container>
            <Teamwork />
            <Webdesign />
            <WhatWeDo />
            <Overwork />
            <OurTestimonials />

            <Howtoworkweb />
            <OurPartners />


        </Layout >
    )
}

