import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import * as CgIcon from "react-icons/cg";
import * as MdIcon from "react-icons/md";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    fontSize: "18px",
    color: 'rgb(122, 122, 122)',
    borderBottom :'1px solid rgb(225, 229, 227)'
  },
  nested: {
    paddingLeft: theme.spacing(3),
  }
}));

function NestedList({room}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

 
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
      className={classes.root}
    >

      
      <ListItem button onClick={handleClick}>

        <ListItemText primary={room}/>
        {open ? <MdIcon.MdExpandLess /> : <MdIcon.MdExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <CgIcon.CgProfile />
            <ListItemText primary="김찬미" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <CgIcon.CgProfile />
            <ListItemText primary="백소현" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;