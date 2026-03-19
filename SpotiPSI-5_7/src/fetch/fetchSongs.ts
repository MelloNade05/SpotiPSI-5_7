import { useEffect, useState } from "react";
import type { Song } from '../types';

const FetchSongs = () => {
    const [songsList, setSongsList] = useState<Song[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    // יצירת פונקציה אסינכרונית לשליפת שירים והשמתם בסטייט
    const fetchSongs = async () => {
        // הגדרת התחלת טעינה של שירים
        setIsLoading(true);
        try {
            // גישה לשרת
            const response = await fetch(`http://127.0.0.1:5001/api/songs`);
            const data = await response.json();

            setSongsList(data);

        } catch (error) {
            // הגדרת שגיאה בגישה לשרת
            setError("Something went wrong");
            console.error(error);
            return;
        }
        finally {
            // הגדרת סוף הטעינה של שירים
            setIsLoading(false);
        }
    };

    // קריאה לשירים מהשרת רק בעלייה ראשונה של הקומפוננטה
    // תזכורת: כאשר נקרא ליוז אפקט עם סוגריים ריקות זה אומר שהקוד ירוץ
    // רק ברנדור הראשון של הקומפוננטה
    useEffect(() => {
        fetchSongs();
    }, []);

    return songsList;

}

export default FetchSongs;