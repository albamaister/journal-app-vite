
import { Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

export const SideBar = ({ drawerWith = 240 }) => {

    const { displayName } = useSelector( state => state.auth )
    const { notes } = useSelector( state => state.journal )

  return (
    <Box component='nav' sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}>
        <Drawer variant="permanent" open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith } }}>
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    notes.map( note => (
                        <SideBarItem key={note.id} {...note}/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
