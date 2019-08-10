import Raven from "raven-js";

const initConfig = () => {
  Raven.config(
    "https://769ce1e793534467bbd162f3f63c41dc@sentry.io/1247738",
  ).install();
};

export { initConfig };
