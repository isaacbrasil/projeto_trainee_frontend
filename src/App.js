import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

//import { FacebookLoginButton } from "react-social-login-buttons";

import "./styles.css";

import Header from "./components/Header";
import Main from './pages/main';
import Footer from "./components/Footer";
import Login from "./components/HomePage";




const App = () => (

  <div className="App">

    <div className="content-wrap">

      <Header />
      <Login />

    </div>

    <Footer />

  </div >


);

export default App;
