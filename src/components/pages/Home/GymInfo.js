import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './GymInfo.module.css';
import image from '../../../assets/images/young-woman-run-cyan.png';
import athlete from '../../../assets/images/athlete.png';
import fitness from '../../../assets/images/fitness.png';
import weight from '../../../assets/images/weights.png';
import { FaAngleRight } from 'react-icons/fa6';

const GymInfo = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col>
          <h4 className={classes.find}>WHO ARE WE</h4>
          <h1>Take Your Health and Body to the Next Level</h1>
          <p>
            Take your health and body to the next level with our comprehensive
            programs designed to help you reach your fitness goals.
          </p>
          <Row>
            <Col className={classes['icons-col']}>
              <img src={athlete} alt="athlete" className={classes.icons} />
              <h4 className={classes['icons-text']}>PROFESSIONAL TRAINERS</h4>
            </Col>
            <Col className={classes['icons-col']}>
              <img src={weight} alt="athlete" className={classes.icons} />
              <h4 className={classes['icons-text']}>MODERN EQUIPMENT</h4>
            </Col>
            <Col className={classes['icons-col']}>
              <img src={fitness} alt="athlete" className={classes.icons} />
              <h4 className={classes['icons-text']}>NEW GYM MACHINES</h4>
            </Col>
          </Row>
          <button variant="dark" className={classes.button}>
            Take a tour <FaAngleRight/>
          </button>
        </Col>
        <Col>
          <img src={image} alt="woman-running" className={classes.image} />
        </Col>
      </Row>
    </Container>
  );
};

export default GymInfo;
