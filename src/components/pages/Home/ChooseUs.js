import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './ChooseUs.module.css';
import image from '../../../assets/images/rope.jpg';
import athlete from '../../../assets/images/athlete.png';
import fitness from '../../../assets/images/fitness.png';
import weight from '../../../assets/images/weights.png';
import water from '../../../assets/images/drink-water.png';
import { FaAngleRight } from 'react-icons/fa6';

const ChooseUs = () => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Row>
          <Col>
            <img src={image} alt="rope" className={classes.image} />
          </Col>
          <Col>
            <h4 className={classes.find}>WHY CHOOSE US</h4>
            <h1>We Can Give You the Workout Your Body Needs!</h1>
            <p className={classes.text}>
              At <span style={{ color: 'white' }}>GYMBUDDY</span>, we are
              dedicated to helping you achieve the body of your dreams. Our
              expert trainers and nutritionists will work with you to create a
              personalized fitness and nutrition plan that helps you reach your
              specific goals.
            </p>
            <Row>
              <Col className={classes['icons-col']}>
                <img src={athlete} alt="athlete" className={classes.icons} />
                <h4 className={classes['icons-text']}>Great Fitness Training</h4>
              </Col>
              <Col className={classes['icons-col']}>
                <img src={weight} alt="athlete" className={classes.icons} />
                <h4 className={classes['icons-text']}>Modern Gym Equipment</h4>
              </Col>
            </Row>
            <Row>
              <Col className={classes['icons-col']}>
                <img src={fitness} alt="athlete" className={classes.icons} />
                <h4 className={classes['icons-text']}>New Gym Equipment</h4>
              </Col>
              <Col className={classes['icons-col']}>
                <img src={water} alt="athlete" className={classes.icons} />
                <h4 className={classes['icons-text']}>Filtered Water and Nutrition</h4>
              </Col>
            </Row>
            <button className={classes.button}>
              Take a tour <FaAngleRight />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
