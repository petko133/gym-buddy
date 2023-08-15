import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Banner.module.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../../assets/images/Fitness-girl-black-background-rope-skipping_1920x1440.jpg';

const Banner = () => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Row>
          <Col className="d-none d-xl-block">
            <img src={image} alt="background" className={classes.image} />
          </Col>
          <Col xs={12} xl={4} className={classes.text}>
            <h3 className={classes.find}>FIND YOUR PASSION</h3>
            <h1 className={classes.make}>MAKE YOUR BODY</h1>
            <h1 className={classes.fit}>FIT & PERFECT</h1>
            <Button variant="light" className={classes.btn}>
              <h5 className={classes['btn-text']}>OUR CLASSES</h5>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
