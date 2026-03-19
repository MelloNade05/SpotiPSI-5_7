export interface Song {
    id: string;
    name: string;
    artist: string;
    isFavorite:boolean;
}

export interface PlaylistType {
    playlistId: string;
    name: string;
    songIds: string[];
}

export interface SongTableProps{
    songsList:Song[]
    favSongsId:string[]
}