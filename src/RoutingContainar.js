import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Layout from './Layout';
import Registar from './Registar';
import Login from './Login';
import Profile from './Profile';
import Contact from './Contact';
import Ourservice from './Ourservice';
import WebsiteDevelopment from './WebsiteDevelopment';
import Howtoworkweb from './Howtoworkweb';
import OurPartners from './OurPartners';
import OurPortfolio from './OurPortfolio';
import Aos from 'aos';
import Moreinfogoogleuser from './Moreinfogoogleuser';
import UserHistory from './UserHistory';

export default function RoutingContainar() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <BrowserRouter>
            <Routes>

                <Route >
                  
                    <Route path="Layout" element={<Layout />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Registar />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/Ourservice' element={<Ourservice />} />
                    <Route path='/WebsiteDevelopment' element={<WebsiteDevelopment />} />
                    <Route path='/Howtoworkweb' element={<Howtoworkweb />} />
                    <Route path='/OurPartners' element={<OurPartners />} />
                    <Route path='/OurPortfolio' element={<OurPortfolio />} />
                    <Route path='/moreinfoadd' element={<Moreinfogoogleuser />} />
                    <Route path="/user-history" element={<UserHistory />} />



                </Route>
            </Routes>
        </BrowserRouter >
    )
}
