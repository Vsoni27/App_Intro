import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import logo from "../../public/images/logo.avif";
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarContent = (
    <List sx={{ color: "black" }}>
      <ListItem>
        <Avatar src={logo} sx={{ height: "70px", width: "70px" }} />
        <ListItemText
          primary={
            <Typography variant="h5" fontWeight="500" fontSize="25px">
              CropDoc
            </Typography>
          }
          sx={{ ml: "10px" }}
        />
      </ListItem>
      <Link to="/">
        <ListItem>
          <ListItemText
            primary={
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="20px"
                marginLeft="5px"
                marginBottom="15px"
              >
                Home
              </Typography>
            }
            sx={{ ml: "10px" }}
          />
        </ListItem>
      </Link>
      <Link to="/about">
        <ListItem>
          <ListItemText
            primary={
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="20px"
                marginLeft="5px"
                marginBottom="15px"
              >
                About
              </Typography>
            }
            sx={{ ml: "10px" }}
          />
        </ListItem>
      </Link>
      <ListItem>
        <ListItemText
          primary={
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="20px"
              marginLeft="5px"
              marginBottom="15px"
            >
              Services
            </Typography>
          }
          sx={{ ml: "10px" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="20px"
              marginLeft="5px"
              marginBottom="15px"
            >
              Contact
            </Typography>
          }
          sx={{ ml: "10px" }}
        />
      </ListItem>
    </List>
  );

  return (
    <div>
      {isMobile ? (
        <AppBar sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ display: "flex" }}>
            <MenuIcon sx={{ color: "black" }} onClick={toggleSidebar} />
            <div className="flex flex-row justify-center items-center ml-2">
              <Avatar src={logo} sx={{ height: "50px", width: "50px" }} />
              <h1 className="text-gray-900 text-2xl font-semibold">CropDoc</h1>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <nav className="bg-white p-2 shadow-md fixed w-full top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <Avatar src={logo} sx={{ height: "50px", width: "50px" }} />
              <h1 className="text-darkgrey text-2xl font-semibold">CropDoc</h1>
            </div>
            <div className="flex ">
              <Link to="/"><h1 className="text-gray hover:bg-gray-200 cursor-pointer p-1 rounded-lg mr-4 transition duration-300 font-medium">
                Home
              </h1></Link>
              <Link to="/about"><h1 className="text-gray hover:bg-gray-200 cursor-pointer p-1 rounded-lg mr-4 transition duration-300 font-medium">
                About
              </h1></Link>
              <Link><h1 className="text-gray hover:bg-gray-200 cursor-pointer p-1 rounded-lg mr-4 transition duration-300 font-medium">
                Services
              </h1></Link>
              <Link><h1 className="text-gray hover:bg-gray-200 cursor-pointer p-1 rounded-lg transition duration-300 font-medium">
                Contact
              </h1></Link>
            </div>
            <button className="bg-green-400 text-white font-bold px-4 py-2 rounded-xl hover:bg-darker-green transition duration-300">
              Download App
            </button>
          </div>
        </nav>
      )}

      {isMobile && (
        <Drawer
          sx={{ "& .MuiDrawer-paper": { width: "300px", bgcolor: "#FFFFFF" } }}
          anchor="left"
          open={isOpen}
          onClose={toggleSidebar}
          onClick={toggleSidebar}
        >
          {sidebarContent}
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
