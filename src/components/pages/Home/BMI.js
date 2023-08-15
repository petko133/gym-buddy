import React, { useState } from 'react';
import classes from './BMI.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bmiImage from '../../../assets/images/bmi.png';
import Form from 'react-bootstrap/Form';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiInfo, setBmiInfo] = useState('');

  const handleBmi = () => {
    const calculation =
      (parseInt(weight) / parseInt(height) / parseInt(height)) * 10000;
    setBmi(calculation.toFixed(2));
    if (calculation < 16) {
      setBmiInfo('Severe Thinness');
    } else if (16 <= calculation && calculation < 17) {
      setBmiInfo('Moderate Thinness');
    } else if (17 <= calculation && calculation < 18.5) {
      setBmiInfo('Mild Thinness');
    } else if (18.5 <= calculation && calculation < 25) {
      setBmiInfo('Normal');
    } else if (25 <= calculation && calculation < 30) {
      setBmiInfo('Overweight');
    } else if (30 <= calculation && calculation < 35) {
      setBmiInfo('Obese Class 1');
    } else if (35 <= calculation && calculation < 40) {
      setBmiInfo('Obese Class 2');
    } else if (40 <= calculation) {
      setBmiInfo('Obese Class 3');
    }
  };

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Row>
          <Col className={classes['bmi-col']}>
            <h1>Let's Calculate Your BMI</h1>
            <p>
              Easily determine your body mass index with our accurate
              calculation tool.
            </p>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    onChange={(e) => setWeight(e.target.value)}
                    type="number"
                    placeholder="Weight/kg"
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={(e) => setHeight(e.target.value)}
                    type="number"
                    placeholder="Height/cm"
                  />
                </Col>
                {!bmi ? (
                  <h4>Your BMI is: </h4>
                ) : (
                  <h4>
                    Your BMI is: {bmi} ( {bmiInfo} )
                  </h4>
                )}
              </Row>
            </Form>
            <button
              onClick={handleBmi}
              type="submit"
              className={classes.button}
            >
              Calculate
            </button>
          </Col>
          <Col className={'d-none d-xl-block'}>
            <img
              src={bmiImage}
              alt="bmiImage"
              className={classes.image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BMI;
