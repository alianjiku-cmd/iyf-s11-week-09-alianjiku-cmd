import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// ✅ Correct import from your shared library
import { Button, Input, Card, Modal, Avatar } from "./components/shared";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <Card title={`Post #${post.id}`}>
      <Link to="/posts" className="text-blue-500 hover:underline">
        &larr; Back to Posts
      </Link>

      <h1 className="text-2xl font-bold mt-4">{post.title}</h1>
      <p className="mt-2 text-gray-700">{post.body}</p>

      {/* Example usage of shared components */}
      <div className="flex items-center gap-4 mt-6">
        <Avatar name="Author" />
        <Button variant="primary" onClick={() => alert("Liked!")}>
          Like Post
        </Button>
      </div>
    </Card>
  );
}
