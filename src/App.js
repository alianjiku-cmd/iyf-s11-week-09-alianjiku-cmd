import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import WindowSize from "./components/WindowSize";
import ThemeToggle from "./components/ThemeToggle";
import PostList from "./components/PostList";
import Settings from "./components/Settings";
import Modal from "./components/Modal";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Week 9 React Advanced Assignment</h1>

      <section>
        <h2>Counter (useEffect)</h2>
        <Counter />
      </section>

      <section>
        <h2>User Profile (useEffect + API)</h2>
        <UserProfile />
      </section>

      <section>
        <h2>Window Size (useEffect)</h2>
        <WindowSize />
      </section>

      <section>
        <h2>Theme Toggle (useEffect)</h2>
        <ThemeToggle />
      </section>

      <section>
        <h2>Posts (useFetch + Loading/Error)</h2>
        <PostList />
      </section>

      <section>
        <h2>Settings (useLocalStorage)</h2>
        <Settings />
      </section>

      <section>
        <h2>Modal (useToggle)</h2>
        <Modal />
      </section>

      <section>
        <h2>Contact Form (useForm)</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
