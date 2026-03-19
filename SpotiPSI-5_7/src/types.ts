export interface Song {
    id: string;
    name: string;
    artist: string;
}

export interface Playlist {
    id: string;
    name: string;
    songIds: string[];
}