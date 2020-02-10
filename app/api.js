const   API_URL = 'https://pixabay.com/api/',
        API_KEY = '15192209-e6f13d3f98a3c453afefa75b3';

const api = () => {
    
    return {getImages: async text => {
        try {
            const TARGET_URL = `${API_URL}?key=${API_KEY}&q=${text}`
            const images = await axios.get(TARGET_URL);
            return images.data;
        } catch (error) {
            console.log(error);
            
        }
    }}
}

export default api;