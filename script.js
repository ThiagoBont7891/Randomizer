const inserirFilme = document.getElementById('container__filme');
const botaoInserirFilme = document.getElementById('botao__salvar');
const listaDeFilmes = document.getElementById('lista'); 
const botaoSortear = document.getElementById('sorteio__botao');

botaoInserirFilme.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (inserirFilme.value.trim() === "") {
        alert("Por favor, insira um filme");
        return;
    }

    const itemDaLista = document.createElement("li");
    itemDaLista.classList.add("lista__itens");
    itemDaLista.innerText = inserirFilme.value; 

    listaDeFilmes.appendChild(itemDaLista);

    inserirFilme.value = "";    
});

botaoSortear.addEventListener('click', () => {
    const filmes = document.querySelectorAll("#lista li"); // Get all <li> elements

    if (filmes.length === 0) {
        alert("A lista está vazia! Adicione filmes antes de sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * filmes.length); // Get random index
    const filmeSorteado = filmes[randomIndex].innerText; // Get text of chosen item

    localStorage.setItem("filmeSorteado", filmeSorteado); // Stores movie in localStorage

    window.location.href = "vencedor.html";
});