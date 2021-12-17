import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {



  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about-me" component={AboutMe} />
        <Route path="/shop" component={Shop} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact-us" component={ContactUs} />
        
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
