import { useState } from "react";
import { searchGithubUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const data = await searchGithubUsers(username, location, minRepos);
    setResults(data.items || []);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 shadow rounded grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button className="bg-blue-600 text-white py-2 px-4 rounded md:col-span-3">
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded shadow">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
