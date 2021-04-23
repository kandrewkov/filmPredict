import { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "./useStyles";

const AVATAR =
  "https://i.pinimg.com/originals/86/08/70/860870066df05a7a29bcb5bb9ea2e9a7.jpg";

const ProfileContainer = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className={classes.profileContainer} onClick={handleClick}>
        <Avatar className={classes.avatarImg} alt="Some Name" src={AVATAR} />
        <Typography variant="subtitle1">Helena Moore</Typography>
      </Box>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <PersonIcon color="primary" />{" "}
          <Typography className={classes.menuItemText}>Профиль</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ExitToAppIcon color="secondary" />{" "}
          <Typography className={classes.menuItemText}>Выйти</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileContainer;
