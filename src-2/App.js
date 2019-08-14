import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <main className="Main">
      <AboutMe />
    </main>
    <Footer />
  </div>
);

export default App;
