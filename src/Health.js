import React from "react";
import { Container } from "reactstrap";
import HealthCards from "./HealthCards";

function Health() {
  return (
    <div className="stats-section">
      <Container>
        <div className="stats-grid">
          <div className="stats-text" lg={4} md={4} sm={12}>
            <h1>The world's biggest healthcare platform</h1>
            <p className="work">
              We work from 6 offices all over the world, bringing Docplanner
              Group to life in almost 20 countries.
            </p>
          </div>
          <HealthCards />
        </div>
      </Container>
    </div>
  );
}

export default Health;
