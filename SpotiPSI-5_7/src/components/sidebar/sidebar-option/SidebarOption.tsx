import useStyles from './sidebarOptionStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

interface Props {
  btnTitle: string;
  selected?: boolean;
  onClick?: () => void;
}

function SidebarBtn({ btnTitle, selected = false, onClick }: Props) {
  const { classes, cx } = useStyles();

  const iconMap: Record<string, typeof HomeIcon> = {
    'כל השירים': HomeIcon,
    'פלייליסטים': LibraryMusicIcon,
    'מועדפים': FavoriteIcon,
  };
  const Icon = iconMap[btnTitle];

  return (
    <div className={cx(classes.btn, { [classes.selected]: selected })} onClick={onClick}>
      <h4 className={classes.title}>{btnTitle}</h4>
      {Icon && <Icon className={classes.icon} />}
    </div>
  );
}

export default SidebarBtn;
