import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { withStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { CameraAlt, CameraRoll, Menu, Speaker } from "@material-ui/icons";
import logo from "./goat records.png";

const navItems = ["Film", "Photo", "Sound"];
const navIcons = [<CameraRoll />, <CameraAlt />, <Speaker />];

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

const BaseContainer = styled.div`
  padding: 16px;
`;

const AppContainer = styled.div`
  height: 100%;
  min-width: 320px;
`;

const Header = styled(BaseContainer)`
  color: #333;
  display: flex;
  font-size: 24px;
  padding: 16px;
  border-bottom: 1px solid #ccc;
`;

const MenuContainer = styled.div`
  margin-right: 16px;
`;

const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  min-height: calc(100vh - 128px);
`;

const Footer = styled(BaseContainer)`
  padding: 16px;
  border-top: 1px solid #ccc;
  text-align: center;
`;

const InnerContent = styled(BaseContainer)``;
const Logo = styled.img`
  min-width: 288px;
  width: 100%;
`;

const HorizontalMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 48px;

  li {
    display: inline;
    width: 100%;
    text-align: center;
    padding: 32px 0;
    border: 1px solid #ccc;
    border-right: 0;
  }
  > :last-child {
    border-right: 1px solid #ccc;
  }
`;

const AppHeader = props => (
  <Header>
    <MenuContainer>
      <Menu fontSize="large" onClick={props.toggleDrawer} />
      <Drawer anchor="left" open={props.drawer} onClose={props.toggleDrawer}>
        <div className={props.list}>
          <List>
            {navItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{navIcons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </MenuContainer>
  </Header>
);

const AppContent = () => (
  <Content>
    <InnerContent>
      <Logo src={logo} alt="Logo" />
      <HorizontalMenu>
        {navItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </HorizontalMenu>
      <h1>Melbourne Content Creators</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </InnerContent>
  </Content>
);

class App extends Component {
  constructor() {
    super();
    this.state = { drawer: false };
  }
  componentDidMount() {
    axios("http://goatrecords.com.au/wp-json/wp/v2/posts").then(response =>
      console.log(response)
    );
  }
  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  };
  render() {
    return (
      <AppContainer>
        <AppHeader
          toggleDrawer={this.toggleDrawer}
          drawer={this.state.drawer}
          list={this.props.classes.list}
        />
        <AppContent />
        <Footer>© 2019 Goat Records</Footer>
      </AppContainer>
    );
  }
}

export default withStyles(styles)(App);
