import React from "react";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customer";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
