export interface Song {
    id: string;
    name: string;
    artist: string;
    isFavorite:boolean;
}

export interface PlaylistType {
    id: string;
    name: string;
    songIds: string[];
}