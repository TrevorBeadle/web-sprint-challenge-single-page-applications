import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import axios from "axios";
import schema from "./schema";
import * as yup from "yup";

const initialForm = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  onions: false,
  pineapple: false,
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
    axios
      .post("https://reqres.in/", newPizza)
      .then(res => {
        setPizzas([...pizzas, res.data]);
        setFormValues(initialForm);
      })
      .catch(err => console.log(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Header />
          <Form
            values={formValues}
            submit={submit}
            change={change}
            errors={formErrors}
          />
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
