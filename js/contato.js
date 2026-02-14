const form = document.getElementById('contato-form');
const erro = document.getElementById('erro');
const sucesso = document.getElementById('sucesso-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    erro.textContent = "Por favor, preencha todos os campos.";
    sucesso.textContent = "";
    return;
  }

  erro.textContent = "";
  sucesso.textContent = "Mensagem enviada com sucesso!";
  form.reset();
});