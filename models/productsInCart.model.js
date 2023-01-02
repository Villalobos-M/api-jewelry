import DataTypes from "sequelize";
import sequelize from "../utils/database.js";

const ProductsInCart = sequelize.define("productsInCart", {
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
   status: {
      type: DataTypes.STRING(20),
      alownull: false,
      defaultValue: "active",
   },
   productId: {
      type: DataTypes.INTEGER,
      alownull: false,
   },
   cartId: {
      type: DataTypes.INTEGER,
      alownull: false,
   },
});

export default ProductsInCart;
