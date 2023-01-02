import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define("user", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   username: {
      type: DataTypes.STRING(100),
      alownull: false,
   },
   email: {
      type: DataTypes.STRING(100),
      alownull: false,
      unique: true,
   },
   password: {
      type: DataTypes.STRING(100),
      alownull: false,
   },
   status: {
      type: DataTypes.STRING(20),
      alownull: false,
      defaultValue: "active",
   },
   role: {
      type: DataTypes.STRING(10),
      alownull: false,
      defaultValue: "guest",
   },
});

export default User;
