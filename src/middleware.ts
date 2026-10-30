import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LANGUAGE, LANGUAGES } from "./lang";

/**
 * Every page lives under `/<lang>`. This sends `/` and any path without a
 * valid locale prefix to the default language, e.g. `/` -> `/en`,
 * `/about` -> `/en/about`, `/fr` -> `/en/fr`.
 *
 * Lives in `src/` (not the repo root) because this project uses a `src`
 * directory - Next.js only picks up middleware from one or the other.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLanguagePrefix = LANGUAGES.some(
    (language) =>
      pathname === `/${language}` || pathname.startsWith(`/${language}/`)
  );

  if (hasLanguagePrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LANGUAGE}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals, API routes and any path with a file extension
  // (favicons, `site.webmanifest`, `browserconfig.xml`, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
