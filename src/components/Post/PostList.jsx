import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10)); // show first 10
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
