import React, { useEffect, useState } from "react";
import jsmediatags from "jsmediatags";

// Defining the Shape of a Song based on your requirement
interface Song {
  name: string;
  artist: string;
  fileName: string;
}

const ExampleFetch = () => {
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1. Helper function to wrap jsmediatags in a Promise
  const extractMetadata = (fileName: string): Promise<Song> => {
    return new Promise((resolve, reject) => {
      // Assuming songs are in your 'public/songs' folder
      const filePath = `/songs/${fileName}`;

      jsmediatags.read(filePath, {
        onSuccess: (tag) => {
          resolve({
            name: tag.tags.title || "Unknown Title",
            artist: tag.tags.artist || "Unknown Artist",
            fileName: fileName,
          });
        },
        onError: (error) => {
          console.error(`Error reading ${fileName}:`, error);
          // Fallback if tags are missing
          resolve({
            name: fileName,
            artist: "Unknown Artist",
            fileName: fileName,
          });
        },
      });
    });
  };

  // 2. Main function to process the folder list
  const fetchSongs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Define your file list (In a real app, this list might come from a JSON or API)
      const files = ["1.mp3", "2.mp3", "3.mp3"]; 

      // Run metadata extraction for all files in parallel
      const songData = await Promise.all(files.map((file) => extractMetadata(file)));

      setSongsList(songData);
    } catch (err) {
      setError("Failed to load song metadata.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My Playlist</h1>
      <hr />

      {isLoading && <p>Reading song properties...</p>}
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && !error && (
        <div style={{ display: "grid", gap: "10px" }}>
          {songsList.map((song, index) => (
            <div 
              key={index} 
              style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
            >
              <h2 style={{ margin: "0 0 5px 0" }}>{song.name}</h2>
              <p style={{ margin: 0, color: "#666" }}>Artist: {song.artist}</p>
              <small style={{ color: "#999" }}>File: {song.fileName}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExampleFetch;