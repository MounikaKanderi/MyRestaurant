import {React, useState} from 'react';
import '../styles/HeaderStyles.css';
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  }

  const MenuDrawer= () => {
    return(
      <Box onClick={handleDrawerOpen} sx={{textAlign: 'center'}}>
        <Typography
          variant= "h6"
          component="div"
          sx={{flexGrow: 1, color: 'goldenrod', my:2}}
          >
          <img src={logo} alt='My Restaurant' height={'70px'} width={'250px'}/>
          <Divider />
        </Typography>
          <ul className='list flex-col'>
            <li>
              <NavLink activeClassName='active' to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={"/menu"}>Menu</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
      </Box>
    )
  }

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            <IconButton color={'inherit'} aria-label='open drawer' edge='start'
            sx={{
              mr: 2 ,
              display:{sm:'none'}
              }}
              onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant= "h6"
              component="div"
              sx={{flexGrow: 1, color: 'goldenrod'}}
            >
              <img src={logo} alt='My Restaurant' height={'70px'} width={'250px'}/>
            </Typography>
            <Box sx={{display:{xs:'none' , sm:'block'}}}>
              <ul className='flex'>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileOpen} 
            onClose={handleDrawerOpen}
            sx={{display:{xs:'block' , sm:'none'}, '& .MuiDrawer-paper':{
              boxSizing:'border-box',
              width:'240px'
            }}}
            >
            <MenuDrawer />
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header