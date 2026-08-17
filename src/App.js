import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lesson 18.2 Styling Demo</h1>

      <Card title="Tailwind Styled Card">
        <p>This card uses Tailwind classes like <code>rounded-lg</code> and <code>shadow-md</code>.</p>
      </Card>
    </div>
  );
}

export default App;
