import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Menu } from "@material-ui/icons";
import { CameraAlt, CameraRoll, Speaker } from "@material-ui/icons";

export const navItems = ["Film", "Photo", "Sound"];
export const navIcons = [<CameraRoll />, <CameraAlt />, <Speaker />];

export const Navigation = props => (
  <div>
    <Menu fontSize="large" onClick={props.toggleDrawer} cursor="pointer" />
    <Drawer anchor="left" open={props.drawer} onClose={props.toggleDrawer}>
      <div className={props.list}>
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
  </div>
);
