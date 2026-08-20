import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="flex">
        {/* ✅ Sidebar on the left */}
        <Sidebar />

        {/* ✅ Main content on the right */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
