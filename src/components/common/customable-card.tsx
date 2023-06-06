import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

// Card 컴포넌트
type CustomableCardProps = {
  id: string;
  name: string;
  price: number;
  src: string;
  date: string;
};

export default function CustomableOrderCard({
  id,
  name,
  price,
  src,
  date,
}: CustomableCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={src} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            가격: {price}원
          </Typography>
          <Typography variant="body2" color="text.secondary">
            날짜: {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
