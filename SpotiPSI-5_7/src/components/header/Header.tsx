import useStyles from './headerStyles.tsx'

function Header() {
    const { classes } = useStyles();

  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.title}> SpotiPSI ♪ </h1>
      </div>
    </>
  )
}

export default Header