import React from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorTemporaryDrawer from '../Drawer/Drawer';
import { useState } from 'react';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  
    return (
    <header className='header'>
        <div className='header__icon'>
            <button onClick={handleDrawerToggle}><MenuIcon className='header__icon'/></button>
        </div>
        <div>
            <h2 className='header__title'>Dashboard</h2>
        </div>
        <AnchorTemporaryDrawer open={isDrawerOpen} onClose={handleDrawerToggle} />
    </header>
  )
}

export default Header