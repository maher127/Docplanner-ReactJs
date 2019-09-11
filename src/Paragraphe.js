import React from "react";
import { Container, Row, Col } from "reactstrap";
const tabParg = [
  "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
  "We also help doctors to better manage their practice. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
];

function Paragraphe() {
  return (
    <div>
      <Container className="paragraphe-container">
        <Row className="row-paragraphe d-flex justify-content-around flex-wrap flex-row">
          <Col xs="11" className="mx-auto">
            <Row>
              {tabParg.map((el, index) => (
                <Col className="headding-paragraphe" key={index} md={6}>
                  <p>{el}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Paragraphe;
