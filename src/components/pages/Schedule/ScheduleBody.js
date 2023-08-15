import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import schedule from '../../../assets/data/schedule-data';
import { Button } from 'react-bootstrap';
import classes from './ScheduleBody.module.css';

const ScheduleBody = () => {
  const [currentDay, setCurrentDay] = useState('Monday');
  const handleDay = (e) => {
    setCurrentDay(e.target.id);
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="mb-5">
        {schedule.map((day) => {
          if (currentDay === day.name) {
            return (
              <Col key={day.name}>
                <Button
                  id={day.name}
                  onClick={(e) => handleDay(e)}
                  active
                  className={classes['day-button']}
                >
                  {day.name}
                </Button>
              </Col>
            );
          }
          return (
            <Col key={day.name}>
              <Button
                id={day.name}
                onClick={(e) => handleDay(e)}
                className={classes['day-button']}
              >
                {day.name}
              </Button>
            </Col>
          );
        })}
      </Row>
      <Row>
        {schedule.map((day) => {
          if (day.name === currentDay) {
            return day.classes.map((cl) => {
              return (
                <Row key={cl.class} className="mb-4">
                  <Col lg={4}>
                    <p className={classes.title}>Class Name</p>
                    <h5>{cl.class}</h5>
                  </Col>
                  <Col lg={4}>
                    <p className={classes.title}>Time</p>
                    <h5>{cl.time}</h5>
                  </Col>
                  <Col lg={2}>
                    <p className={classes.title}>Trainer</p>
                    <h5>{cl.trainer}</h5>
                  </Col>
                  <Col lg={2} className={classes.join}>
                    <Button>Join Now</Button>
                  </Col>
                </Row>
              );
            });
          }
        })}
      </Row>
    </Container>
  );
};

export default ScheduleBody;
