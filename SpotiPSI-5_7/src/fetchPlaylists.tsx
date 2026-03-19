import { useEffect, useState } from "react";
import type { PlaylistType } from './types';

const FetchPlaylists = () => {
    const [PlaylistsList, setPlaylistsList] = useState<PlaylistType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const fetchPlaylists = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:5001/api/playlists");
            const data = await response.json();

            setPlaylistsList(data);

        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            return;
        }
        finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    
    return PlaylistsList;

}

export default FetchPlaylists;