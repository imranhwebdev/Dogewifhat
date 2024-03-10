import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footerlogo.svg'
import { FaTwitter, FaPaperPlane } from "react-icons/fa";
import icon3 from '../assets/img/chart-square.svg'
import icon4 from '../assets/img/direct.svg'
export default function Footer(){
    const fTitle = "Never miss a drop!";
    const btnTxt = "Join our DISCORD";
    const btnLink = "https://google.com";
    return(
        <footer className="footer">
           <Container>
                <Row className='footerT'>
                    <Col className='text-center'>
                        <h2>{fTitle}</h2>
                        <a href={btnLink} className='boxedBtn'>{btnTxt}</a>
                    </Col>
                </Row>
                <Row className='footerB align-items-center'>
                    <Col md={4}>
                        <a href="/" className='footer-logo'>
                            <img src={FooterLogo} alt="" />
                        </a>
                    </Col>
                    <Col md={4}>
                        <ul className='footerMenu text-center'>
                            <li><a href="/">Dog wif hat</a></li>
                            <li><a href="/">BUY WIF US</a></li>
                            <li><a href="/">CHART US</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul className='footer-social-logos'>
                            <li><a href="/"> <FaTwitter /> </a></li>
                            <li><a href="/"> <FaPaperPlane /> </a></li>
                            <li><a href="/"><img src={icon3} alt="" /></a></li>
                            <li><a href="/"><img src={icon4} alt="" /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}