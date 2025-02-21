import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa6'
import webdesignimgae from './home/web-de.jpeg'
import webdesignimgae2 from './home/App-Development-e1707888848696.jpg'
import webdesignimgae3 from './home/Mask-group-2.png'
import webdesignimgae4 from './home/10001-1.jpg'
import webdesignimgae5 from './home/pexels-mikael-blomkvist-6483582.jpg'
import Layout from './Layout'




export default function Ourservice() {

    return (
        <Layout>
            <Container className='background-home text-center pt-5 pb-5' fluid>
                <Row>
                    <h1 className='display-5 fw-semibold   white-con typewriter' >Our<span className='contact-color'>Services</span></h1>
                </Row>

                <Row className='justify-content-center'>
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
                    <Col lg={3} className='box-design'>
                        <img src={webdesignimgae3} className='img-fluid' alt='not'></img>
                        <h1>Domain & Hosting</h1>
                        <p>Looking for reliable domain and hosting services to host your website at the top?
                        </p>
                        <Link to={'/contact'} className='get-contact-design'>more Information<FaPlane className='ms-2' /></Link>

                    </Col>
                    <Col lg={3} className='box-design'>
                        <img src={webdesignimgae5} className='img-fluid' alt='not'></img>
                        <h1>Digital Marketing
                        </h1>
                        <p> Whether you’re looking to improve your website’s search engine rankings, generate more leads through social media advertising.
                        </p>
                        <Link to={'/contact'} className='get-contact-design'>more Information<FaPlane className='ms-2' /></Link>

                    </Col>  <Col lg={3} className='box-design'>
                        <img src={webdesignimgae4} className='img-fluid' alt='not'></img>
                        <h1>Website Maintenance
                        </h1>
                        <p> From regular updates to site backups, security checks, and performance optimization.
                        </p>
                        <Link to={'/contact'} className='get-contact-design'>more Information<FaPlane className='ms-2' /></Link>

                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
