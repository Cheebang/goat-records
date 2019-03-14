import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContentPage } from "./ContentPage";
import Home from "./Home";
import Footer from "./Footer";
import AppHeader from "./AppHeader";
import { MediaQueryProvider } from "react-media-query-hoc";
import "typeface-roboto";
import { ParallaxProvider } from "react-scroll-parallax";

const AppContainer = styled.div`
  height: 100%;
  min-width: 320px;
`;

const Photo = () => <ContentPage slug="photo" />;
const Film = () => <ContentPage slug="film" />;
const Sound = () => <ContentPage slug="sound" />;

const customQueries = {
  mobile: "screen and (max-width: 500px)",
  tablet: "screen and (min-width: 501px) and (max-width: 768px)",
  desktop: "screen and (min-width: 769px)"
};

const App = () => (
  <MediaQueryProvider queries={customQueries}>
    <ParallaxProvider>
      <AppContainer>
        <Router>
          <>
            <AppHeader />
            <Route path="/" exact component={Home} />
            <Route path="/film" component={Film} />
            <Route path="/photo" component={Photo} />
            <Route path="/sound" component={Sound} />
          </>
        </Router>
        <Footer />
      </AppContainer>
    </ParallaxProvider>
  </MediaQueryProvider>
);

export default App;
