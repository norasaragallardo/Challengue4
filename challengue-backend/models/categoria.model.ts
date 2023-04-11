import { DataTypes } from "sequelize";
import db from "../db/conection.config";

const Categoria = db.define('categoria',{
    idcategoria : {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    
    descripcion : {
        type: DataTypes.STRING,
    },  
    estado : {
        type : DataTypes.INTEGER,
    },
    ruta : {
        type: DataTypes.STRING,
    }

    
})
export default Categoria;