import PostCard from "./PostCard";

export default function PostList() {
  const posts = [
    { id: 1, title: "Hello React", body: "Learning useEffect and hooks!", author: "Alice" },
    { id: 2, title: "Advanced Patterns", body: "Exploring routing and styling.", author: "Bob" },
    { id: 3, title: "CommunityHub", body: "Building a multi-page app.", author: "Charlie" }
  ];

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
