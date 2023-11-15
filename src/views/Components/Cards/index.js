import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple, green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
//import { Grid } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//const cards = [1, 2];

export const ReviewCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // cards.forEach(card => {
    // })

    <Card sx={{ maxWidth: "40%", maxHeight: 900, mt: "-67%", ml: "5%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            <AssignmentIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Universidade Presbiteriana Mackenzie"
        subheader="Jan 04, 2002"
      />
      <CardMedia
        component="img"
        height="250"
        image="mackenzie.jpg"
        alt="mack"
      />
      <CardContent>
        <Typography sx={{ fontSize: "20px" }} color="text.secondary">
          Universidade Presbiteriana Mackenzie é uma instituição de ensino
          superior privada e confessional no Brasil. A universidade é mantida
          pelo Instituto Presbiteriano Mackenzie, uma associação civil de
          direito privado, sem fins lucrativos e de finalidade educacional.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color="secondary">
          Deixar comentário
        </Button>
        <IconButton aria-label="add to favorites" sx={{ ml: "10px" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Avaliações:</Typography>
          <Typography paragraph>Teste teste teste</Typography>
          <Typography paragraph>teste testeeeee testeeeee</Typography>
          <Typography>qualquer coisa qualquer coisa</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export const ReviewCard2 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // cards.forEach(card => {
    // })

    <Card sx={{ maxWidth: "40%", maxHeight: 900, mt: "50px", ml: "5%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <FolderIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Higienópolis-Mackenzie"
        subheader="Mai 05, 2002"
      />
      <CardMedia
        component="img"
        height="250"
        image="higienopolis.jpg"
        alt="mack"
      />
      <CardContent>
        <Typography sx={{ fontSize: "20px" }} color="text.secondary">
          A Estação Higienópolis–Mackenzie é uma estação da Linha 4–Amarela do
          Metrô de São Paulo operada pela ViaQuatro. Ela possui área total de
          16,4 mil metros quadrados e profundidade de 30,7 metros divididos em
          seis níveis. Para permitir a acessibilidade a estação possui cinco
          elevadores, 26 escadas rolantes e 10 escadas fixas, além de pisos
          táteis.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color="secondary">
          Deixar comentário
        </Button>
        <IconButton aria-label="add to favorites" sx={{ ml: "10px" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Avaliações:</Typography>
          <Typography paragraph>Teste teste teste</Typography>
          <Typography paragraph>teste testeeeee testeeeee</Typography>
          <Typography>qualquer coisa qualquer coisa</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
