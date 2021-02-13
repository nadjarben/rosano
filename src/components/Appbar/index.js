import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Language from './LanguageSwitcher'
import TotalCart from "./TotalCart";
import Drawer from './Drawer'
import { LanguageWrapper, Wrapper } from './style';

export default function ButtonAppBar({ checkout }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDrawer, setIsDrawer] = React.useState({
    right: false,
  });
 
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawer({ ...isDrawer, [anchor]: open });
  };


  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
          <IconButton size='medium' edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
            <MenuIcon style={{fontSize: '25px'}} />
          </IconButton>
          <Drawer toggleDrawer={toggleDrawer} isDrawer={isDrawer} />
          <LanguageWrapper>
            <TotalCart checkout={checkout} />
            <Language toggleCollapse={toggleCollapse} />
            </LanguageWrapper>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}
