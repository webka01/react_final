import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
  useNavigate,
} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';


export const AppBarComponentLogout=()=> {
  const navigate = useNavigate();

  const handleLogOut=()=>{
    
    localStorage.removeItem('token');
    
    navigate('/')
    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rentStadium
          </Typography>
            <Button onClick={handleLogOut} component={Link} to="/" color="inherit">Logout</Button>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link} to="/me"
                color="inherit"
              >
                <AccountCircle />
            </IconButton>
         
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}