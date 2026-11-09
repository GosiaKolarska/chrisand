const PAIRS = [
  ["/", "/pl"],
  ["/about", "/pl/about"],
];

export const localeForPath = (path) =>
  path === "/pl" ||
  path.startsWith("/pl/") ||
  path.startsWith("/demo/")
    ? "pl"
    : "en";

export const cleanPath = (path) => path.split(/[?#]/)[0];

export const alternatePath = (path) => {
  if (path.startsWith("/pl/work/")) return path.replace("/pl/work/", "/work/");
  if (path.startsWith("/work/")) return `/pl${path}`;
  const pair = PAIRS.find((paths) => paths.includes(path));
  if (!pair) return null;
  return pair[0] === path ? pair[1] : pair[0];
};

export const homePath = (locale) => (locale === "pl" ? "/pl" : "/");
