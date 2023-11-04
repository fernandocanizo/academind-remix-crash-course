import styles from "./NewNote.css";

import type { LinksFunction } from "@remix-run/node";

// surface styles: they are still global, but this way you have them close to
// where they are used
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function NewNote() {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text"id="title" name="title" />
      </p>

      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>

      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  );
}
