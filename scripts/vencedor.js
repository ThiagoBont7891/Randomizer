
const filmeSorteado = localStorage.getItem("filmeSorteado");
document.getElementById("filmeSorteado").innerText = filmeSorteado ? filmeSorteado : "Nenhum filme sorteado!";
    
function voltar() {
    window.location.href = "index.html";
}