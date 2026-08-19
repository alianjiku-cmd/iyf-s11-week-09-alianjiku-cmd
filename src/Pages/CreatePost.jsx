import { useState } from "react";
import CreatePostForm from "../components/Post/CreatePostForm";

export default function CreatePost() {
  const [posts, setPosts] = useState([]);

  const handleCreate = (newPost) => {
    setPosts([newPost, ...posts]);   // add new post to local state
    alert(`New Post Created:\n${newPost.title}`);
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <CreatePostForm onCreate={handleCreate} />

      {/* Show created posts below */}
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
