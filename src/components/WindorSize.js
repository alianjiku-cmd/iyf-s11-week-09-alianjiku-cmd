import { useState, useEffect } from "react";
import LoadingSpinner from "./shared/LoadingSpinner";
import ErrorMessage from "./shared/ErrorMessage";

function WindowSize() {
  const [size, setSize] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const updateSize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    } catch (err) {
      setError("Failed to detect window size");
    }
  }, []);

  if (!size && !error) return <LoadingSpinner text="Detecting window size..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <p>
      Width: {size.width}px, Height: {size.height}px
    </p>
  );
}

export default WindowSize;
