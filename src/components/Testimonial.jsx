import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar   } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import tImg1 from '../assets/img/testimonialImg1.png';
export default function Testimonial() {
    const tsItems = [
        {
            img:tImg1,
            title:"They <span>took a dog</span> and put a hat on",
            desc: 'The psychology awareness initiative gives me maximum flexibility and discover my own secret hidden confidence.',
            radingLogo: <FaStar />,
            count: 4.5,
        },
        {
            img:tImg1,
            title:"They <span>took a dog</span> and put a hat on",
            desc: 'The psychology awareness initiative gives me maximum flexibility and discover my own secret hidden confidence.',
            radingLogo: <FaStar />,
            count: 4.5,
        },
    ]
  return (
    <section className='testimonial'>
      <Container>
        <Row>
            <Col xs={12}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {tsItems.map((tsItem, index)=>(
                        <SwiperSlide key={index} className="testimonial-wrapper d-flex align-items-center">
                            <div className="testimonial-left">
                                <figure>
                                    <img src={tsItem.img} alt="" />
                                </figure>
                            </div>
                            <div className="testimonial-right">
                                <h2 dangerouslySetInnerHTML={{ __html: tsItem.title }} />
                                <p>{tsItem.desc}</p>
                                <span className='rating d-flex gap-2 align-items-center'>
                                    <figure>{tsItem.radingLogo}</figure>
                                    <div>{tsItem.count}</div>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
