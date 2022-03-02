import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { createTheme } from "@mui/material";
import { Work } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Dashboard } from "@mui/icons-material";
import { ContactPage } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { Close } from "@mui/icons-material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export const drawerWidth = 350;
const arr = [
  {
    name: "Profile",
    link: "/profile",
    icon: <Person style={{ marginLeft: "5%" }} />,
  },
  {
    name: "Dashboard",
    link: "/",
    icon: <Dashboard style={{ marginLeft: "5%" }} />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1bOC0GljBIQnR4Y2yOkB1R2puxNgQp-24/view?usp=sharing",
    icon: <ContactPage style={{ marginLeft: "5%" }} />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/salikuddin",
    icon: <LinkedIn style={{ marginLeft: "5%" }} />,
  },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <h2 style={{ marginLeft: "32%", marginTop: "-40px" }}>Turing tests</h2>
      <ListItem
        button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          borderRadius: "50px",
          backgroundColor: "#EEEDE7",
          width: "80%",
        }}
      >
        <Work
          style={{ marginLeft: "13%", marginRight: "5%" }}
          sx={{ color: green[300] }}
        />
        <ListItemText
          style={{ marginLeft: "10" }}
          secondary=" Available for Internship"
        />
      </ListItem>
      <Divider />
      <List style={{ marginTop: "10%", marginBottom: "5%" }}>
        {arr.map((obj, index) => (
          <Link href={obj.link}>
            <ListItem button key={obj.name}>
              {obj.icon}
              <ListItemText primary={obj.name} style={{ marginLeft: "10%" }} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>
            Cometlabs{" "}
          </h1>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
            style={{ right: "20", marginLeft: "auto" }}
          >
            <Close />
          </IconButton>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
export { NavBar };
