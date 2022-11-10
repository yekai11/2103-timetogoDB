import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Tooltip} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollButton = styled(IconButton)(({ theme }) => ({
  zIndex: 11,
  position: "fixed",
  bottom: "2vh",
  backgroundColor: "#DCDCDC",
  color: "#303f9f",
  borderRadius: 10,
  "&:hover, &.Mui-focusVisible": {
    transition: "0.3s",
    color: "#d32f2f",
    backgroundColor: "#DCDCDC",
  },
  [theme.breakpoints.up("xs")]: {
    right: "5%",
    backgroundColor: "rgb(220,220,220,0.7)",
  },
  [theme.breakpoints.up("lg")]: {
    right: "6.5%",
  },
}));

const Scroll = ({ showBelow }) => {
  //   const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <Tooltip title="Scroll To Top" placement="top">
          <ScrollButton
            onClick={handleClick}
            //   className={classes.toTop}
            aria-label="to top"
            component="span"
          >
            <ExpandLessIcon />
          </ScrollButton>
        </Tooltip>
      )}
    </div>
  );
};
export default Scroll;
