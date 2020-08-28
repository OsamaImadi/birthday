import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col, Row
} from 'reactstrap';

const img1 = require('../img/1.jpeg')
const img2 = require('../img/2.jpeg')
const img3 = require('../img/3.jpeg')
const img4 = require('../img/4.jpeg')
const img5 = require('../img/5.jpeg')
const img6 = require('../img/6.jpeg')
const img7 = require('../img/7.jpeg')
const img8 = require('../img/8.jpeg')
const img9 = require('../img/9.jpeg')
const img10 = require('../img/10.jpeg')
const img11 = require('../img/11.jpeg')

const CardImage = (props) => {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <div>
            <Card >
              <CardImg top width="100%" style={{"max-height": "230px"}} src={img1} alt="Card image cap" />
              <CardBody>
                <CardTitle>This maroon shirt looks like fire..</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg top width="100%" style={{"max-height": "230px"}}  src={img3} alt="Card image cap" />
              <CardBody>
                <CardTitle>This is one of your best picture.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div>
            <Card >
              <CardImg top width="100%" style={{"max-height": "230px"}} src={img2} alt="Card image cap" />
              <CardBody>
                <CardTitle>And you know why I love this look 😂</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg top width="100%" style={{"max-height": "230px"}}  src={img4} alt="Card image cap" />
              <CardBody>
                <CardTitle>Looks like a natural smile but it's a pose. 😅</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div>
            <Card >
              <CardImg top width="100%" style={{"max-height": "230px"}} src={img5} alt="Card image cap" />
              <CardBody>
                <CardTitle>This looks like a lawn collection picture. But the model is better for sure. </CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg top width="100%" style={{"max-height": "230px"}}  src={img6} alt="Card image cap" />
              <CardBody>
                <CardTitle>I just love this simpler look. The most elegant look, by far.
                </CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div>
            <Card >
              <CardImg top width="100%" style={{"max-height": "230px"}} src={img7} alt="Card image cap" />
              <CardBody>
                <CardTitle>It's a collage of your number of pictures. Zoom in to see yourself.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg top width="100%" style={{"max-height": "230px"}}  src={img8} alt="Card image cap" />
              <CardBody>
                <CardTitle>It's another collage of your pics because previous one didn't contain all.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div>
            <Card >
              <CardImg top width="100%" style={{"max-height": "230px"}} src={img9} alt="Card image cap" />
              <CardBody>
                <CardTitle>A badly cropped collage of your pics.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg top width="100%" style={{"max-height": "230px"}}  src={img10} alt="Card image cap" />
              <CardBody>
                <CardTitle>Another collage but this time much smaller pics.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div>
            <Card >
              <CardImg top width="100%" style={{"max-height": "230px"}} src={img11} alt="Card image cap" />
              <CardBody>
                <CardTitle>A comparison pic of a much older and rather recent pictures of you, just to avoid monotony.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg top width="100%" style={{"max-height": "230px"}}  src={img2} alt="Card image cap" />
              <CardBody>
                <CardTitle>A younger you again because I need even number of pictures for the layout.</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardImage;