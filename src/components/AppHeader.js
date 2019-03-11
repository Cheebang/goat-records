import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Menu } from "@material-ui/icons";
import { SocialIcon } from "react-social-icons";
import { CameraAlt, CameraRoll, Speaker } from "@material-ui/icons";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
export const navItems = ["Film", "Photo", "Sound"];
export const navIcons = [<CameraRoll />, <CameraAlt />, <Speaker />];

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

export const Header = styled.div`
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
  padding: 16px;
  border-bottom: 1px solid #ccc;
`;

export const MenuContainer = styled.div`
  margin-right: 16px;
`;

export const AppHeader = props => (
  <Header>
    <MenuContainer>
      <Menu fontSize="large" onClick={props.toggleDrawer} cursor="pointer" />
      <Drawer anchor="left" open={props.drawer} onClose={props.toggleDrawer}>
        <div className={props.classes.list}>
          <List>
            {navItems.map((text, index) => (
              <ListItem
                button
                key={text}
                component="a"
                href={"/" + text.toLowerCase()}
              >
                <ListItemIcon>{navIcons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </MenuContainer>
    <div>
      <SocialIcon url="http://facebook.com/g0atrecords" />
      <SocialIcon url="http://instagram.com/goatrecords" />
    </div>
  </Header>
);

export default withStyles(styles)(AppHeader);
