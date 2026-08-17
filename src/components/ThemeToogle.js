import { useState } from "react";
import LoadingSpinner from "./shared/LoadingSpinner";
import ErrorMessage from "./shared/ErrorMessage";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTheme = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    } catch (err) {
      setError("Failed to toggle theme");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner text="Switching theme..." />;
  if (error) return <ErrorMessage message={error} onRetry={toggleTheme} />;

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme} (Click to toggle)
    </button>
  );
}

export default ThemeToggle;
