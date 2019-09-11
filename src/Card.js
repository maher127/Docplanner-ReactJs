import React from "react";
import patients from "./patients.png";
import doctors from "./doctors.png";
import {
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
const tab = [
  {
    for: "For patients",
    text: "Find a doctor, book a visit and solve any health-related doubt",
    imgSrc: patients
  },
  {
    for: "For doctors",
    text: "Save time managing visits and cut no-shows by half",
    imgSrc: doctors
  }
];
var styleCard = {};
function Card() {
  return (
    <div>
      <Container>
        <Row className="row d-flex justify-content-around flex-wrap flex-row">
          {tab.map((el, index) => (
            <Col
              className="col"
              lg={5}
              key={index}
              sm={12}
              xs={12}
              style={
                el.for === "For patients"
                  ? (styleCard = { backgroundColor: "#00bfa5" })
                  : (styleCard = { backgroundColor: "#3D83DF" })
              }
            >
              <h6>{el.for}</h6>
              <h3>{el.text}</h3>
              {el.for === "For patients" && (
                <UncontrolledDropdown>
                  <DropdownToggle color="light" id="dropdown-basic">
                    CHOOSE COUNTRY
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#/action-1">Argentina</DropdownItem>
                    <DropdownItem href="#/action-2">Australia</DropdownItem>
                    <DropdownItem href="#/action-3">Brazil</DropdownItem>
                    <DropdownItem href="#/action-3">France</DropdownItem>
                    <DropdownItem href="#/action-3">Tunisia</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
              <img src={el.imgSrc} alt="our plateform" className="imgPc" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Card;
