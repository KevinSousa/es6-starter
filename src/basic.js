// MAP

const arr = [1,2,3,4,5];

const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);


//Declarando objeto e propriedades
const usuario = {
    nome: 'Kevin',
    idade: '23',
    endereco: {
        cidade: 'Igarassu',
        estado: 'PE',
    }
}

//Desestruturação de um objeto
const { nome, endereco: { estado } } = usuario;

// Desestruturação em funções
function mostraNome( { nome } ) {
    console.log(nome);
}

// mostraNome(usuario);

//Declarando PROMISE
const minhaPromise = () => new Promise((resolve, reject) => {

    setTimeout(() => { resolve('OLÁ') }, 5000);

});

//Chamada da promise (ela é normalmente chamada assim)
minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err)
    });

//Mesma chamada da promise porém agora com async/await (Pertence ao ES8)
//Precisa instalar alguns plugins pois ela é do ES8

async function executaPromise(){
    const response = await minhaPromise();
    console.log(response);
}


// executaPromise();

const promiseTimeOut = () => new Promise ((resolve, reject) => {

    setTimeout(() => { resolve('IFPE campus Igarassu') }, 3000);

});

promiseTimeOut()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });