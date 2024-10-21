// Funções para controle do modal
function openModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    alert("Login efetuado com sucesso!");
    closeModal();
}
