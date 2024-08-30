const { DataTypes } = require( "sequelize" );

module.exports = (sequelize) => {
  const Products = sequelize.define("products", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    }
  });
  return Products;
};
