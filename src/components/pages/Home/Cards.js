import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Cards.module.css';
import Card from 'react-bootstrap/Card';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { LiaClipboardListSolid } from 'react-icons/lia';

const Cards = () => {
  return (
    <Container id="about-us">
      <Row>
        <Col>
          <Card className={classes.cards}>
            <Card.Body>
              <p className={classes.icon}>
                <FaClockRotateLeft size={'40'} />
              </p>
              <Card.Title>PROGRESSION</Card.Title>
              <Card.Text>
                Our team of experts will work with you to create a customized
                plan that helps you achieve success one step at a time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={classes.cards}>
            <Card.Body>
              <p className={classes.icon}>
                <GiWeightLiftingUp size={'40'} />
              </p>
              <Card.Title>WORKOUT</Card.Title>
              <Card.Text>
                With a variety of workouts to choose from, you'll have
                everything you need to get into the best shape of your life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={classes.cards}>
            <Card.Body>
              <p className={classes.icon}>
                <LiaClipboardListSolid size={'40'} />
              </p>
              <Card.Title>NUTRITIONS</Card.Title>
              <Card.Text>
                We will work with you to create a personalized meal plan that
                helps you reach your desired health goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
