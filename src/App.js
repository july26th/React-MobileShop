import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import Category from "./components/CategoryPage/Category";
class App extends Component {

  render() {

    return (
      <React.Fragment>
     <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={Category} />
      </Switch>
      
      <Footer />
    </React.Fragment>
    );


  }
}

export default App;

