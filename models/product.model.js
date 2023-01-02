import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const Product = sequelize.define("product", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   quantity: {
      type: DataTypes.INTEGER,
      alownull: false,
   },
   title: {
      type: DataTypes.STRING(50),
      alownull: false,
   },
   description: {
      type: DataTypes.STRING(225),
      alownull: false,
   },
   price: {
      type: DataTypes.INTEGER,
      alownull: false,
   },
   status: {
      type: DataTypes.STRING(20),
      alownull: false,
      defaultValue: "active",
   },
   userId: {
      type: DataTypes.INTEGER,
      alownull: false,
   },
});

export default Product;
