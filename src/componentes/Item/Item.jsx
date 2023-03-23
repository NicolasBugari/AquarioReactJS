import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";
import {Link} from 'react-router-dom'

const Item = ({ product }) => {
  return (
    
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>

          <Typography
            gutterBottom
            component="div"
            style={styles.title}
          >
            {product.description}
          </Typography>
          <Typography variant="h5" color="black">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detalle/${product.id}`}>
        <Button variant="contained" color="success">Ver Más</Button>
          </Link>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#80D0C7",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
    alignItems: "center",
  },
};

export default Item;