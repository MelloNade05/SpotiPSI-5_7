export const toggleFav = async (id: string, add: boolean) => {
    try {
        const path = add ? 'http://127.0.0.1:5001/api/favorites/add' : 'http://127.0.0.1:5001/api/favorites/remove';
        const response = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ songId: id }),
        });
        
        if (!response.ok) {
            throw new Error(`Failed to ${add ? 'add' : 'remove'} favorite`);
        }
        const data = JSON.parse(await response.text()); 
        console.log(data);
        return true;
    }
    catch (error) {
        console.error('Favorite API error:', error);
        return false;
    }
};