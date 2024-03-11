import { Container, Row, Col } from "react-bootstrap";
import about_img from '../assets/img/about-img.png';


export default function About() {
    const aboutInfo = {
        title:'About wif?',
        des:[
            `Discover Dogwifhat 2, the fan tribute to the iconic Dogwifhat meme coin. As a continuation of the original's legacy, Dogwifhat 2 combines the joy of meme culture with the excitement of cryptocurrency.`,
            `It's not just a coin; it's a celebration of community, designed for and by fans. Join us in shaping the future of this playful token. Embrace the spirit of the crypto community and be part of the next big meme coin movement.`,
            `Get your Dogwifhat 2 today and let's make history together!`,
        ]
    }
  return (
    <div className="about common-padding">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={5} className="text-end">
                    <div className="about-img rounded ms-auto">
                        <img src={about_img} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="about-wrap">
                        <h3 className="mb-3 mb-md-4">{aboutInfo.title}</h3>
                        {aboutInfo.des.map((des,index) => (
                            <p key={index} className={index === aboutInfo.des.length - 1 ? '' : 'mb-md-4 mb-lg-5'}>{des}</p>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
