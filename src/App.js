import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import axios from "axios";

const initialForm = {
  name: "",
  size: "",
  sauce: "",
};

const initialErrors = {
  name: "",
  size: "",
  sauce: "",
};

const initialPizzas = [];
const initialDisabled = true;

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const submit = () => {
    const newPizza = {
      name: "",
      size: "",
      sauce: "",
    };
  };

  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Header />
          <Form />
        </Route>
        <Route path="/">
          <Header />
          <section className="banner">
            <h1>Your Favorite food, delivered while coding</h1>
            <Link to="/pizza" className="order-btn">
              Order Now
            </Link>
          </section>
        </Route>
      </Switch>
    </>
  );
};
export default App;
