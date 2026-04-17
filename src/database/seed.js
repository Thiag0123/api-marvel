const database = require('./knex');

async function seed() {
  await database('filmes').del();

  await database('filmes').insert([
    { titulo: "Homem de Ferro", personagem_principal: "Tony Stark", ano_lancamento: 2008, fase: "Fase 1" },
    { titulo: "O Incrível Hulk", personagem_principal: "Bruce Banner", ano_lancamento: 2008, fase: "Fase 1" },
    { titulo: "Homem de Ferro 2", personagem_principal: "Tony Stark", ano_lancamento: 2010, fase: "Fase 1" },
    { titulo: "Thor", personagem_principal: "Thor", ano_lancamento: 2011, fase: "Fase 1" },
    { titulo: "Capitão América", personagem_principal: "Steve Rogers", ano_lancamento: 2011, fase: "Fase 1" },
    { titulo: "Os Vingadores", personagem_principal: "Equipe", ano_lancamento: 2012, fase: "Fase 1" },

    { titulo: "Homem de Ferro 3", personagem_principal: "Tony Stark", ano_lancamento: 2013, fase: "Fase 2" },
    { titulo: "Thor: O Mundo Sombrio", personagem_principal: "Thor", ano_lancamento: 2013, fase: "Fase 2" },
    { titulo: "Capitão América 2", personagem_principal: "Steve Rogers", ano_lancamento: 2014, fase: "Fase 2" },
    { titulo: "Guardiões da Galáxia", personagem_principal: "Star-Lord", ano_lancamento: 2014, fase: "Fase 2" },
    { titulo: "Vingadores: Era de Ultron", personagem_principal: "Equipe", ano_lancamento: 2015, fase: "Fase 2" },

    { titulo: "Capitão América: Guerra Civil", personagem_principal: "Equipe", ano_lancamento: 2016, fase: "Fase 3" },
    { titulo: "Doutor Estranho", personagem_principal: "Stephen Strange", ano_lancamento: 2016, fase: "Fase 3" },
    { titulo: "Homem-Aranha: De Volta ao Lar", personagem_principal: "Peter Parker", ano_lancamento: 2017, fase: "Fase 3" },
    { titulo: "Thor: Ragnarok", personagem_principal: "Thor", ano_lancamento: 2017, fase: "Fase 3" },
    { titulo: "Pantera Negra", personagem_principal: "T'Challa", ano_lancamento: 2018, fase: "Fase 3" },
    { titulo: "Vingadores: Guerra Infinita", personagem_principal: "Equipe", ano_lancamento: 2018, fase: "Fase 3" },
    { titulo: "Capitã Marvel", personagem_principal: "Carol Danvers", ano_lancamento: 2019, fase: "Fase 3" },
    { titulo: "Vingadores: Ultimato", personagem_principal: "Equipe", ano_lancamento: 2019, fase: "Fase 3" },
    { titulo: "Homem-Aranha: Longe de Casa", personagem_principal: "Peter Parker", ano_lancamento: 2019, fase: "Fase 3" }
  ]);

  console.log("Filmes inseridos com sucesso!");
}

seed();