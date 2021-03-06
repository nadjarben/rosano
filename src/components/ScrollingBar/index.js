import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'
import { changeCategory, resetSearchBar } from '../../store/actions/app'
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppBarStyled, TabsStyled, TabStyled } from "./style";

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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("beer");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(changeCategory(value))
    dispatch(resetSearchBar())
  }, [value])

  return (
    <>
      <AppBarStyled position="static" color="default">
        <TabsStyled
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{ style: { background: "white" } }}
        >
          <TabStyled label={t("package")} value="package" />
          <TabStyled label={t("beer")} value="beer" />
          <TabStyled label={t("vodka")} value="vodka" />
          <TabStyled label={t("whiskey")} value="whiskey" />
          <TabStyled label={t("rhum")} value="rhum" />
          <TabStyled label={t("arak")} value="arak" />
          <TabStyled label={t("gin")} value="gin" />
          <TabStyled label={t("snack")} value="snack" />
          <TabStyled label={t("soft drink")} value="soft drink" />
          <TabStyled label={t("tobacco")} value="tobacco" />
        </TabsStyled>
      </AppBarStyled>
    </>
  );
}
