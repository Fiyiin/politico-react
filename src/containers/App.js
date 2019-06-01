import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Landing page/Header';
import Hero from '../components/Landing page/Hero';
import About from '../components/Landing page/About';
import Footer from '../components/Landing page/Footer';
import Services from '../components/Landing page/Services';
import More from '../components/Landing page/More';
import Admin from '../components/Admin';
import User from '../components/User';

const landingPage = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Services />
    <More />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={landingPage} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/user" exact component={User} />
    </Switch>
  </Router>
);

export default App;
