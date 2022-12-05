import { Toolbar } from "@mui/material";
import { Box } from "@mui/material"
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const JournalLayout = ({ children }) => {
    const [drawerWith, setDrawerWith] = useState(240)
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWith={drawerWith}/>
      <SideBar drawerWith={drawerWith}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
