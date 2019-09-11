import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

const tab = [
  {
    icon: "https://www.docplanner.com/img/flag.png",
    heading: "Leader in 10 countries",
    text:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    icon: "https://www.docplanner.com/img/visits.png",
    heading: "1.5 million appointments",
    text: "booked last month"
  },
  {
    icon: "https://www.docplanner.com/img/patients.png",
    heading: "30 million unique patients",
    text: "visit us every month"
  },
  {
    icon: "https://www.docplanner.com/img/doctors.png",
    heading: "2 million active doctors",
    text: "trust in our solutions"
  }
];

function HealthCards() {
  return (
    <div>
      <Row className="row-stats">
        {tab.map((el, index) => (
          <Card
            style={{ width: "14rem", height: "100%" }}
            className="card-stats"
          >
            <CardBody className="text-cards">
              <CardTitle>
                <img src={el.icon} />
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                <h4>{el.heading}</h4>
              </CardSubtitle>
              <CardText>
                <p className="paragraphe-cards">{el.text}</p>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default HealthCards;
