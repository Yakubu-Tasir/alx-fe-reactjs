import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // Build the advanced search query
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.items; // returns a list of users
  } catch (error) {
    throw error;
  }
};
