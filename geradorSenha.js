//Gerador de Senhas em JavaScript
var caracteres =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
var tamSenha = 12;
var senha = "";

for (var i = 0; i < tamSenha; i++) {
  var randomNum = Math.floor(Math.random() * caracteres.length);
  senha += caracteres.substring(randomNum, randomNum + 1);
}
console.log(senha);
