import axios from "axios";

// GitHub Search API endpoint
const GITHUB_SEARCH_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

  let query = "";

  if (username) query += username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  // Default query to avoid empty search
  if (!query) query = "a";

  try {
    const response = await axios.get(`${GITHUB_SEARCH_URL}?q=${query}&page=${page}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    // Return the items array for rendering
    return response.data.items;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
 (Fetching user Data)
};

export const fetchAdvancedUsers = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const response = await axios.get(url);
  return response.data.items;
};
