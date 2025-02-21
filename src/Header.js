import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './logo/thinkmore-high-resolution-logo-transparent.png';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { AuthContext } from './AuthContext.js';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Header() {
    const { login, setLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('loginId')) {
            fetchUserData();
        } else if (localStorage.getItem('withgoogle')) {
            setLogin(login);
        }
    }, [setLogin]);

    const handleLogin = () => {
        navigate('/login');
    };

    const goToProfile = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            toast("Logout successfully!");
            localStorage.removeItem("loginId");
            localStorage.removeItem("withgoogle");
            setLogin(null);
            navigate('/');
        }).catch((error) => {
            console.error("Error logging out: ", error);
        });
    };

    const fetchUserData = async () => {
        let id = localStorage.getItem('loginId');
        if (id) {
            try {
                const response = await axios.post('http://localhost:8080/user/logindata', { id: id });
                setLogin(response.data.firstName); // Update context state
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
    };

    const handleOffcanvasClose = () => setShowOffcanvas(false);
    const handleOffcanvasShow = () => setShowOffcanvas(true);

    return (
        <Navbar style={{height:'70px'}} expand="lg" className="bg-body-tertiary back-header-c">
            <Container  fluid>
                <Navbar.Brand href="#" style={{ height: '70px' }}>
                    <Link to={'/'} > <img width={70} className='ball-rout' src={logo} alt="Logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle onClick={handleOffcanvasShow} aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={showOffcanvas}
                    onHide={handleOffcanvasClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Link to="/" className="nav-link" onClick={handleOffcanvasClose}>Home</Link>
                            <Link to="/WebsiteDevelopment" className="nav-link scroll-top" onClick={handleOffcanvasClose}>Services</Link>
                            <Link to="/OurPortfolio" className="nav-link" onClick={handleOffcanvasClose}>Portfolio</Link>
                            <Link to="/contact" className="nav-link" onClick={handleOffcanvasClose}>Contact</Link>
                        </Nav>
                        <Nav className='me-5'>
                            {login ? (
                                <NavDropdown title={login} id="navbarScrollingUserDropdown" className='pe-5'>
                                    <NavDropdown.Item onClick={() => { goToProfile(); handleOffcanvasClose(); }}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { handleLogout(); handleOffcanvasClose(); }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Button variant="outline-success" onClick={handleLogin}>Login</Button>
                            )}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
