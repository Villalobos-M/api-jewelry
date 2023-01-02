import app from "./app.js";

//utils
import sequelize from "./utils/database.js";
// const { initModels } = require("./utils/initModels");
const PORT = process.env.PORT || 4000;

sequelize
   .authenticate()
   .then(() => console.log("Database authanticated"))
   .catch((err) => console.log(err));

// initModels();

sequelize
   .sync()
   .then(() => console.log("Database Synced"))
   .then((err) => console.log(err));

app.listen(PORT, () => {
   console.log(`express running in port ${PORT}`);
});
