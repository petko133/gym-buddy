import React from 'react';
import classes from './Testimonials.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import quotes from '../../../assets/images/testimonials/quotes.png';
import testimonialData from '../../../assets/data/testimonialData';

const Testimonials = () => {
  return (
    <Container className={classes.container} id="testimonial">
      <Container className={classes.header}>
        <h4 className={classes.find}>TESTIMONIAL</h4>
        <h1>Here are Some Reviews From our Customers</h1>
      </Container>
      <Carousel>
        {testimonialData.map((item) => {
          return (
            <Carousel.Item key={item.name}>
              <Row className={classes['carousel-row']}>
                <Col md={6} lg={5} xxl={5} xl={6} className="d-none d-md-block">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes['carousel-image']}
                  />
                </Col>
                <Col
                  md={6}
                  lg={7}
                  xxl={7}
                  xl={6}
                  className={classes['carousel-text']}
                >
                  <img
                    src={quotes}
                    alt=""
                    className={classes['carousel-quotes']}
                  />
                  <i>{item.review}</i>
                  <h3>{item.name}</h3>
                  <p>{item.class}</p>
                </Col>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
