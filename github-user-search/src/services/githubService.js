export const searchGithubUsers = async (query, page = 1, per_page = 30) => {
  const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data; 
};
