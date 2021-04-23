import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const AVATAR =
  "https://i.pinimg.com/originals/86/08/70/860870066df05a7a29bcb5bb9ea2e9a7.jpg";

const useStyles = makeStyles({
  toolbar: {
    maxWidth: 1024,
    width: "100%",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  loginContainer: {
    marginLeft: "auto",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatarImg: {
    marginRight: 10,
  },
});

const Header = () => {
  const classes = useStyles();

  const IS_LOGGED_IN = false;

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Главная</Typography>
        <Box className={classes.loginContainer}>
          {IS_LOGGED_IN ? (
            <Box className={classes.profileContainer}>
              <Avatar
                className={classes.avatarImg}
                alt="Some Name"
                src={AVATAR}
              />
              <Typography variant="subtitle1">Helena Moore</Typography>
            </Box>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
