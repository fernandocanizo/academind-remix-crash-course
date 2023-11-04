import type { LinksFunction, ActionFunctionArgs  } from "@remix-run/node";
import type { Note } from "~/types/Note";

import invariant from 'tiny-invariant';

import NewNote, { links as NewNoteLinks } from "~/components/NewNote";
import db from "~/data/db";

export const links: LinksFunction = () => [...NewNoteLinks()];

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const note = Object.fromEntries(formData.entries()) as Note;
  // `title` can be null, `content` not
  invariant(note.content, "Please provide some content for the note");

  const { noteList } = db.data;
  noteList.push(note);
  await db.write()

  return new Response(null, {
    status: 200,
    statusText: "ok",
  });
};

export default function Demo() {
  return (
    <main>
      <NewNote />
    </main>
  );
}
