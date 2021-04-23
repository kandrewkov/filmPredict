import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 300ms ease",
    "&:hover": {
      opacity: 0.6,
    },
  },
  avatarImg: {
    marginRight: 10,
  },
  menuItemText: {
    marginLeft: 10,
  },
});
