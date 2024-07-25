import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3003/',
    headers:{
        'Content-Type': 'application/json',
    },
});

export const getLearners = async () => {
    const response = await
    apiClient.get('/learners');
        return response.data;
};

export const getMentors = async () => {
    const response = await
apiClient.get('/mentors');
    return response.data;
};

export default apiClient