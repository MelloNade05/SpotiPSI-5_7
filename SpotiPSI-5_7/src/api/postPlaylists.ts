import type { PlaylistType } from "../types";

export const updatePlaylists = async ({ id, name, songIds }: PlaylistType) => {
    try {
        const path = `http://127.0.0.1:5001/api/playlists`;
        const response = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ id: id, name: name, songsIds: songIds }),
        });

        if (!response.ok) {
            throw new Error(`Failed to post playlists`);
        }
        const data = JSON.parse(await response.text()); 
        console.log(data);
        return true;
    }
    catch (error) {
        console.error('Playlists API error:', error);
        return false;
    }
};