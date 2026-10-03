import sequelize from "../database";
import Livro from "./Livro";
import Autor from "./Autor";  

Autor.hasMany(Livro, {foreignKey: 'autorId', as: 'livros'});
Livro.belongsTo(Autor, {foreignKey: 'autorId', as: 'autor'});


export {sequelize, Autor, Livro};
