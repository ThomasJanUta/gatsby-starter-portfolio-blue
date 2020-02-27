import { green4, yellow3 } from "../../src/components/element/theme";
import { technologyTags as t } from "./technology-tags";

export const status = {
  inDevelopment: {
    caption: "In Development",
    color: green4,
  },
  finished: {
    caption: "Finished",
    color: yellow3,
  },
};

/** Create array from all technology tags for color testing */
export const getAllChips = () => {
  const allChips = [];
  Object.keys(t).forEach(key => {
    allChips.push(
      {
        caption: t[key].caption,
        backgroundColor: t[key].backgroundColor,
        textColor: t[key].textColor,
        url: t[key].url,
      },
    );
  });
  return allChips;
};