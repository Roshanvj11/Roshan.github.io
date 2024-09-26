import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import '../css/Navbar.css'

export default function Navbar() {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setDropdown(prevDropdown => !prevDropdown)
    setAnchorEl(null);
  };

  const [dropdown, setDropdown] = useState(false);



  return (
    <div className='Head'>

      <div className='logo'>
        <h2>Portfolio</h2>
      </div>

      <div className='headerTwo'>
        <Link className='headLink' to='/'>Home</Link>
        <Link className='headLink' to='/about'>About</Link>
        <Link className='headLink' to='/skills'>Skills</Link>
        <Link className='headLink' to='/education'>Education </Link>

      </div>

      <div className={`headerTwo1${dropdown ? 'visible' : 'hidden'}`}>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          className='dropdown'
          onClick={handleClick}
        >
          <DensityMediumIcon sx={{ color: 'whitesmoke' }} />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          PaperProps={{
            style: {
              minWidth: '100px',
            },
          }}
        >
          <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>
            <Link className='headLink secondlink' to='/'>Home</Link>
          </MenuItem>
          <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>
            <Link className='headLink secondlink' to='/about'>About</Link>
          </MenuItem>
          <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>
            <Link className='headLink secondlink' to='/skills'>Skills</Link>
          </MenuItem>
          <MenuItem  sx={{ justifyContent: 'center' }} onClick={handleClose}>
          <Link className='headLink secondlink' to='/education'>Education</Link>
          </MenuItem>
        </Menu>
      </div>

    </div>
  )
}



