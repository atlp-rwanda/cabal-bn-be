import express from "express";
import routes from "routes/index";
import "dotenv/config";
import { Sequelize } from "sequelize";

const app = express();
const port = process.env.PORT || 5000;
app.use("/api/v1", routes);

//Testing DB Connection
async function connectToDb() {
  const sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
  try {
    await sequelize.authenticate();
    console.info("DATABASE CONNECTION ESTABLISHED SUCCESSFULLY!");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}
connectToDb();

app.listen(port, () => {
  console.log("server up running on port ", port);
});
