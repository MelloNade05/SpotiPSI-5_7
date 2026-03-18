import useStyles from './sidebarBtnStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useNavigate } from 'react-router-dom'

interface Props {
  btnTitle: string;
}

function SidebarBtn({ btnTitle }: Props) {
  // styles
  const { classes } = useStyles();

  // match routes
  const routeMap: Record<string, string> = {
    'כל השירים': "/songs",
    'פלייליסטים': "/playlists",
    'מועדפים': "/favorites",
  };
  const route = routeMap[btnTitle];

  // match icon
  const iconMap: Record<string, typeof HomeIcon> = {
    'כל השירים': HomeIcon,
    'פלייליסטים': LibraryMusicIcon,
    'מועדפים': FavoriteIcon,
  };
  const Icon = iconMap[btnTitle];

  // routes work

  return (
    <div className={classes.btn}>
      <h4 className={classes.title}>{btnTitle}</h4>
      {Icon && <Icon className={classes.icon}/>}
    </div>
  );
}

export default SidebarBtn;