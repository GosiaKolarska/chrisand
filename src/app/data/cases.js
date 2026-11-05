import en from "./cases.en.json";
import pl from "./cases.pl.json";

const cases = { en, pl };

export const caseSlugs = en.map((item) => item.slug);

export const casePath = (slug, locale) =>
  locale === "pl" ? `/pl/work/${slug}` : `/work/${slug}`;

export default cases;
