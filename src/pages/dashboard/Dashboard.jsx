import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";


import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';


import '../dashboard/Dashboard.scss'
import Notes from "../notes/Notes";
import keep from '../Assests/keep.png';
import Archive from "../archive/Archive";
import Trash from "../trash/Trash";
import SignOut from "../signOut/SignOut";



import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { useHistory } from "react-router";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  backgroundColor: 'white',
  boxShadow: "0px",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  flexShrink: 10,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: 10,

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function MiniDrawer() {
  const history = useHistory();
  const theme = useTheme();
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);

  let iconlist = [
    {
      icons: <LightbulbOutlinedIcon />,
      iText: "Notes"
    },
    {
      icons: <NotificationsOutlinedIcon />,
      iText: "Reminders"
    },
    {
      icons: <CreateOutlinedIcon />,
      iText: "Edit Labels"
    },
    {
      icons: <ArchiveOutlinedIcon />,
      iText: "Archive"
    },
    {
      icons: <DeleteForeverOutlinedIcon />,
      iText: "Bin"
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  const iconClick = (text) => {
    if (text.iText == "Notes") {

      history.push("/")
    }
    else if (text.iText == "Archive") {
  
      history.push("/archive")
    }
    else if (text.iText == "Bin") {
      history.push("/trash")
    }
    else {
      console.log("page not found")
    }
  }

const searchContent =(e) =>{
  setSearch(e.target.value)
}

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <div className="mainHeader">
            <img className="keep" src={keep} alt="this is keep"></img>
            <Typography variant="h5" noWrap component="div">
              Keep
            </Typography>
            <div className="searchBar">
              <SearchOutlinedIcon />
              <input className="search" type="text" placeholder="Search" 
              onChange={(e)=>searchContent(e)}
              ></input>
            </div>
            <div className="headBar">
              <ul className="headerIcon">
                <IconButton> <RefreshOutlinedIcon /> </IconButton>
                <IconButton> <ViewStreamOutlinedIcon /> </IconButton>
                <IconButton> <SettingsOutlinedIcon /></IconButton>
                <IconButton> <AppsOutlinedIcon /></IconButton>
                <div>
                  <SignOut />
                </div>
              </ul>
            </div>

          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
        </DrawerHeader>
        <List>

          {iconlist.map((text, index) => (
            <ListItem button key={text.iText} onClick={() => iconClick(text)}>
              <ListItemIcon>

                {text.icons}

              </ListItemIcon>
              <ListItemText primary={text.iText} />
            </ListItem>
          ))}

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          
         
            <Switch>
              <Route exact path="/" component={Notes} />
              <Route exact path="/archive" component={Archive} />
              <Route exact path="/trash" component={Trash} />
            </Switch>
         

        </Typography>
      </Box>
    </Box>
  );
}