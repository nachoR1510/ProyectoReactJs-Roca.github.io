import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const itemListContainer = ({ game }) => {
  const { img, titulo, precio, id } = game;
  return (
    <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 500 }} id="cardStyle">
        <CardActionArea>
          <CardMedia component="img" height="300" image={img} alt="juego" />
          <CardContent>
            <Typography component="div" variant="h3">
              {titulo}
            </Typography>
            <Typography color="text.secondary" variant="h3">
              $ {precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default itemListContainer;
