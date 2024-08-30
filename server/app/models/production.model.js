const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Production = sequelize.define("production", {
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saleRate: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    remarks: {
      type: DataTypes.STRING,
    }
  });
  return Production;
};
