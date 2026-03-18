import { useEffect, useState } from "react";
import { Song } from "./song/song";

const ExampleFetch = () => {
    const [songsList, setSongsList] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    // יצירת פונקציה אסינכרונית לשליפת שירים והשמתם בסטייט
    const fetchSongs = async () => {
        // הגדרת התחלת טעינה של שירים
        setIsLoading(true);
        try {
            // גישה לשרת
            const response = await fetch("https://exampleUrl.com/songs");
            const data = await response.json();

            // הוספת שירים לסטייט לאחר שהתקבלו מהשרת
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


    return (
        <div>
            {/* הצגת טקסט טעינה במידה והמידע עדיין נטען */}
            {isLoading && <p>Loading...</p>}

            {/* הצגת שגיאה במידה ויש שגיאה בגישה לשרת */}
            {error && <p>{error}</p>}

            {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}
            {!isLoading && !error && songsList.map((song, index) => (
                <div key={index}>
                    <h2>{song.name}</h2>
                </div>
            ))}
        </div>
    );

}

export default ExampleFetch;