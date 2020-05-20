import React from "react";
import "./App.css";
import Api from "./container/api";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
