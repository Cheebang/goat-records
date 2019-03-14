import React from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
import { withMedia } from "react-media-query-hoc";
import { Navigation } from "./Navigation";
import logo from "./goat only.png";
import logoText from "./goat records text only.png";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

export const Header = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  padding: 8px 16px;
  background: black;
  box-shadow: 0px -3px 32px 0px rgba(0, 0, 0, 0.75);
  img {
    height: 38px;
    margin-left: 16px;
  }
`;

const SocialIconWithSpace = styled(SocialIcon)`
  margin-right: 8px;
`;

const NavigationContainer = styled.div`
  display: flex;
`;

const socialMediaBgColor = "white";

export class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawer: false };
  }

  toggleDrawer = () => this.setState({ drawer: !this.state.drawer });

  render() {
    const { classes, media } = this.props;
    return (
      <Header>
        <NavigationContainer>
          <Navigation
            toggleDrawer={this.toggleDrawer}
            drawer={this.state.drawer}
            list={classes.list}
          />
          <a href="/">
            <img src={logo} alt="GOAT records" />
          </a>
        </NavigationContainer>
        {!media.mobile && (
          <a href="/">
            <img src={logoText} alt="GOAT records" />
          </a>
        )}
        <div>
          <SocialIconWithSpace
            url="http://facebook.com/g0atrecords"
            bgColor={socialMediaBgColor}
          />
          <SocialIconWithSpace
            url="http://instagram.com/goatrecords"
            bgColor={socialMediaBgColor}
          />
        </div>
      </Header>
    );
  }
}

export default withMedia(withStyles(styles)(AppHeader));
