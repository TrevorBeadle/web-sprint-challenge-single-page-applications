import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Header />
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
