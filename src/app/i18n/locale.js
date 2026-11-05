const PAIRS = [
  ["/", "/pl"],
  ["/about", "/pl/about"],
  ["/work-with-me", "/zlecenia"],
];

export const localeForPath = (path) =>
  path === "/pl" ||
  path.startsWith("/pl/") ||
  path === "/zlecenia" ||
  path.startsWith("/demo/")
    ? "pl"
    : "en";

export const alternatePath = (path) => {
  const pair = PAIRS.find((paths) => paths.includes(path));
  if (!pair) return null;
  return pair[0] === path ? pair[1] : pair[0];
};

export const homePath = (locale) => (locale === "pl" ? "/pl" : "/");
