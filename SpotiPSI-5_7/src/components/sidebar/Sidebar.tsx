import SidebarOption from './sidebar-option/SidebarOption.tsx';
import useStyles from './sidebarStyles.tsx';
import { Box, List, ListItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const buttons = [
    { title: 'כל השירים', route: '/songs' },
    { title: 'פלייליסטים', route: '/playlists' },
    { title: 'מועדפים', route: '/favorites' },
  ];

  return (
    <>
      <Box className={classes.sidebar}>
        <List>
          {buttons.map(({ title, route }) => (
            <ListItem key={title}>
              <SidebarOption
                btnTitle={title}
                selected={location.pathname === route}
                onClick={() => navigate(route)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default Sidebar;
