import SidebarBtn from '../sidebar-btn/SidebarBtn.tsx';
import useStyles from './sidebarStyles.tsx'


function Sidebar() {
    const { classes } = useStyles();

  return (
    <>
      <div className={classes.sidebar}>
        <ul>
            <li><SidebarBtn btnTitle='כל השירים'/></li>
            <li><SidebarBtn btnTitle='פלייליסטים'/></li>
            <li><SidebarBtn btnTitle='מועדפים'/></li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
