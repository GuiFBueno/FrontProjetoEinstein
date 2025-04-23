
const ValidaForm = function(){

const NameUser = document.getElementById("NameUser").value
const email = document.getElementById("email").value
const ConfEmail = document.getElementById("ConfEmail").value
const senha = document.getElementById("Senha").value
let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertConfEmail = document.getElementById("alertConfEmail");
let alertPassword = document.getElementById("alertPassword");
let alertEmpty = document.getElementById("alertEmpty");

if(NameUser === ""){
  alertName.textContent = "Insira um nome!";
}
else{
  alertName.textContent = "";
}

if(email === ""){
  alertEmail.textContent = "Insira um e-mail!";
}
else{
  alertEmail.textContent = "";
}

if(ConfEmail === ""){
  alertConfEmail.textContent = "Confirme o e-mail!";
}
else{
  alertConfEmail.textContent = "";
}

if(senha === ""){
  alertPassword.textContent = "Insira uma senha!";
}
else{
  alertPassword.textContent = "";
}

if(email !== "" && ConfEmail !== "" ){
  if(email !== ConfEmail){
    alertConfEmail.textContent = "Os e-mails digitados estão diferentes!"
  }
  else{
    alertConfEmail.textContent = "";
  }
}

// if (NameUser === "" || email === "" || ConfEmail === "" || senha === "") {
//     alertEmpty.textContent = "Todos os campos devem ser preenchidos!"
//   } else if (email !== ConfEmail) {
//     alertEmpty.textContent = ""
//     alertConfEmail.textContent = "Os e-mails estão diferentes!"
//   } else {
//     alert("Cadastrado com sucesso");
//   }
}