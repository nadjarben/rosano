import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


export const AppBarStyled = styled(AppBar)`
  background-color: white !important;
  
  .Mui-selected {
    background-color: rgb(25, 25, 25);
    color: white !important;
  }
  .MuiSvgIcon-fontSizeSmall {
    font-size: 30px !important;
    font-weight: bold;
  }
`

export const TabsStyled = styled(Tabs)`
`

export const TabStyled = styled(Tab)`
  color: black !important;
  font-size: 18px !important;
  color: black !important;
  font-family: 'Alef', sans-serif !important;
  font-weight: bold !important;
`

