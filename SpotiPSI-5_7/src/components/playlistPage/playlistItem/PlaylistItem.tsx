import { Box, Typography } from '@mui/material';
import useStyles from './playlistItemStyles';

interface PlaylistItemProps {
    name: string;
    songsAmount: number;
    selected?: boolean;
    onClick?: () => void;
}

function PlaylistItem({ name, songsAmount, selected, onClick }: PlaylistItemProps) {
    const { classes, cx } = useStyles();

    return (
        <Box onClick={onClick} className={cx(classes.container, selected && classes.selected)}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.songs}>{songsAmount} שירים</Typography>
        </Box>
    );
}

export default PlaylistItem;
