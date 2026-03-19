import { useEffect, useState } from "react";

const FetchFavs = () => {
    const [favsIdList, setFavsList] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    // יצירת פונקציה אסינכרונית לשליפת שירים והשמתם בסטייט
    const fetchFavs = async () => {
        // הגדרת התחלת טעינה של שירים
        setIsLoading(true);
        try {
            // גישה לשרת
            const response = await fetch("http://127.0.0.1:5001/api/favorites");
            const data = await response.json();

            // הוספת שירים לסטייט לאחר שהתקבלו מהשרת
            setFavsList(data);
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
        fetchFavs();
    }, []);


    return favsIdList;
}

export default FetchFavs;