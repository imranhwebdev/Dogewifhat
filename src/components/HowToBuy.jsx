import { Container, Row, Col } from 'react-bootstrap'

import icon_1 from '../assets/img/features/1.png'
import icon_2 from '../assets/img/features/2.png'
import icon_3 from '../assets/img/features/3.png'
import icon_4 from '../assets/img/features/4.png'
import CommonTitle from './CommonTitle'

export default function HowToBuy() {
    const features = [
        {
            icon: icon_1,
            title: 'create a Wallet',
            des: `Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users`,
        },
        {
            icon: icon_2,
            title: 'Get Some SOL',
            des: `Have SOL in your wallet to switch to $SOLAMA. If you don't have any SOL you can buy SOL from an exchange or cross chain`,
        },
        {
            icon: icon_3,
            title: 'Go to Raydium, Jupiter',
            des: `Connect to Raydium or Jupiter. Go raydium.io or Jup.ag in google chrome or on the browser inside your Phantom app.`,
        },
        {
            icon: icon_4,
            title: 'Switch SOL for WIF 2.0',
            des: `Switch SOL for SSOLAMA. we have ZERO taxes so you don't need to worry about buying with a specific slippage`,
        },
    ]
    return (
        <div className="features common-padding">
            <Container>
                <Row>
                    <Col xs={12}>
                        <CommonTitle title="How to buy" />
                    </Col>
                </Row>
                <Row className='common-gap'>
                    {features.map((item, index) => (
                        <Col xs={12} sm={6} key={index}>
                            <div className="features-item text-center">
                                <div className="features-icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h4 className="pb-3 mb-3 pb-md-4 mb-md-4">{item.title}</h4>
                                <p className='mb-3 mb-md-4'>{item.des}</p>
                                <span className='fw-semibold'>{index <= 9 ? '0' : ''}{index + 1}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
