import Grid from "@mui/material/Grid";
import CustomableOrderCard from "./customable-card";

// Grid 컴포넌트
export default function CustomableCardGrid() {
  const orderItems = [
    {
      id: "1234",
      name: "주전자",
      price: 1000,
      src: "https://shopping-phinf.pstatic.net/main_6229849/6229849107.12.jpg",
      date: "2023. 05. 29",
    },
    {
      id: "1235",
      name: "멀티탭",
      price: 2000,
      src: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163609212262937303.jpg",
      date: "2023. 06. 01",
    },
    {
      id: "1236",
      name: "후라이팬",
      price: 3000,
      src: "https://simage.mujikorea.net/goods/31/13/93/19/4550182577082_N_N_400.jpg",
      date: "2023. 06. 04",
    },
    {
      id: "1237",
      name: "전자시계",
      price: 4000,
      src: "https://simage.mujikorea.net/goods/31/04/60/43/4547315831999_N_N_400.jpg",
      date: "2023. 06. 06",
    },
  ];

  return (
    <Grid container spacing={1}>
      {orderItems.map((item) => (
        <Grid item xs={6} sm={6} md={6} key={item.id}>
          <CustomableOrderCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
