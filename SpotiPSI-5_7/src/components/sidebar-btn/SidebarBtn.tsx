import useStyles from './sidebarBtnStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

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
      <h4 className={classes.title}>{btnTitle}</h4>
      {Icon && <Icon className={classes.icon}/>}
    </div>
  );
}

export default SidebarBtn;
