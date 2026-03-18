import { Box, List, ListItem } from '@mui/material';
import SidebarBtn from '../sidebar-btn/SidebarBtn.tsx';
import useStyles from './sidebarStyles.tsx'


function Sidebar() {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.sidebar}>
        <List>
          <ListItem><SidebarBtn btnTitle='כל השירים' /></ListItem>
          <ListItem><SidebarBtn btnTitle='פלייליסטים' /></ListItem>
          <ListItem><SidebarBtn btnTitle='מועדפים' /></ListItem>
        </List>
      </Box>
    </>
  )
}

export default Sidebar
