import szablon from "./szablon.json";
import droplabs from "./droplabs.json";

// Add a new company by importing its JSON here. See README.md in this folder.
// Droplabs stays local until the company agrees to see it.
const published = [];
const developmentOnly = [szablon, droplabs];

const demos =
  process.env.NODE_ENV === "production"
    ? published
    : [...published, ...developmentOnly];

export const getDemo = (slug) => demos.find((demo) => demo.slug === slug);
export const demoSlugs = demos.map((demo) => demo.slug);
