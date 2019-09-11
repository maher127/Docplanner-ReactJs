import React from "react";
import {
  Card,
  Button,
  Col,
  Container,
  Row,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const tab = [
  {
    img: "https://www.docplanner.com/images/warsaw.png",
    title: "Warsaw"
  },
  {
    img: "https://www.docplanner.com/images/barcelona.png",
    title: "Barcelona"
  },
  {
    img: "https://www.docplanner.com/images/istanbul.png",
    title: "Istanbul"
  },
  {
    img: "https://www.docplanner.com/images/rome.png",
    title: "Rome"
  },
  {
    img: "https://www.docplanner.com/images/mexico-city.png",
    title: "Mexico City"
  },
  {
    img: "https://www.docplanner.com/images/curitiba.png",
    title: "Curitiba"
  }
];

function CardPlaces() {
  return (
    <Container>
      <Row className="row-countries">
        {tab.map((el, index) => (
          <Col md={4} sm={6} xs={12} className="col-countries">
            <Card style={{ width: "20rem" }} className="one-card">
              <CardImg
                variant="top"
                className="img-country img-fluid"
                src={el.img}
              />
              <CardBody className="btnAndTitle">
                <CardTitle>{el.title}</CardTitle>
                <Button variant="primary">SEE OPENINGS</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardPlaces;
