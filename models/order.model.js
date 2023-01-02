import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const Order = sequelize.define("order", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   totalPrice: {
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
   cartId: {
      type: DataTypes.INTEGER,
      alownull: false,
   },
});

export default Order;
