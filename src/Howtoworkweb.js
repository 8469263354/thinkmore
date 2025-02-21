import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import howto from './home/images (1).jpg'
import howto2 from './home/How-to-make-a-website-using-WordPress-1-qjjvmmbz4ftldoohjbsc5sieoqfdhtbqmkyieytl4g.png'
import howto3 from './home/webservice.jpeg'


import { BiPaperPlane } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Howtoworkweb() {
    return (
        <Container fluid className='howto-back pt-5 pb-5'>
            <Row className='justify-content-center p-0'>
                <Col lg={3} className='boxboder'>
                    <img className='img-fluid' src={howto} alt='not'></img>
                    <h1 className='white-con'>How to make a website using react? </h1>
                    <p>Here is a step-by-step guide on how to create a website using react.js: Step 1:</p>
                    <Link style={{ textDecoration: 'none' }} onTouchEnd={'Howtoworkweb'} className='white-con fs-5'>read more <BiPaperPlane /></Link>
                </Col>
                <Col lg={3} className='boxboder'>
                    <img className='img-fluid' src={howto2} alt='not'></img>
                    <h1 className='white-con'>What is Web Development? </h1>
                    <p>Front-end Development:  This is the process of creating the visual and interactive components of a…</p>
                    <Link style={{ textDecoration: 'none' }} onTouchEnd={'Howtoworkweb'} className='white-con  fs-5'>read more <BiPaperPlane /></Link>


                </Col>   <Col lg={3} className='boxboder'>
                    <img className='img-fluid' src={howto3} alt='not'></img>
                    <h1 className='white-con'>How You Find Best Hosting Service?</h1>
                    <p>There are several factors to consider when choosing the best hosting service for your website….</p>
                    <Link style={{ textDecoration: 'none' }} onTouchEnd={'Howtoworkweb'} className='white-con  fs-5'  >read more <BiPaperPlane /></Link>


                </Col>
            </Row>
        </Container>
    )
}
