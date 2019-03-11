import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContentPage } from "./ContentPage";
import { Home } from "./Home";
import Footer from "./Footer";
import AppHeader from "./AppHeader";
import "typeface-roboto";

const AppContainer = styled.div`
  height: 100%;
  min-width: 320px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = { drawer: false };
  }

  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  };

  render() {
    return (
      <AppContainer>
        <Router>
          <>
            <AppHeader
              toggleDrawer={this.toggleDrawer}
              drawer={this.state.drawer}
            />
            <Route path="/" exact component={Home} />
            <Route path="/film" component={() => <ContentPage slug="film" />} />
            <Route
              path="/photo"
              component={() => <ContentPage slug="photo" />}
            />
            <Route
              path="/sound"
              component={() => <ContentPage slug="sound" />}
            />
          </>
        </Router>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
