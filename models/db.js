import { Sequelize } from 'sequelize';
// Conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp','root','2802', {
    host: "localhost", 
    dialect: 'mysql'
})

export { sequelize }; // Exportação nomeada
