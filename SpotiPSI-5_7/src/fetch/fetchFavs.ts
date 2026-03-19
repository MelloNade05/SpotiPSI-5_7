import { useEffect, useState } from "react";

const UseFetchFavs = (pageChange: string) => {
    const [favsIdList, setFavsList] = useState<string[]>([]);

    useEffect(() => {
        const fetchFavs = async () => {
            const response = await fetch("http://127.0.0.1:5001/api/favorites");
            const data = await response.json();
            setFavsList(data);
        };

        fetchFavs();
    }, [pageChange]);

    return favsIdList;
};

export default UseFetchFavs;