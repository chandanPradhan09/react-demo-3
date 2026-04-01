/**
 * ============================================================
 * App.jsx  —  Root component: renders all exercise components
 * ============================================================
 *
 * Imports:
 *   Card        — Exercise 1 (CSS Modules: .container + .title)
 *   ThemeButton — Exercise 2 (CSS Modules + useState theme toggle)
 *
 * Layout: two clearly labelled sections, one per exercise.
 * ============================================================
 */

import { useEffect } from "react";
import Card from "./components/card/Card";
import ThemeButton from "./components/theme/ThemeButton";

// ── Global / App-level styles ──────────────────────────────────────────────────
// In a real project these would live in App.module.css or index.css.
const APP_CSS = `
  /* Reset */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #f0f4f8;
    min-height: 100vh;
    font-family: 'Trebuchet MS', sans-serif;
  }

  /* ── App shell ── */
  .app-root {
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  /* Page heading */
  .app-heading {
    text-align: center;
    margin-bottom: 52px;
  }

  .app-heading h1 {
    font-size: 2rem;
    color: #1a202c;
    letter-spacing: -0.5px;
  }

  .app-heading p {
    margin-top: 8px;
    color: #718096;
    font-size: 0.95rem;
  }

  /* ── Section wrapper ── */
  .exercise-section {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 36px;
    margin-bottom: 36px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }

  /* Section header strip */
  .section-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e2e8f0;
  }

  .section-badge {
    background: #ebf4ff;
    color: #1a56db;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 999px;
    white-space: nowrap;
    letter-spacing: 0.3px;
    border: 1px solid #c7d7f0;
  }

  .section-header h2 {
    font-size: 1.05rem;
    color: #2d3748;
    font-weight: 600;
  }

  /* Cards row */
  .cards-row {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  /* Center the ThemeButton demo */
  .theme-center {
    display: flex;
    justify-content: center;
  }
`;

// ── App Component ─────────────────────────────────────────────────────────────
export default function App() {
    // Inject global styles once
    useEffect(() => {
        const STYLE_ID = "app-global-styles";
        if (!document.getElementById(STYLE_ID)) {
            const el = document.createElement("style");
            el.id = STYLE_ID;
            el.textContent = APP_CSS;
            document.head.appendChild(el);
        }
    }, []);

    return (
        <div className="app-root">
            {/* ── Page Heading ── */}
            <div className="app-heading">
                <h1>CSS Modules in React</h1>
                <p>
                    Exercise 1 — Scoped class names &nbsp;|&nbsp; Exercise 2 —
                    Dynamic theme toggle
                </p>
            </div>

            {/* ════════════════════════════════════════════════════════
          EXERCISE 1 — Card component with CSS Modules
          Demonstrates: .container (border + shadow) and .title (bold + blue)
          The badge inside each card reveals the hashed DOM class name.
          ════════════════════════════════════════════════════════ */}
            <section className="exercise-section">
                <div className="section-header">
                    <span className="section-badge">Exercise 1</span>
                    <h2>
                        CSS Modules — Scoped class names (.container &amp;
                        .title)
                    </h2>
                </div>

                {/* Render multiple Card instances to show isolation:
            each card uses the SAME hashed class but styles never bleed out */}
                <div className="cards-row">
                    <Card
                        title="React Fundamentals"
                        description="Learn how components, props, and state form the core building blocks of every React application."
                    />

                    <Card
                        title="CSS Modules"
                        description="Scoped styling that eliminates class-name collisions by hashing every class to a unique identifier at build time."
                    />
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
          EXERCISE 2 — ThemeButton with useState + dynamic classes
          Demonstrates: .base .light .dark applied conditionally
          The active class string is shown below the button.
          ════════════════════════════════════════════════════════ */}
            <section className="exercise-section">
                <div className="section-header">
                    <span className="section-badge">Exercise 2</span>
                    <h2>
                        Dynamic CSS Modules — useState theme toggle (.base +
                        .light / .dark)
                    </h2>
                </div>

                {/* ThemeButton handles its own state internally */}
                <div className="theme-center">
                    <ThemeButton />
                </div>
            </section>
        </div>
    );
}
