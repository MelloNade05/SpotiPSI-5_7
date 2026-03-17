import useStyles from './playerStyles.tsx'

function Player() {
    const { classes } = useStyles();

  return (
    <>
      <div className={classes.player}>
        <p className={classes.title}>נגן שירים</p>
        
      </div>
    </>
  )
}

export default Player
