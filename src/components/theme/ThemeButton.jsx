import { useState } from "react"; // React hook for managing local component state
import styles from "./ThemeButton.module.css"; // Scoped CSS module

// ── Component Definition ───────────────────────────────────────────────────────
/**
 * ThemeButton Component
 *
 * A self-contained toggle button that switches between "light" and "dark" themes.
 * Demonstrates:
 * - useState for UI state management
 * - Dynamic class binding using CSS Modules
 * - Inline styles reacting to state
 *
 * NOTE: This is a local/demo-level theme toggle.
 * It does NOT persist theme or affect the global app.
 */
export default function ThemeButton() {
    // State to track current theme ("light" | "dark")
    const [theme, setTheme] = useState("light");

    // Toggle theme using functional update (safe against stale state)
    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    // Combine base button styles with theme-specific styles
    const buttonClass = `${styles.base} ${styles[theme]}`;

    return (
        // Wrapper container to visually reflect theme changes
        <div
            className={styles.wrapper}
            style={{
                // Background and border dynamically adapt to theme
                background: theme === "dark" ? "#2d3748" : "#f7fafc",
                border: `1px solid ${theme === "dark" ? "#4a5568" : "#e2e8f0"}`,
            }}
        >
            {/* Theme toggle button */}
            <button
                className={buttonClass}
                onClick={toggleTheme} // Switch theme on click
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} // Accessibility support
            >
                {/* Icon represents CURRENT theme */}
                <span className={styles.icon}>
                    {theme === "light" ? "🌙" : "☀️"}
                </span>

                {/* Label shows NEXT action (what will happen on click) */}
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </button>

            {/* Debug/demo info: shows computed className */}
            <p className={styles.label}>
                Active class → <strong>{buttonClass}</strong>
            </p>
        </div>
    );
}
