import AboutPage from "../src/app/components/about/AboutPage";
import { useContent } from "../src/app/i18n/content";

export default function About() {
  const { about } = useContent();
  return <AboutPage about={about} />;
}
