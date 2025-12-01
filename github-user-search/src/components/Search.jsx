import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await fetchAdvancedUsers({ username, location, minRepos });

      if (users.length === 0) {
        setError("Looks like we can't find any users.");
      } else {
        setResults(users);
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-3">GitHub Advanced User Search</h2>

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
    </div>
  );
};

export default Search;
