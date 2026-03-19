import { useEffect, useState } from "react";
import type { Song } from '../types';

const UseFetchSongs = (pageChange: string) => {
    const [songsList, setSongsList] = useState<Song[]>([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await fetch("http://127.0.0.1:5001/api/songs");
            const data = await response.json();
            setSongsList(data);
        };

        fetchSongs();
    }, [pageChange]);

    return songsList;
}

export default UseFetchSongs;