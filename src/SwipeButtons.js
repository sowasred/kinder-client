import React from "react";
import "./SwipeButtons.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CancelIcon from "@material-ui/icons/Cancel";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipebuttons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipebuttons__repeat" />
      </IconButton>
      <IconButton>
        <CancelIcon fontSize="large" className="swipebuttons__cancel" />
      </IconButton>
      <IconButton>
        <StarIcon fontSize="large" className="swipebuttons__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipebuttons__fav" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipebuttons__light" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
