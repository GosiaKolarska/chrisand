import CasePage from "../../../src/app/components/case/CasePage";
import { caseSlugs } from "../../../src/app/data/cases";

export default function Work({ slug }) {
  return <CasePage slug={slug} locale="pl" />;
}

export function getStaticPaths() {
  return {
    paths: caseSlugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export function getStaticProps({ params }) {
  return caseSlugs.includes(params.slug)
    ? { props: { slug: params.slug } }
    : { notFound: true };
}
