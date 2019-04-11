import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import DataContext from "./contexts/DataContext";
import Cart from "./pages/Cart";

class App extends Component {
  render() {
    const router = (
      <Router>
        <DataContext>
          <div className="App">
            <Navbar />
            <Route path="/" exact render={() => <div>Home</div>} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/products" />
          </div>
        </DataContext>
      </Router>
    );
    return router;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
