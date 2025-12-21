import React from 'react';
import { useQuery } from 'react-query';

// Fetching function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery handles loading, error, and caching automatically
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // These options help demonstrate caching
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60 * 1, // Consider data fresh for 1 minute
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts from JSONPlaceholder</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <h3 style={{ margin: '0' }}>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;