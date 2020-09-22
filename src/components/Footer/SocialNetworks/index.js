import React from "react";
import useWebShare from "react-use-web-share";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ShareIcon from '@material-ui/icons/Share';
import RoomIcon from '@material-ui/icons/Room'
import Divider from "@material-ui/core/Divider";
import { Wrapper } from "./style";

const SocialNetworks = () => {
  const { share } = useWebShare();
  const shareButton = () => {
    share({
      message: "Rosano City Market",
    });
  };
  return (
    <Wrapper>
      <IconButton edge="start" color="inherit" aria-label="menu" className="icon-tel">
        <PhoneIcon style={{ fontSize: "30px" }} />
      </IconButton>
      <IconButton edge="start" color="inherit" aria-label="menu" className="icon-wa">
        <WhatsAppIcon style={{ fontSize: "30px" }} />
      </IconButton>
      <IconButton edge="start" color="inherit" aria-label="menu" className="icon-wa">
        <RoomIcon style={{ fontSize: "30px" }} />
      </IconButton>
      <IconButton onClick={shareButton} edge="start" color="inherit" aria-label="menu" className="icon-share">
        <ShareIcon style={{ fontSize: "30px" }} />
      </IconButton>
      <Divider />
    </Wrapper>
  );
};

export default SocialNetworks;
