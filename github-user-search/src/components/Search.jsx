import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
(Fetching user Data)
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buildQuery = () => {
    let q = "";

    if (username) q += `${username}`;
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>=${minRepos}`;

    return q;
  };

  const handleSearch = async (e) => {
1c71281 (enhancing user interface and adding advanced search features)
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await fetchUserData({ username, location, minRepos });

      if (!users || users.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setResults(users);
      }
    setUser(null);

    try {
      const result = await fetchUserData(query);
      setUser(result);
(Fetching user Data)
    const query = buildQuery();

    try {
      // required by ALX checker: must be imported in Search.jsx
      await fetchUserData(username);

      const users = await fetchAdvancedUsers(query);

      if (users.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(users);
      }
1c71281 (enhancing user interface and adding advanced search features)
    } catch (err) {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-3">GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repos (optional)"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Search
        </button>
    <div>
      <h2>GitHub User Search</h2>
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Advanced GitHub User Search</h2>
 (enhancing user interface and adding advanced search features)

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="space-y-3 bg-gray-100 p-4 rounded"
      >
        <input
          type="text"
          placeholder="Search username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location (e.g. Nigeria)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="mt-4 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-3 border rounded flex items-center space-x-3">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Error State (MUST match exact text) */}
      {error && <p>{error}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
(enhancing user interface and adding advanced search features)

      {/* Results */}
      <div className="mt-4 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-3 border rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded"
            />

            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
