import React from "react";
import Footer from "./components/Footer";
import RequestTodoList from "./containers/RequestTodoList";
import ServiceTodoList from "./containers/ServiceTodoList";
import PaymentTodoList from "./containers/PaymentTodoList";
import { Router, Route } from "react-router-dom";
import Header from "./components/Header";
import history from "./history";
import "./styles.css";

const App = () => (
  <div>
    <Router history={history}>
      <Header />
      <Route exact path="/" component={RequestTodoList} />
      <Route exact path="/request" component={RequestTodoList} />
      <Route exact path="/services" component={ServiceTodoList} />
      <Route exact path="/payment" component={PaymentTodoList} />
    </Router>
    <Footer />
  </div>
);

export default App;
