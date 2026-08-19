import { Button, Input } from './components/shared';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lesson 18.3 Component Library Demo</h1>

      {/* Button examples */}
      <Button variant="primary" size="medium" onClick={() => alert("Primary clicked!")}>
        Primary Button
      </Button>

      <Button variant="secondary" size="small">
        Secondary Small
      </Button>

      <Button variant="danger" size="large" loading>
        Delete
      </Button>

      <Button variant="outline" fullWidth>
        Full Width Outline
      </Button>

      {/* Input examples */}
      <Input
        label="Username"
        name="username"
        placeholder="Enter your username"
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        error="Invalid email address"
      />
    </div>
  );
}

export default App;
