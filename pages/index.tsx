import * as React from "react";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import CustomableBottomNavigation from "@/src/components/common/customable-bottom-navigation";
import CustomableOrderCard from "@/src/components/common/customable-card";
import CustomableCardGrid from "@/src/components/common/order-grid";
import CustomableCarousel from "@/src/components/common/customable-carousel";

type AppBarProps = {
  position: "top" | "bottom";
  backgroundColor: string;
  logoColor: string;
};

// 네비게이션 컴포넌트
function AppBar({ position, backgroundColor, logoColor }: AppBarProps) {
  const topStyle = {
    top: 0,
  };
  const bottomStyle = {
    bottom: 0,
  };
  const boxStyle = position === "top" ? topStyle : bottomStyle;

  return (
    <Box
      position="absolute"
      height={56}
      width="100%"
      zIndex={1}
      bgcolor={backgroundColor}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      {...boxStyle}
    >
      <Typography
        variant="h6"
        sx={{
          color: logoColor,
        }}
      >
        Your App
      </Typography>
      <IconButton color="inherit">
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
}

type CustomableLayoutProps = {
  navPosition: "top" | "bottom";
  navColor: string;
  logoColor: string;
  children: React.ReactNode;
};
const CustomableLayout = ({
  navPosition,
  navColor,
  logoColor,
  children,
}: CustomableLayoutProps) => {
  return (
    <Box pt={8}>
      <AppBar
        position={navPosition}
        backgroundColor={navColor}
        logoColor={logoColor}
      />
      {children}
      <CustomableBottomNavigation
        position={navPosition === "top" ? "bottom" : "top"}
      />
    </Box>
  );
};

export default function HomePage() {
  const [navPosition, setNavPosition] = useState<"top" | "bottom">("top");
  const [navColor, setNavColor] = useState("#ffffff");
  const [logoColor, setLogoColor] = useState("#000000");

  return (
    <Container maxWidth="lg">
      <Grid container minWidth="1200px" overflow="scroll" spacing={2}>
        <Grid
          item
          xs={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bgcolor={grey[100]}
            height="896px"
            width="414px"
            position="relative"
          >
            {/* 모바일 뷰 창에 네비게이션 추가 */}
            <CustomableLayout
              navPosition={navPosition}
              navColor={navColor}
              logoColor={logoColor}
            >
              <CustomableCarousel />
              <Typography my={2} variant="h4">
                추천 상품
              </Typography>
              <CustomableCardGrid />
            </CustomableLayout>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box bgcolor={grey[100]} minHeight="100vh">
            {/* 컨트롤러 창 */}
            <Stack direction="column">
              <FormControl
                variant="filled"
                style={{ marginBottom: "20px", width: "200px" }}
              >
                <InputLabel id="nav-position-label">네비게이션 위치</InputLabel>
                <Select
                  labelId="nav-position-label"
                  value={navPosition}
                  onChange={(e) =>
                    setNavPosition(e.target.value as "top" | "bottom")
                  }
                >
                  <MenuItem value="top">Top</MenuItem>
                  <MenuItem value="bottom">Bottom</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="filled"
                label="로고 컬러"
                type="color"
                value={logoColor}
                onChange={(e) => setLogoColor(e.target.value)}
                style={{ width: "200px" }}
              />
              <TextField
                variant="filled"
                label="앱바 배경 컬러"
                type="color"
                value={navColor}
                onChange={(e) => setNavColor(e.target.value)}
                style={{ width: "200px" }}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
