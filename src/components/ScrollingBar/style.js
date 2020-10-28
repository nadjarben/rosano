import styled, { keyframes } from "styled-components";
import { rollIn } from "react-animations";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const AppBarStyled = styled(AppBar)`
  background-color: #eeeeee !important;

  .Mui-selected {
    background-color: white;
    outline: 1px black;
    color: black !important;
    padding: 15px !important;
  }
  .MuiSvgIcon-fontSizeSmall {
    font-size: 30px !important;
    font-weight: bold;
  }
  
`;

export const TabsStyled = styled(Tabs)``;

export const TabStyled = styled(Tab)`
  color: black !important;
  font-size: 18px !important;
  color: black !important;
  font-family: "Arimo", sans-serif;
  font-weight: bold !important;
`;

const rollInAnimation = keyframes`${rollIn}`;
export const RollInDiv = styled.div`
  animation: 1.5s ${rollInAnimation};
`;
