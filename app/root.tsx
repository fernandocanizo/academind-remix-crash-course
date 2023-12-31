import type { LinksFunction } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import mainCss from "~/styles/main.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import MainNavigation from "~/components/MainNavigation";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: mainCss },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
