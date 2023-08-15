import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import classes from './GymClasses.module.css';

const GymClasses = ({ gymClasses }) => {
  return (
    <Container className={classes.container} id="classes">
      <Container className={classes.header}>
        <h4 className={classes.find}>OUR CLASSES</h4>
        <h1>We Are Offering Best Variety of Classes</h1>
      </Container>
      <Row>
        {gymClasses.map((gymClass, index) => {
          if ((index === 0) | (index === 5)) {
            return (
              <Col key={gymClass.name} lg={6}>
                <a href={`#${gymClass.name}`} className={classes.text}>
                  <Card
                    className={classes.cards}
                    style={{
                      backgroundImage: `url('${gymClass.image}`,
                    }}
                  >
                    <Card.Body className={classes['card-body']}>
                      <img
                        src={gymClass.logo}
                        alt="yoga"
                        className={classes.icon}
                      />
                      <Card.Title>
                        <h2>{gymClass.name}</h2>
                      </Card.Title>
                      <Card.Text>
                        <p className={classes['gym-classes-text']}>
                          {gymClass.schedule}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            );
          } else {
            return (
              <Col key={gymClass.name} lg={3}>
                <a href={`#${gymClass.name}`} className={classes.text}>
                  <Card
                    className={classes.cards}
                    style={{ backgroundImage: `url('${gymClass.image}` }}
                  >
                    <Card.Body className={classes['card-body']}>
                      <img
                        src={gymClass.logo}
                        alt="yoga"
                        className={classes.icon}
                      />
                      <Card.Title>
                        <h2>{gymClass.name}</h2>
                      </Card.Title>
                      <Card.Text>
                        <p className={classes['gym-classes-text']}>
                          {gymClass.schedule}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default GymClasses;
