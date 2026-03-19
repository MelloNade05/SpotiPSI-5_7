import { Box } from '@mui/material';
import useStyles from './playlistStyles'

interface PlaylistProps {
    songs: string[];
}
function Playlist({ songs }: PlaylistProps) {
    const { classes } = useStyles();
  return (
    <Box>
        
    </Box>
  );
}

export default Playlist