import {Autor, Livro } from './models/Index.js'

export default async function preencherTabelas() {
    const james = await Autor.create({nome: 'J.J.James', genero: 'Homem', idade: 65})
    const paulo = await Autor.create({nome: 'Paulo Lins', genero: 'Homem', idade: 66})
    const leão = await Autor.create({nome: 'Nicolas Leão', genero: 'Therian', idade: 6767676767})


await Livro.bulkCreate([
    {
        titulo: "Homem-Aranha e sua ameaça",
        genero: "Ação",
        ano: 1990,
        autorId: james.id,
        disponivel: true,
    },
    {
        titulo: "Cidade de Deus",
        genero: "romance realista",
        ano: 1997,
        autorId: paulo.id,
        disponivel: true,
    },
    {
      titulo: "Medico e o Monstro",
        genero: "Ação",
        ano: 1667,
        autorId: leão.id,
        disponivel: true,
    },
    {
     titulo: "Harry Poter 2",
        genero: "Terror",
        ano: 1945,
        autorId: leão.id,
        disponivel: true,
    }
]);

 console.log("Banco populado com 3 e 3")

}