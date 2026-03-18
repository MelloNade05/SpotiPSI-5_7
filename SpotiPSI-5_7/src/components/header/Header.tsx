import { Box, Typography } from '@mui/material';
import useStyles from './headerStyles.tsx'

function Header() {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <Typography variant="h4" className={classes.title} gutterBottom
          sx={{ fontWeight: 'Bold' }}> ♪ SpotiPSI  </Typography>
      </Box >
    </>
  )
}

export default Header