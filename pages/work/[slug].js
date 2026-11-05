import CasePage from "../../src/app/components/case/CasePage";
import { caseSlugs } from "../../src/app/data/cases";

export default function Work({ slug }) {
  return <CasePage slug={slug} locale="en" />;
}

export function getStaticPaths() {
  return {
    paths: caseSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
