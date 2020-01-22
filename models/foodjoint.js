module.exports = function(sequelize, DataTypes) {
    var Resturant = sequelize.define("Resturant", {
      // Giving the Resturant model a name of type STRING
      name: DataTypes.STRING,
      type: DataTypes.STRING
    });
    return Resturant;
  };