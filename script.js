// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.


let cadastro1 = {
    nome:'Jefferson',
    idade:28,
    cidade:"São Paulo"
}

cadastro1.signo = "Touro";
delete cadastro1.idade;
console.log(cadastro1)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.


let cadastro2 = [{
    nome:'Livia',
    idade:13,
    telefone:215544768,
    amigos: ['Lorena']
},

{
    nome:'Jessica',
    idade:30,
    telefone:112365589,
    amigos:['Livia']
},
 {
    nome:'Nicolas',
    idade: 15,
    telefone:215564478,
    amigos:['Jefferson']
},
{
    nome:'Bruno',
    idade: 16,
    telefone:217769355,
    amigos:['Angelo']
},
{
    nome:'Cida',
    idade:34,
    telefone: 216767433,
    amigos:['Carlos']
},
]
cadastro2[0].amigos = ['Lorena',];
cadastro2[1].amigos = ['Livia',];
cadastro2[2].amigos = ['Jefferson',];
cadastro2[3].amigos = ['Angelo',];
cadastro2[4].amigos = ['Carlos',];

console.log(cadastro2);