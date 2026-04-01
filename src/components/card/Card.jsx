// Import CSS Module styles (scoped locally to avoid class name conflicts)
import styles from "./card.module.css";

// ── Component Definition ───────────────────────────────────────────────────────
/**
 * Card Component
 *
 * Reusable UI component to display a title and description.
 * Uses CSS Modules for scoped styling (no global class leakage).
 *
 * Props:
 * @param {string} title       - Heading text displayed at the top
 * @param {string} description - Supporting text/content for the card
 */
export default function Card({ title, description }) {
    return (
        // Root container with scoped CSS class
        <div className={styles.container}>
            {/* Card title */}
            <h2 className={styles.title}>{title}</h2>

            {/* Card description/content */}
            <p className={styles.description}>{description}</p>

            {/* Debug/learning badge to show generated CSS module class */}
            <span className={styles.badge}>
                DOM class → <strong>{styles.container}</strong>
            </span>
        </div>
    );
}
