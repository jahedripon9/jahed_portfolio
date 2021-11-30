// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

// const pages = ['BIOGRAPHY', 'PORTFOLIO', 'CONTACT'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LeftMenu = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  //   <Link hraf='/biography'></Link>;
  //   <Link hraf='/portfolio'></Link>;
  //   <Link hraf='/contact'></Link>
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
    
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    < >
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
          >
            Jahed Ahmed Ripon
          </Typography>
          <div sm={12} sx={{display: 'flex'}}>
          <Link to='/'><Button sx={{mx:'20px', color:'white'}} variant='text'>Home</Button></Link>
          <Link to='/about'><Button sx={{mx:'20px', color:'white'}} variant='text'>About</Button></Link>

          <Link to='/biography'><Button sx={{mx:'20px', color:'white'}} variant='text'>Biography</Button></Link>
          <Link to='/portfolio'><Button sx={{mx:'20px', color:'white'}} variant='text'>Portfolio</Button></Link>
          <Link to='/service'><Button sx={{mx:'20px', color:'white'}} variant='text'>Service</Button></Link>
          <Link to='/contact'><Button sx={{mx:'20px', color:'white'}} variant='text'>Contact Me</Button></Link>
          <Link to='/blog'><Button sx={{mx:'20px', color:'white'}} variant='text'>Blog</Button></Link>
          </div>


          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Jahed Ahmed Ripon
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          {/* <Box sx={{ flexGrow: 0 }}> */}
            {/* <Tooltip title="Open settings"> */}
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                <Avatar alt="Jahed Ahmed Ripon" src="https://i.ibb.co/zhRQH8q/Jahad-Master.jpg" />
              {/* </IconButton>
            </Tooltip> */}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default LeftMenu;