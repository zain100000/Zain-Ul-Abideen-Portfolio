import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import react from "../assets/svg/skills/react.svg";
import react_native from "../assets/svg/skills/react.svg";
import node from "../assets/svg/skills/nodejs.svg";
import express from "../assets/svg/skills/express-js.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import firebase from "../assets/svg/skills/firebase.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "bootstrap":
      return bootstrap;
    case "react":
      return react;
    case "react native":
      return react_native;
    case "firebase":
      return firebase;
    case "node":
      return node;
    case "express":
      return express;
    case "mongodb":
      return mongoDB;
    default:
      break;
  }
};
