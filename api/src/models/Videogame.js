const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    background_image: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'https://cdn.pixabay.com/photo/2016/07/30/21/03/mario-1558012__340.jpg'
    },
    released: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.FLOAT
    },
  });
};
