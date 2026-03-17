import useStyles from './sidebarBtnStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { grey } from '@mui/material/colors';

interface Props {
  btnTitle: string;
}

function SidebarBtn({ btnTitle }: Props) {
  const { classes } = useStyles();
  const iconMap: Record<string, typeof HomeIcon> = {
    'כל השירים': HomeIcon,
    'פלייליסטים': LibraryMusicIcon,
    'מועדפים': FavoriteIcon,
  };

  const Icon = iconMap[btnTitle];

  return (
    <div className={classes.btn}>
      <p className={classes.title}>{btnTitle}</p>
      {Icon && <Icon sx={{ color: grey[500] }}/>}
    </div>
  );
}

export default SidebarBtn;
