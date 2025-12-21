import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extracts the ID from the URL
  return <div>Displaying Blog Post ID: {id}</div>;
};

export default BlogPost;