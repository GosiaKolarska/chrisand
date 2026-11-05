"use client";
import React, { useState } from "react";
import { useContent } from "../src/app/i18n/content";

import {
  AboutExperience,
  AboutHero,
  AboutLinkedin,
  AboutSkillset,
  AboutWork,
} from "../src/app/components/about";

export default function About() {
  const { about: aboutContent } = useContent();
  const [isBioVisible, setIsBioVisible] = useState(true);
  return (
    <>
      <AboutHero
        isBioVisible={isBioVisible}
        setIsBioVisible={setIsBioVisible}
      />
      {isBioVisible && <AboutExperience />}
      <AboutLinkedin />
      <AboutWork work={aboutContent.work} />
      <AboutSkillset skillset={aboutContent.skillset} />
    </>
  );
}
