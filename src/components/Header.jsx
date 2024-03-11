import { useState } from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/sitelogo.svg';

import { Link, animateScroll as scroll } from 'react-scroll';
import { FaTwitter, FaPaperPlane, } from "react-icons/fa";

export default function Header() {
    const [fix, setFix] = useState(false)
    function setFixed() {
        if (window.scrollY >= 392) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <>
            <header className={fix ? 'heading fixed' : 'heading'}>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Link to="Dog wif hat" spy={true} smooth={true} offset={50} duration={500} >Dog wif hat</Link>
                                <Link to="services" spy={true} smooth={true} offset={50} duration={500} >BUY WIF US</Link>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >CHART US</Link>
                            </Nav>
                            <div className="social-icon mt-4 mt-lg-0 d-flex align-items-center flex-wrap justify-content-center">
                                <a href="/"><FaPaperPlane /></a>
                                <a href="/"><FaTwitter /></a>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            {/* <a href="#" className="backTop">{FaTwitter} </a> */}
        </>
    );
}