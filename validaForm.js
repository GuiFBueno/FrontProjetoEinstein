
const ValidaForm = function(){

const NameUser = document.getElementById("NameUser").value
const email = document.getElementById("email").value
const ConfEmail = document.getElementById("ConfEmail").value
const senha = document.getElementById("Senha").value



if (NameUser === "" || email === "" || ConfEmail === "" || senha === "") {
    alert("Os campos precisam ser preenchidos");
  } else if (email !== ConfEmail) {
    alert("Os emails são diferentes");
  } else {
    alert("Cadastrado com sucesso");
  }
}