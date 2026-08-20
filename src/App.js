<<<<<<< HEAD
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import WindowSize from "./components/WindowSize";
import ThemeToggle from "./components/ThemeToggle";
import PostList from "./components/PostList";
import Settings from "./components/Settings";
import Modal from "./components/Modal";
import ContactForm from "./components/ContactForm";
import "./App.css";
=======
import Card from "./components/Card";
>>>>>>> 6b08a94 (Add Card component styled with Tailwind)

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lesson 18.2 Styling Demo</h1>

<<<<<<< HEAD
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
>>>>>>> 0d1b765a167ec529fe01fc29cc29f04378894d71
=======
      <Card title="Tailwind Styled Card">
        <p>This card uses Tailwind classes like <code>rounded-lg</code> and <code>shadow-md</code>.</p>
      </Card>
>>>>>>> 6b08a94 (Add Card component styled with Tailwind)
    </div>
  );
}

export default App;
