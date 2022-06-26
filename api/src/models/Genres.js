const { DataTypes } = require('sequelize');

module.exports = sequelize => {
     return sequelize.define('genres', { // chequear en 20 
          // id: {
          //      type: DataTypes.INTEGER,
          //      allowNull: false,
          //      primaryKey: true
          // },
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
