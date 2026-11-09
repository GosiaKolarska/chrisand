import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteShell from "../src/app/components/site/SiteShell";
import { Intro, Title, Pill } from "../src/app/components/site/Site.styles";

export default function NotFound() {
  return (
    <SiteShell>
      <Head>
        <title key="title">404 – Chris Piskorz</title>
        <meta key="robots" name="robots" content="noindex" />
      </Head>
      <Intro style={{ paddingBottom: 110 }}>
        <Title>This page doesn&apos;t exist</Title>
        <p lang="pl">Nie ma takiej strony.</p>
        <p>
          <Pill as={Link} href="/" style={{ color: "#f5f1e8" }}>
            Home
          </Pill>
        </p>
      </Intro>
    </SiteShell>
  );
}
