import axios from "axios";

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchAdvancedUsers = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const response = await axios.get(url);
  return response.data.items;
};
