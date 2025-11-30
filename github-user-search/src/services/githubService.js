import axios from "axios";

const BASE_URL = "https://api.github.com";

// Basic user fetch
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search fetch
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // GitHub API returns an object with items array
  } catch (error) {
    throw error;
  }
};
