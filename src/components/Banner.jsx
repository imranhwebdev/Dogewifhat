import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaMediumM, FaTwitter, FaPaperPlane} from "react-icons/fa";
import bannerImg from '../assets/img/hero.png'
import herosociallogo1 from '../assets/img/hero-social-logo-1.svg'
export default function Banner(){
    return(
        <div className="banner">
            <div className="banner-wrapper">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7} className="order-2 order-lg-1">
                            <div className="banner-content">
                                <span className='text-primary d-block text-uppercase fw-bold'>This means of course </span>
                                <h1 className='text-white'>O<sub>saka protocol</sub></h1>
                                <p>This means of course that we are setting a few “rules” for Phase 1 of Osaka Protocol (Phase 2 to be revealed shortly) , which emulate the original rules of Shiba Inu.</p>
                                <div className="btn-with-social">
                                    <a href="#" className="base-btn">Buy on Uniswap</a>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="/"><FaTwitter /></a></li>
                                            <li><a href="/"><FaPaperPlane /></a></li>
                                            <li><a href="/"><FaMediumM /></a></li>
                                            <li><a href="/"><img src={herosociallogo1} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className='text-end order-1 order-lg-2'>
                            <div className="banner-img">
                                <firure className="banner-right-img">
                                    <img src={bannerImg} alt="" />
                                </firure>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
