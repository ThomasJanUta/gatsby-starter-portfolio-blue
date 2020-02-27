import { getAllChips } from "./project-util";
import { status } from "./project-util";
import { technologyTags as t } from "./technology-tags";


export const data = [
  {
    title: "Showcase your projects",
    icon: "Show",
    color: "#005470",
    status: status.finished,
    url: null,
    github: null,
    description: "Lorem Ipsum ...",
    learning: ["Lorem Ipsum ...", "Lorem Ipsum ..."],
    tags: [t.html, t.css, t.javascript, t.react, t.gatsby],
  },
  {
    title: "All Technology Chips",
    icon: "ATC",
    color: "#be1d3c",
    status: status.finished,
    url: null,
    github: null,
    description: "Lorem Ipsum ...",
    learning: ["Lorem Ipsum ..."],
    tags: getAllChips(),
  },
  // add another project here
];


