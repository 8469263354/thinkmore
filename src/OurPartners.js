import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Partnersimage1 from './home/google.png'
import Partnersimage2 from './home/azure.png'
import Partnersimage3 from './home/razorpay.png'
import Partnersimage4 from './home/phonepay.png'
import logo from './logo/thinkmore-high-resolution-logo-transparent.png'


export default function OurPartners() {
    return (
        <Container className='background-ourpatness text-center pt-5 pb-5' fluid>
            <Row className='text-center'>
                <h1 className='display-5 fw-semibold   white-con'>Our<span className='contact-color'>Partners</span></h1>
            </Row>
            <Row className='justify-content-center align-items-center '>
                <Col lg={2} sm={2} md={4}><img width={200} className='img-fluid grupimageourpa ' src={Partnersimage1} alt='not'></img>

                </Col>
                <Col lg={2} sm={2} md={4}><img width={200} className='img-fluid grupimageourpa mb-3 ' src={Partnersimage2} alt='not'></img>

                </Col> <Col lg={2} sm={2} md={4}><img width={200} className='img-fluid grupimageourpa mb-3' src={Partnersimage3} alt='not'></img>

                </Col> <Col lg={2} sm={2} md={4}><img width={200} className='img-fluid grupimageourpa mb-3' src={Partnersimage4} alt='not'></img>

                </Col>
            </Row>
            <Row className='mt-5'>
                <h1 className='display-5 fw-semibold   white-con'>Technologies We<span className='contact-color'>Working With</span></h1>
            </Row>
            <Row className='justify-content-center align-items-center mt-5 '>
                <Col class=" landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/1-1.png" class="attachment-full size-full" alt="Wordpress">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/3-1.png" class="attachment-full size-full" alt="Photoshop">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/4-1.png" class="attachment-full size-full" alt="Html">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/5-1.png" class="attachment-full size-full" alt="Css">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/6-1.png" class="attachment-full size-full" alt="Php">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/8-1.png" class="attachment-full size-full" alt="Android">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/9-1.png" class="attachment-full size-full" alt="Flutter">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/10-1.png" class="attachment-full size-full" alt="Mysql">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/11-1.png" class="attachment-full size-full" alt="javascript">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="125" height="125" src="https://thinkwebhub.com/wp-content/uploads/2023/11/12-1.png" class="attachment-full size-full" alt="Jquery">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="110" height="110" src="https://thinkwebhub.com/wp-content/uploads/2023/12/2.png" class="attachment-full size-full" alt="Figma">
                    </img></Col>
                <Col class="landscape gap-1 mt-2">
                    <img loading="lazy" className='img-fluid' decoding="async" width="110" height="110" src="https://thinkwebhub.com/wp-content/uploads/2023/12/7.png" class="attachment-full size-full" alt="Node js">
                    </img></Col>
            </Row>
            <Row className='text-center justify-content-center pb-3 pt-4'>
                <Col lg={12}>  <img className='ball-rout1' style={{ width: '7%' }} src={logo}></img>

                    <span className='contact-color fs-1 '>   Thinkmore...</span>
                </Col>
            </Row>

        </Container>
    )
}
