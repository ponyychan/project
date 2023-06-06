import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type CustomableBottomNavigationProps = {
  position: "top" | "bottom";
};

export default function CustomableBottomNavigation({
  position,
}: CustomableBottomNavigationProps) {
  const [value, setValue] = React.useState(0);

  const topStyle = {
    top: 0,
  };
  const bottomStyle = {
    bottom: 0,
  };
  const boxStyle = position === "top" ? topStyle : bottomStyle;

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{
        position: "absolute",
        width: "100%",
        ...boxStyle,
      }}
    >
      <BottomNavigationAction label="홈" icon={<HomeIcon />} />
      <BottomNavigationAction label="카테고리" icon={<CategoryIcon />} />
      <BottomNavigationAction label="프로필" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
