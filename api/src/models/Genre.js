const { DataTypes } = require('sequelize');

module.exports = sequelize => {
     return sequelize.define('genre', { // chequear en 20 
          id: {
               type: DataTypes.UUID,
               defaultValue: DataTypes.UUIDV4,
               allowNull: false,
               primaryKey: true
          },
          name: {
               type: DataTypes.STRING,
               allowNull: false
          }
     }, {
          timestamps: false
     })
}
