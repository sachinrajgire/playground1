import React from 'react';
import "./NavBar.css"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import AdminIcon from '@material-ui/icons/AccountBalance'
import MenuIcon from '@material-ui/icons/Menu';
import {  useHistory } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position:'absolute',
     zIndex: '1'

  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:"black",
    color:"rgb(255,213,30)"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"rgba(255,255,255,1)",
    color: "black",
    opacity:"100%",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
}));

const home = <p>🏠</p>
const placement = <p>📁</p>
const employer = <p>💼</p>
const volunteer = <p>🙋‍</p>

const defaultMenu = [

    {label:'Home',url:'/', icon: <HomeIcon/>, isExternal:false},
    {label:'F1 Placement Data',url:'/placementdata', icon: <AdminIcon/>, isExternal:false},
    {label:'Sponsoring Employers',url:'https://www.wynisco.com/blog/companies-sponsoring-h1b-visa', isExternal:true, icon: <EqualizerIcon/>},
    {label:'Volunteering Opportunities',url:'https://www.wynisco.com/blog/volunteer-opportunities-for-f1-students-to-stop-the-clock', isExternal:true, icon: <EqualizerIcon/>},
    {label:'MenuStat', url:'/menustat', icon: <MenuIcon/>, isExternal:false}

]

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems:"center",
  padding: 0,
};

const flexItem = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}


export default function PermanentDrawerLeft({menu=defaultMenu,children}) {
  const classes = useStyles();
  const history= useHistory()

  function handleClick(item) {
if(item.isExternal) {
  window.location.href=item.url
  return
}
return history.push(item.url)

  }

  return (
    <div className={classes.root} id="nav">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} title={<img src="https://unsplash.it/40/40"/>}>
        <Toolbar>
          <Typography variant="h6" noWrap>
           F1 Student App
          </Typography>
          {/* <List style={flexContainer}>       
          {menu.map((item, index) => (
            <ListItem style={flexItem} button key={item.label}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} onClick={()=>handleClick(item)}/>
            </ListItem>
          ))}

        </List> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <a href="/">
        <img src="https://res.cloudinary.com/davc0hf56/image/upload/v1612530143/xrzczs8v5ekd5iibboko.png" style={{height:"175px" ,width:"250px", marginBottom:"-64.5px"}} alt="Wynisco Logo"></img>
        </a>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {menu.map((item, index) => (
            <ListItem id="nav-list-item" button key={item.label}>
              <ListItemIcon id="icon-nav">{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} onClick={()=>handleClick(item)}/>
            </ListItem>
          ))}

        </List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       {children}
      </main>
    </div>
  );
}
