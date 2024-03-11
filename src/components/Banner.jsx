import { Container, Row, Col } from "react-bootstrap";
import img from '../assets/img/banner-img.png'

export default function Banner() {
    return (
        <div className="banner-area position-relative z-1">
            <a href="#about" className="banner-scroll text-uppercase position-absolute top-100 start-0">
                <svg width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0699 18.5697L3.99995 12.4997L10.0699 6.42969" stroke="#353544" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M41 12.5L4.17 12.5" stroke="#353544" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg> scroll down
            </a>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} lg={6}>
                        <div className="banner-wrap">
                            <h1 className="text-uppercase mb-3 d-flex align-items-center">WHAT IS
                                <span>
                                    <span className="m-0">wif</span>
                                </span>
                            </h1>
                            <p className="fw-medium">WIF, more than just a whimsical image of a dog donning a hat, embodies a paradigm shift in the landscape of finance and technology. </p>
                            <a href="#" className="btn text-uppercase">buy $wif</a>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="banner-img rounded">
                            <img src={img} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
