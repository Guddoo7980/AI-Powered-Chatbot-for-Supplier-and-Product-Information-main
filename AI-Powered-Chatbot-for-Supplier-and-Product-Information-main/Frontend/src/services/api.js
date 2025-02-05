import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const queryChatbot = async (query) => {
    try {
        const response = await axios.post(`${API_URL}/query`, { query });
        return response.data.result;
    } catch (error) {
        console.error('Error querying chatbot:', error);
        throw error;
    }
};