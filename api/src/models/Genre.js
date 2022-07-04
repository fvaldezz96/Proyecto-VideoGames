const { DataTypes } = require('sequelize');

module.exports = sequelize => {
     return sequelize.define('genre', { // chequear en 20 
          id: {
               type: DataTypes.UUID,
               defaultValue: DataTypes.UUIDV4,
               allowNull: false,
               primaryKey: true
          },
          // Usando front voy a ver si necestio unique en esta parte 
          name: {
               type: DataTypes.STRING,
               allowNull: false
          }
     }, {
          //src/tipos-de-datos.js~ABSTRACTO → NÚMERO → ENTERO
          timestamps: false
     })
}
