import React from 'react';
import classes from './Pricing.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beginner from '../../../assets/images/pricing/beginer.jpg';
import medium from '../../../assets/images/pricing/medium.jpg';
import pro from '../../../assets/images/pricing/pro.jpg';
import ListGroup from 'react-bootstrap/ListGroup';

const PricingBody = () => {
  return (
    <Container className={classes.container} id="pricing">
      <Container className={classes.header}>
        <h1>Exclusive Pricing Plans</h1>
      </Container>
      <Row>
        <Col className={classes.col}>
          <Card style={{ width: '20rem' }} className={classes['card-col']}>
            <Card.Img
              variant="top"
              src={beginner}
              className={classes['card-img']}
            />
            <Card.Body>
              <Container className={classes['card-body-container']}>
                <Card.Title>Beginner</Card.Title>
                <p className={classes.price}>
                  <h1>$39</h1>p/m
                </p>
                <ListGroup variant="flush" className={classes.group}>
                  <ListGroup.Item>Gym Facility</ListGroup.Item>
                  <ListGroup.Item>Dressing Rooms</ListGroup.Item>
                  <ListGroup.Item>Free Yoga Class</ListGroup.Item>
                  <ListGroup.Item>Water & Nutrition</ListGroup.Item>
                  <ListGroup.Item>Trainer once a Week</ListGroup.Item>
                </ListGroup>
                <Button variant="dark">Purchase now</Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.col}>
          <Card style={{ width: '20rem' }} className={classes['card-col']}>
            <Card.Img
              variant="top"
              src={medium}
              className={classes['card-img']}
            />
            <Card.Body>
              <Container className={classes['card-body-container']}>
                <Card.Title>Advanced</Card.Title>
                <p className={classes.price}>
                  <h1>$69</h1>p/m
                </p>
                <ListGroup variant="flush" className={classes.group}>
                  <ListGroup.Item>Gym Facility</ListGroup.Item>
                  <ListGroup.Item>Dressing Rooms</ListGroup.Item>
                  <ListGroup.Item>Free Yoga Class</ListGroup.Item>
                  <ListGroup.Item>Water & Nutrition</ListGroup.Item>
                  <ListGroup.Item>Trainer once a Week</ListGroup.Item>
                </ListGroup>
                <Button variant="dark">Purchase now</Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.col}>
          <Card style={{ width: '20rem' }} className={classes['card-col']}>
            <Card.Img variant="top" src={pro} className={classes['card-img']} />
            <Card.Body>
              <Container className={classes['card-body-container']}>
                <Card.Title>Professional</Card.Title>
                <p className={classes.price}>
                  <h1>$99</h1>p/m
                </p>
                <ListGroup variant="flush" className={classes.group}>
                  <ListGroup.Item>Gym Facility</ListGroup.Item>
                  <ListGroup.Item>Dressing Rooms</ListGroup.Item>
                  <ListGroup.Item>Free Yoga Class</ListGroup.Item>
                  <ListGroup.Item>Water & Nutrition</ListGroup.Item>
                  <ListGroup.Item>Trainer once a Week</ListGroup.Item>
                </ListGroup>
                <Button variant="dark">Purchase now</Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingBody;
