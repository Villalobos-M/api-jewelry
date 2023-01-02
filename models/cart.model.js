import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const Cart = sequelize.define("cart", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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

export default Cart;
