// src/components/common/navigation-bar.tsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListItemButton from "@mui/material/ListItemButton";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const DrawerContent = ({
  handleDrawerClose,
}: {
  handleDrawerClose: () => void;
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <ListItemButton
      key="로그인"
      onClick={() => {
        router.push("/auth/sign-in");
        handleDrawerClose();
      }}
    >
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="로그인" />
    </ListItemButton>
  );
};

const NAVIGATION_HEIGHT = 56;

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Toolbar
        sx={{
          position: "sticky",
          top: 0,
          height: NAVIGATION_HEIGHT,
        }}
      >
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {`EasyApp`}
        </Typography>
        <IconButton color="inherit" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div style={{ width: "250px" }}>
          <Typography variant="h6" style={{ padding: "20px" }}>
            {`EasyApp`}
          </Typography>
          <List>
            <DrawerContent handleDrawerClose={handleDrawerClose} />
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export const NavigationBarHeight = NAVIGATION_HEIGHT;

export default NavigationBar;
