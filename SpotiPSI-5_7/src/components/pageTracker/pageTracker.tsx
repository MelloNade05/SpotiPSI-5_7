import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTracker({ setActivePage }: { setActivePage: (page: string) => void }) {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/songs":
            case "/":
                setActivePage("AllSongs");
                break;
            case "/playlists":
                setActivePage("Playlists");
                break;
            case "/favorites":
                setActivePage("Favorites");
                break;
            default:
                setActivePage("Unknown");
        }
    }, [location.pathname]);

    return null;
};

export default PageTracker;