import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import useStyles from './playlistStyles'
import SongsTable from '../songsTable/SongsTable';
import type { SongsTableProps } from '../songsTable/SongsTable';

interface PlaylistProps {
    name: string;
    songs: string[];
    allSongs: SongsTableProps['songs'];
}

function Playlist({ name, songs: songIds, allSongs }: PlaylistProps) {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const playlistSongs = allSongs.filter(song => songIds.includes(song.id));

    return (
        <Box className={classes.pageContainer}>
            <Box className={classes.top}>
                <Typography variant="h4" className={classes.header} gutterBottom sx={{ fontWeight: 'bold' }}>{name}</Typography>
                <IconButton onClick={() => navigate("/playlists")}>
                    <ArrowBackIcon fontSize="large" sx={{ color: 'white' }}/>
                </IconButton>
            </Box>
            <SongsTable songs={playlistSongs} />
        </Box>
    );
}

export default Playlist
