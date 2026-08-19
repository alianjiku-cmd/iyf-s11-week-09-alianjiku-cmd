import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/posts" className="hover:underline">Posts</Link>
      <Link to="/create" className="hover:underline">Create Post</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </header>
  );
}
