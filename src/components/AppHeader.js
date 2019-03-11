import React from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
import { Navigation } from "./Navigation";

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
`;

const SocialIconWithSpace = styled(SocialIcon)`
  margin-right: 8px;
`;

const socialMediaBgColor = "white";

export const AppHeader = props => (
  <Header>
    <Navigation
      toggleDrawer={props.toggleDrawer}
      drawer={props.drawer}
      list={props.classes.list}
    />
    <div>
      <SocialIconWithSpace
        url="http://facebook.com/g0atrecords"
        bgColor={socialMediaBgColor}
      />
      <SocialIconWithSpace
        url="http://instagram.com/goatrecords"
        bgColor={socialMediaBgColor}
      />
      <SocialIcon
        url="https://www.youtube.com/channel/UCvR76e0RV7PLmD1sQqvJ_nw"
        bgColor={socialMediaBgColor}
      />
    </div>
  </Header>
);

export default withStyles(styles)(AppHeader);
