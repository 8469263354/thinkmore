import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ImageSlider from './ImageSlider';



export default function OurTestimonials() {

    return (
        <Container className='slider-color pt-5 pb-5' fluid>
            <Row className='justify-content-center'>
                <h1 className='display-5 fw-semibold white-con'>
                    Our <span className='contact-color'>Testimonials</span>
                </h1>
            </Row>
            <Row className='pt-5'>
                <ImageSlider  />
            </Row>
        </Container>
    )
}
