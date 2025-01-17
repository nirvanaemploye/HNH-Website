import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteConfig = {
  title: "Hit N Hammer",
  description: `Find the best food deals near you! Log in, search for your favorite meals, compare options from multiple platforms, and order through your preferred restaurant app. Enjoy tasty meals at the best prices!`,
  mode: MODE.DARK,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - ${siteConfig.title}` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - ${siteConfig.title}` : title,
      description,
      url: "https://petbharo.food",
      siteName: siteConfig.title,
      images: {
        url: "https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png",
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};
