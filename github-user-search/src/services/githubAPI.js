import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => { 
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: username },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('GitHub API Error:', error);
    throw error;
  }
};