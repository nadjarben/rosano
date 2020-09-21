import React from "react";
import PropTypes from "prop-types";
import store from "../../store/store";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppBarStyled, TabsStyled, TabStyled} from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState("package");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    store.dispatch({type: 'CHANGE_CATEGORY', payload: newValue})
  };

  return (
      <AppBarStyled position="static" color="default">
        <TabsStyled
          value={value}
          onChange={handleChange}
          indicatorColor=""
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          <TabStyled label="package" value="package" />
          <TabStyled label="vodka" value="vodka" />
          <TabStyled label="whiskey" value="whiskey" />
          <TabStyled label="rhum" value="rhum" />
          <TabStyled label="arak" value="arak" />
          <TabStyled label="beer" value="beer" />
          <TabStyled label="snack" value="snack" />
          <TabStyled label="soft drink" value="soft drink" />
        </TabsStyled>
      </AppBarStyled>
  );
}
