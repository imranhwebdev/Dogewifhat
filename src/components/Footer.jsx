import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footerlogo.svg'
import { FaTwitter, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    const fTitle = "Never miss a drop!";
    const btnTxt = "Join our DISCORD";
    const btnLink = "https://google.com";
    const icon_3 = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.973 2H8.59296C4.95296 2 2.78296 4.17 2.78296 7.81V16.18C2.78296 19.83 4.95296 22 8.59296 22H16.963C20.603 22 22.773 19.83 22.773 16.19V7.81C22.783 4.17 20.613 2 16.973 2ZM9.89296 16.9C9.89296 17.18 9.67296 17.4 9.39296 17.4H6.60296C6.32296 17.4 6.10296 17.18 6.10296 16.9V12.28C6.10296 11.65 6.61296 11.14 7.24296 11.14H9.39296C9.67296 11.14 9.89296 11.36 9.89296 11.64V16.9ZM14.673 16.9C14.673 17.18 14.453 17.4 14.173 17.4H11.383C11.103 17.4 10.883 17.18 10.883 16.9V7.74C10.883 7.11 11.393 6.6 12.023 6.6H13.543C14.173 6.6 14.683 7.11 14.683 7.74V16.9H14.673ZM19.463 16.9C19.463 17.18 19.243 17.4 18.963 17.4H16.173C15.893 17.4 15.673 17.18 15.673 16.9V13.35C15.673 13.07 15.893 12.85 16.173 12.85H18.323C18.953 12.85 19.463 13.36 19.463 13.99V16.9Z" fill="currentColor"/>
                    </svg>`;
    const icon_4 = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.083 12.23H18.603C17.623 12.23 16.753 12.77 16.313 13.65L15.473 15.31C15.273 15.71 14.873 15.96 14.433 15.96H11.153C10.843 15.96 10.403 15.89 10.113 15.31L9.27296 13.66C8.83296 12.79 7.95296 12.24 6.98296 12.24H3.48296C3.09296 12.24 2.78296 12.55 2.78296 12.94V16.2C2.78296 19.83 4.96296 22 8.60296 22H16.983C20.413 22 22.523 20.12 22.783 16.78V12.93C22.783 12.55 22.473 12.23 22.083 12.23Z" fill="currentColor"/>
                        <path d="M16.973 2H8.59296C4.95296 2 2.78296 4.17 2.78296 7.81V10.85C3.00296 10.77 3.24296 10.73 3.48296 10.73H6.98296C8.53296 10.73 9.92296 11.59 10.613 12.98L11.363 14.45H14.223L14.973 12.97C15.663 11.59 17.053 10.73 18.603 10.73H22.083C22.323 10.73 22.563 10.77 22.783 10.85V7.81C22.783 4.17 20.613 2 16.973 2ZM11.233 5.41H14.333C14.713 5.41 15.033 5.72 15.033 6.1C15.033 6.49 14.713 6.8 14.333 6.8H11.233C10.853 6.8 10.533 6.49 10.533 6.1C10.533 5.72 10.853 5.41 11.233 5.41ZM15.113 9.59H10.453C10.073 9.59 9.76296 9.28 9.76296 8.9C9.76296 8.51 10.073 8.2 10.453 8.2H15.113C15.493 8.2 15.803 8.51 15.803 8.9C15.803 9.28 15.493 9.59 15.113 9.59Z" fill="currentColor"/>
                    </svg>`;
    return (
        <footer className="footer position-relative z-1 overflow-hidden">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <div className='footer-top'>
                            <h2 className='text-uppercase'>{fTitle}</h2>
                            <a href={btnLink} className='btn text-uppercase'>{btnTxt}</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="footer-wrap d-flex align-items-center gap-4 justify-content-between flex-wrap">
                            <a href="/" className='footer-logo'>
                                <img src={FooterLogo} alt="" />
                            </a>
                            <ul className='footer-menu text-center'>
                                <li><a href="/">Dog wif hat</a></li>
                                <li><a href="/">BUY WIF US</a></li>
                                <li><a href="/">CHART US</a></li>
                            </ul>
                            <ul className='social-icon d-flex align-items-center justify-content-center'>
                                <li><a href="/"> <FaTwitter /> </a></li>
                                <li><a href="/"> <FaPaperPlane /> </a></li>
                                <li><a href="/" dangerouslySetInnerHTML={{ __html: icon_3 }}></a></li>
                                <li><a href="/" dangerouslySetInnerHTML={{ __html: icon_4 }}></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                {/* <Row className='footerB align-items-center'>
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
                </Row> */}
            </Container>
        </footer>
    )
}