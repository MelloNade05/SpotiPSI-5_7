import { useEffect, useState } from "react";
import type { PlaylistType } from '../types';

const UseFetchPlaylists = (pageChange: string) => {
    const [PlaylistsList, setPlaylistsList] = useState<PlaylistType[]>([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const response = await fetch("http://127.0.0.1:5001/api/playlists");
            const data = await response.json();
            setPlaylistsList(data);
        };

        fetchPlaylists();
    }, [pageChange]);

    return PlaylistsList;
};

export default UseFetchPlaylists;


