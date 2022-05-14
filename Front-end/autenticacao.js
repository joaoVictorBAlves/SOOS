//Databse
let usuarios = [
    {
        nome: "João Victor Alves",
        idAcademico: "509697",
        senha: "Jv4984538171"
    },
    {
        nome: "George Gomes",
        idAcademico: "112233",
        senha: "minhasenha"
    }
]
//Dados
let idAcademico = document.getElementById("idAcademico")
let senha = document.getElementById("senha")
let btn = document.getElementById("btnLogar")

// Autenticacao
let idAutenticado = false
let senhaAutenticada = false

btn.addEventListener('click', () => {
    usuarios.forEach(element => {
        if (idAcademico.value == element.idAcademico && senha.value == element.senha) {
            idAutenticado = true
            senhaAutenticada = true
        }
    });
    if (idAutenticado && senhaAutenticada) {
        window.location.href = "index.html?auth=true"
    } else {
        window.location.href = "index.html?auth=false"
    }
});