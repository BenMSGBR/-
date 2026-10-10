import sequelize from "../database.js";
import Livro from "./Livro.js";
import Autor from "./Autor.js";  

Autor.hasMany(Livro, {foreignKey: 'autorId', as: 'livros'});
Livro.belongsTo(Autor, {foreignKey: 'autorId', as: 'autor'});


export {sequelize, Autor, Livro};
