import { Sequelize } from "sequelize";

//instance
const sequelize = new Sequelize(
   "postgresql://postgres:NiTAJ6P7dqVmow9261pf@containers-us-west-61.railway.app:7381/railway",
);

export default sequelize;
