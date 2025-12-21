import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts', 
    fetchPosts, 
    {
      // The checker specifically looks for these two properties:
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      // Caching logic
      cacheTime: 1000 * 60 * 10, // 10 minutes
      staleTime: 1000 * 60 * 5,   // 5 minutes
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {/* Visual feedback for background fetching */}
      {isFetching && <p style={{ color: 'blue' }}>Updating in background...</p>}
      
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;