const produtos = [
  { id: 1, nome: "Mouse", preco: 80, estoque: 5 },
  { id: 2, nome: "Teclado", preco: 120, estoque: 3 },
  { id: 3, nome: "Monitor", preco: 900, estoque: 2 },
  { id: 4, nome: "Headset", preco: 250, estoque: 0 }
];

const menu = document.getElementById("menu");
produtos.forEach((produto) => {
    menu.innerHTML += `${produto.id} - R$ ${produto.nome} - ${produto.preco} - Estoque: ${produto.estoque} <br>`; 
})

const procurar = document.getElementById("procurar");
const pesquisar = document.getElementById("pesquisar");
const resultado = document.getElementById("resultado");


pesquisar.addEventListener("click", function() {
    const item_encontrado = produtos.find((produto) => produto.id === Number(procurar.value));

    resultado.innerText = `Você comprou: ${item_encontrado.nome}`;
})