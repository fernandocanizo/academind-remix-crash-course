import type { MetaFunction } from "@remix-run/node";

import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>FLC Notes</h1>

      <p id="cta">
        <Link to="/notes">Try!</Link>
      </p>
    </main>
  );
}
