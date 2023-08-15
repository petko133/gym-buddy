import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import photos from '../../../assets/data/gallery-photos';
import classes from './GalleryBody.module.css';
import Modal from 'react-bootstrap/Modal';

const GalleryBody = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const handleClose = () => setShow(false);
  const handleSelect = (selectedIndex) => {
    setCurrentImg(selectedIndex);
  };
  const handleShow = (e) => {
    setCurrentImg(parseInt(e.target.id));
    setShow(true);
  };

  console.log(currentImg);

  return (
    <Container>
      <Carousel className="m-5">
        <Carousel.Item>
          <Row>
            {photos.map((photo, index) => {
              if (index < 6) {
                if ((index === 0) | (index === 5)) {
                  return (
                    <Col key={photo} lg={6}>
                      <a href="#" onClick={(e) => handleShow(e)}>
                        <Card
                          id={index}
                          className={classes.cards}
                          key={photo}
                          style={{
                            backgroundImage: `url('${photo}`,
                          }}
                        ></Card>
                      </a>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={photo} lg={3}>
                      <a href="#" onClick={(e) => handleShow(e)}>
                        <Card
                          id={index}
                          className={classes.cards}
                          key={photo}
                          style={{
                            backgroundImage: `url('${photo}`,
                          }}
                        ></Card>
                      </a>
                    </Col>
                  );
                }
              }
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {photos.map((photo, index) => {
              if ((index >= 6) & (index < 12)) {
                if ((index === 6) | (index === 11)) {
                  return (
                    <Col key={photo} lg={6}>
                      <a href="#" onClick={(e) => handleShow(e)}>
                        <Card
                          id={index}
                          className={classes.cards}
                          key={photo}
                          style={{
                            backgroundImage: `url('${photo}`,
                          }}
                        ></Card>
                      </a>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={photo} lg={3}>
                      <a href="#" onClick={(e) => handleShow(e)}>
                        <Card
                          id={index}
                          className={classes.cards}
                          key={photo}
                          style={{
                            backgroundImage: `url('${photo}`,
                          }}
                        ></Card>
                      </a>
                    </Col>
                  );
                }
              }
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {photos.map((photo, index) => {
              if ((index >= 12) & (index < 18)) {
                if ((index === 12) | (index === 17)) {
                  return (
                    <Col key={photo} lg={6}>
                      <a href="#" onClick={(e) => handleShow(e)}>
                        <Card
                          id={index}
                          className={classes.cards}
                          key={photo}
                          style={{
                            backgroundImage: `url('${photo}`,
                          }}
                        ></Card>
                      </a>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={photo} lg={3}>
                      <a href="#" onClick={(e) => handleShow(e)}>
                        <Card
                          id={index}
                          className={classes.cards}
                          key={photo}
                          style={{
                            backgroundImage: `url('${photo}`,
                          }}
                        ></Card>
                      </a>
                    </Col>
                  );
                }
              }
            })}
          </Row>
        </Carousel.Item>
      </Carousel>
      <Modal show={show} onHide={handleClose} dialogClassName={classes.modall}>
        <Modal.Body>
          <Carousel activeIndex={currentImg} onSelect={handleSelect}>
            {photos.map((photo, index) => {
              if (index === currentImg) {
                return (
                  <Carousel.Item key={photo} className={classes.item}>
                    <img key={photo} src={photo} alt={photo} />
                  </Carousel.Item>
                );
              } else {
                return (
                  <Carousel.Item key={photo} className={classes.item}>
                    <img key={photo} src={photo} alt={photo} />
                  </Carousel.Item>
                );
              }
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GalleryBody;
