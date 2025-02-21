import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from 'react-bootstrap';
import myimage from './home/IMG_20190808_221828.jpg'
import myimage2 from './home/gopi.jpg'
import myimage3 from './home/vijay.jpg'
import myimage4 from './home/rakesh.jpg'
import myimage5 from './home/sumiteben.jpg'







export default function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
        <div className='mt-5 mb-5' data-aos="zoom-in" data-aos-duration="1200">

            <Slider {...settings}  >
                <div className='box-infor'>

                    <p>"Thinkweb Hub transformed our online presence! Their innovative designs and seamless functionality exceeded our expectations. From start to finish, they were attentive, professional, and delivered on time. We highly recommend their services."					</p>
                    <Row className='pt=5'>
                        <Col lg={3}>   <img width={50} height={50} src={myimage} alt="First Image 1" className='grupimage' /></Col>
                        <Col lg={8}><p>Ashish Nakrani</p>
                            <span className=' white-con'>Director of Anandsports</span>
                        </Col>
                    </Row>
                </div>
                <div className='box-infor'>
                    <p>"We are incredibly impressed with Thinkweb Hub's work! They took our ideas and turned them into a stunning reality. The website they created not only looks fantastic but also functions seamlessly. Their professionalism and attention to detail are unmatched. Highly recommended!"					</p>
                    <Row className='pt=5'>
                        <Col lg={3}>   <img width={50} height={50} src={myimage2} alt="First Image 1" className='grupimage' /></Col>
                        <Col lg={8}><p>Gopal Nakrani</p>
                            <span className=' white-con'>CEO of Focus Odisha</span>
                        </Col>
                    </Row>
                </div>
                <div className='box-infor'>
                    <p> was extremely knowledgeable and helpful in guiding me through the entire process. I am very pleased with the end result and have received many compliments on my new website. I highly recommend </p>
                    <Row className='pt=5'>
                        <Col lg={3}>   <img width={50} height={50} src={myimage3} alt="First Image 1" className='grupimage' /></Col>
                        <Col lg={8}><p>Vijay Maniya</p>
                            <span className=' white-con'>Founder of Audiumclinic</span>
                        </Col>
                    </Row>
                </div>
                <div className='box-infor'>
                    <p>
                        "On a website redesign project. As someone who has limited technical knowledge, I appreciated how the team explained every step of the process in simple terms and made sure I was comfortable with each decision before moving forward."					</p>
                    <Row className='pt=5'>
                        <Col lg={3}>   <img width={50} height={50} src={myimage4} alt="First Image 1" className='grupimage' /></Col>
                        <Col lg={8}><p>Rakesh Nakrani</p>
                            <span className=' white-con'>Director of Anandsports</span>
                        </Col>
                    </Row>
                </div>
                <div className='box-infor'>
                    <p>
                        We are a leading web design and development company, dedicated to providing businesses of all sizes with high-quality, custom-built websites that help them succeed online.
                    </p>
                    <Row className='pt=5'>
                        <Col lg={3}>   <img width={50} height={50} src={myimage5} alt="First Image 1" className='grupimage' /></Col>
                        <Col lg={8}><p>Sumita Savani</p>
                            <span className=' white-con'>Director of Anandsports</span>
                        </Col>
                    </Row>
                </div>
                <div className='box-infor'>
                    <p> "On a website redesign project. As someone who has limited technical knowledge, I appreciated how the team explained every step of the process in simple terms and made sure I was comfortable with each decision before moving forward."
                    </p>
                    <Row className='pt=5'>
                        <Col lg={3}>   <img width={50} height={50} src={myimage} alt="First Image 1" className='grupimage' /></Col>
                        <Col lg={8}><p>ASHISH NAKRANI</p>
                            <span className=' white-con'>Director of Anandsports</span>
                        </Col>
                    </Row>
                </div>
            </Slider >
        </div >
    );
};


