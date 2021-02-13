import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'
import { changeCategory } from '../../../store/actions/app'
import { Wrapper, ListItemStyled, DrawerTitle } from './style';


const useStyles = makeStyles({
  list: {
    width: 250,
    textAlign: 'center',
    justifyContent: 'center'
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer({ isDrawer, toggleDrawer }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCategory = (toto) => {
    dispatch(changeCategory(toto))
  }


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <ListItemStyled button onClick={() => handleCategory('package')}>
          <h4 style={{ textAlign: 'center' }}>{t("package")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('beer')}>
          <h4 style={{ textAlign: 'center' }}>{t("beer")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled utton onClick={() => handleCategory('vodka')}>
          <h4>{t("vodka")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('whiskey')}>
          <h4 style={{ textAlign: 'center' }}>{t("whiskey")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('rhum')}>
          <h4 style={{ textAlign: 'center' }}>{t("rhum")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('arak')}>
          <h4 style={{ textAlign: 'center' }}>{t("arak")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('gin')}>
          <h4 style={{ textAlign: 'center' }}>{t("gin")}</h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('soft drink')}>
          <h4 style={{ textAlign: 'center' }}>{t("soft drink")} </h4>
        </ListItemStyled>
        <Divider variant="middle" />
        <ListItemStyled button onClick={() => handleCategory('snack')}>
          <h4 style={{ textAlign: 'center' }}>{t("snack")}</h4>
        </ListItemStyled>
      </List>
    </div>
  );

  return (
    <Wrapper>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={isDrawer[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <DrawerTitle>{t("menu")}</DrawerTitle>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Wrapper>
  );
}