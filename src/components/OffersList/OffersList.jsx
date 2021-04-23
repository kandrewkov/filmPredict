import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ghostInTheShell =
  "https://upload.wikimedia.org/wikipedia/ru/a/a7/%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D0%BA_%D0%B2_%D0%B4%D0%BE%D1%81%D0%BF%D0%B5%D1%85%D0%B0%D1%85.jpg";

const betterCallSaul =
  "https://upload.wikimedia.org/wikipedia/ru/c/cc/Better_Call_Saul_Season_4.jpg";

const rickAndMorty =
  "https://legendarium.ru/upload/iblock/721/721f81269e263a7419e64b3c5ee42dee.gif";

const chernobyl =
  "https://blimey.pro/wp-content/uploads/2019/07/1_evn-uoiztush56gjewx36g-1.jpeg";

const tileData = [
  {
    id: 1,
    img: betterCallSaul,
    title: "Лучше звоните Солу",
    author: "Драма",
    featured: true,
  },
  {
    id: 2,
    img: ghostInTheShell,
    title: "Призрак в доспехах",
    author: "Научная фантастика",
    featured: false,
  },
  {
    id: 3,
    img: rickAndMorty,
    title: "Рик и Морти",
    author: "Комедия",
    featured: false,
  },
  {
    id: 4,
    img: chernobyl,
    title: "Чернобыль",
    author: "Драма",
    featured: false,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1024,
    margin: "10px auto",
    boxSizing: "border-box",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 240px)",
    justifyContent: "space-around",
    gridAutoRows: "350px",
    gridGap: 20,
  },
}));

const OffersList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box m={1}>
        <Typography variant="h2">Вам может понравится</Typography>
      </Box>

      <ul className={classes.list}>
        {tileData.map((item) => (
          <li
            key={item.id}
            style={{
              background: `url(${item.img}) no-repeat`,
              backgroundSize: "cover",
              borderRadius: 10,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default OffersList;
