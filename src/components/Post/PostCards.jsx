export default function PostCard({ post }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
