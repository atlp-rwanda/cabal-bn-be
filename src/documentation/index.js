import dotenv from "dotenv";
import welcome from "./welcome";

dotenv.config();

const host =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL?.split("https://")[1]
    : process.env.BASE_URL?.split("http://")[1];

const paths = {
  ...welcome,
};

const config = {
  swagger: "2.0",
  info: {
    description: "Barefoot Nomad Project",
    version: "1.0",
    title: "Barefoot Nomad",
  },
  host,
  basePath: "/api/v1",
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  paths,
};
export default config;