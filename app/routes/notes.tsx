import type { LinksFunction } from "@remix-run/node";

import NewNote, { links as NewNoteLinks } from "~/components/NewNote";

export const links: LinksFunction = () => [...NewNoteLinks()];

export default function Demo() {
  return (
    <main>
      <NewNote />
    </main>
  );
}
