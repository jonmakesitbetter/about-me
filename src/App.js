import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/pages/Header";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
          <div className="App">
      
      <Header/>
  
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
