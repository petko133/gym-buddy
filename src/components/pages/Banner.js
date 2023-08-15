import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Banner.module.css';

const Banner = ({ title }) => {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <h1>{title}</h1>
      </Container>
      ;
    </div>
  );
};

export default Banner;
