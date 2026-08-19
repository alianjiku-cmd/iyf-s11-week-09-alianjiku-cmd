import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r">
      <h2 className="text-lg font-bold mb-4">Quick Links</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:underline">🏠 Home</Link>
        <Link to="/posts" className="hover:underline">📝 Posts</Link>
        <Link to="/create" className="hover:underline">➕ Create Post</Link>
        <Link to="/about" className="hover:underline">ℹ️ About</Link>
      </nav>

      <div className="mt-6">
        <h3 className="text-md font-semibold mb-2">Recent Updates</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>New post form added</li>
          <li>Improved accessibility scores</li>
          <li>Routing setup complete</li>
        </ul>
      </div>
    </aside>
  );
}
