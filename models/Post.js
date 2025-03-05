import { sequelize } from "./db.js";
import { DataTypes } from "sequelize";

const Post = sequelize.define('postagens',{
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

/*Post.sync()
    .then(() => console.log("Tabela criada com sucesso"))
    .catch((err) => console.error("Erro ao criar tabela:", err));

export { Post }; // Exportação nomeada*/

export default Post