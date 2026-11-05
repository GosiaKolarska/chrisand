import { useRouter } from "next/router";
import { localeForPath } from "./locale";
import homeEn from "../data/home.json";
import homePl from "../data/home.pl.json";
import aboutEn from "../data/about.json";
import aboutPl from "../data/about.pl.json";
import globalEn from "../data/global.json";
import globalPl from "../data/global.pl.json";
import offerEn from "../data/offer.en.json";
import offerPl from "../data/offer.json";
import pitchEn from "../data/pitch.en.json";
import pitchPl from "../data/pitch.json";

const content = {
  en: {
    home: homeEn,
    about: aboutEn,
    global: globalEn,
    offer: offerEn,
    pitch: pitchEn,
  },
  pl: {
    home: homePl,
    about: aboutPl,
    global: globalPl,
    offer: offerPl,
    pitch: pitchPl,
  },
};

export const useLocale = () => localeForPath(useRouter().pathname);

export const useContent = () => content[useLocale()];
