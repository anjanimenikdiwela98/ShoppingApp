import { Notifications } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from "@mui/material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const pages = ['Home','Products', 'About', 'Contact'];

const theme = createTheme({
  palette:{
    primary:{
      main: "#fa8128",//Tangerine
      light: "#ffb93f"
    },
    secondary:{
      main: '#fcae1e',//MeriGold
    },
    otherColor:{
      main:"#999"
    }
  }
})

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "#fa8128",
  justifyContent: "space-between",
  
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "15%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" }, mr: 5 }}>
        HAKD Collection
        </Typography>
       
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                //onClick={}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        <Search sx={{mr: 4}}>
        <Icons>
        <InputBase placeholder="Search..." />
        <Button sx={{ml: 6,"&:hover":{color: '#fcae1e'}}}>
            <SearchIcon sx={{color: '#fa8128'}}/>
            </Button>
          </Icons>
          
        </Search>
        
        <Icons>
        <Button>
          <Badge badgeContent={4} color="info">
          <ShoppingCartIcon sx={{color: 'white'}}/>
          </Badge></Button>
          <Button>
          <Badge badgeContent={2} color="error">
           <Notifications sx={{color: 'white'}}/>
          </Badge></Button>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;