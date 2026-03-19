import { Box, Typography } from '@mui/material';
import useStyles from './playerStyles.tsx'

function Player() {
    const { classes } = useStyles();

  return (
    <>
      <Box className={classes.player}>
        <Typography variant="body1" className={classes.title} gutterBottom> נגן שירים </Typography>
      </Box>
    </>
  )
}

export default Player
