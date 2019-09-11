import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Slogan from "./Slogan";
import Paragraphe from "./Paragraphe";
import Card from "./Card";
import Companies from "./Companies";
import Health from "./Health";
import Achivement from "./Achivement";
import CardPlaces from "./CardPlaces";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slogan />
      <Paragraphe />
      <Card />
      <Companies />
      <Health />
      <Achivement />
      <CardPlaces />
      <Footer />
    </div>
  );
}

export default App;
