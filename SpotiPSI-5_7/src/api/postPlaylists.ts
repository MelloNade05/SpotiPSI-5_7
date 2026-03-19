import type { PlaylistType } from "../types";

export const updatePlaylists = async ({ playlistId, name, songIds }: PlaylistType) => {
    try {
        const path = `http://127.0.0.1:5001/api/playlists`;
        const response = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({playlistId, name, songIds }),
        });

        if (!response.ok) {
            throw new Error(`Failed to post playlists`);
        }
        return true;
    }
    catch (error) {
        console.error('Playlists API error:', error);
        return false;
    }
};

export const addToPlaylists = async (playlistId: string, songId: string) => {
  try {
    const path = `http://127.0.0.1:5001/api/playlists/${playlistId}/add`;

    const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ songId }),
    });

    if (!response.ok) {
      throw new Error('Failed to add song to playlist');
    }

    const data = await response.json();
    console.log(data);

    return true;
  } catch (error) {
    console.error('Playlists API error:', error);
    return false;
  }
};