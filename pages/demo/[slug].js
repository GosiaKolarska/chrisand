import DemoPage from "../../src/app/components/pitch/DemoPage";
import { demoSlugs, getDemo } from "../../src/app/data/demos";

export default function Demo({ demo }) {
  return <DemoPage demo={demo} />;
}

Demo.plainLayout = true;

export function getStaticPaths() {
  return {
    paths: demoSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { demo: getDemo(params.slug) } };
}
