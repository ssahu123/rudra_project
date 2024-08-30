const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Sale = sequelize.define("sale", {
    invoiceNo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rate: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gst: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });
  return Sale;
};
