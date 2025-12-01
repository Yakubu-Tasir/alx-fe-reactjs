import axios from 'axios';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

  let query = '';
  
  if (username) query += username;
  
  if (location) query += `+location:${location}`;
  
  if (minRepos) query += `+repos:>${minRepos}`;
  
  if (!query) {
      
      query = 'a'; 
  }

  try {
    const response = await axios.get(`${GITHUB_SEARCH_URL}?q=${query}&page=${page}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('GitHub API Error:', error);
    throw error;
  }
};