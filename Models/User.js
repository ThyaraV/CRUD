// Conexión
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"usuarioscrud"
})

// Definición del modelo de usuario
const User = sequelize.define('User', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      },
    edad: {
      type: DataTypes.INT,
      allowNull: false,
    },
    ocupacion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        }
    });

export default db; 