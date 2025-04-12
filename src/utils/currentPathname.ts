import config from "@/../astro.config.mjs";

const locales: string[] = config.i18n?.locales ?? [""];

export function getCurrentPathname(pathname: string): string {
  if (pathname === "/") return pathname;
  let currentPage = "";
  if (pathname !== "/") {
    let currentPagePathPieces = pathname
      .split("/")
      .filter((piece) => piece !== "");
    if (
      currentPagePathPieces.length > 1 &&
      locales.includes(currentPagePathPieces[0])
    ) {
      currentPagePathPieces.shift();
    }
    currentPage =
      currentPagePathPieces.length === 1 &&
      locales.includes(currentPagePathPieces[0])
        ? "/"
        : currentPagePathPieces.join("/");
  }
  return `/${currentPage}`;
}
