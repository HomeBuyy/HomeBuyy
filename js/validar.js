function validarCampo(input, label) {
  if (!input || !label) return true; // Se não existir, ignora

  if (input.value.trim() === "") {
    input.classList.add("campo-obrigatorio");
    label.classList.add("campo-obrigatorio");
    input.placeholder = "Campo obrigatório";
    input.style.border = "1px solid red";
    input.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.5)";
    input.style.transition = "box-shadow 0.3s ease";
    input.style.backgroundColor = "#1b2330";
    input.style.borderRadius = "8px";
    input.style.padding = "12px";
    input.style.marginBottom = "10px";
    input.style.width = "100%";
    label.style.color = "red";
    return false;
  } else {
    input.classList.remove("campo-obrigatorio");
    label.classList.remove("campo-obrigatorio");
    input.placeholder = "";
    input.style.border = "none";
    input.style.boxShadow = "none";
    input.style.backgroundColor = "#1b2330";
    input.style.borderRadius = "8px";
    input.style.padding = "12px";
    input.style.marginBottom = "10px";
    input.style.width = "100%";
    label.style.color = "#ccc";
    return true;
  }
}

/**
 * Função para mostrar modal de erro
 */
function mostrarModalErro(mensagem) {
  // Evita multips modais
  if (document.getElementById('modal-error')) return;

  const modalError = document.createElement('div');
  modalError.id = 'modal-error';
  modalError.style.position = 'fixed';
  modalError.style.top = '0';
  modalError.style.left = '0';
  modalError.style.width = '100%';
  modalError.style.height = '100%';
  modalError.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modalError.style.display = 'flex';
  modalError.style.justifyContent = 'center';
  modalError.style.alignItems = 'center';
  modalError.style.zIndex = '1000';

  const modalContentError = document.createElement('div');
  modalContentError.style.backgroundColor = '#000000';
  modalContentError.style.padding = '20px';
  modalContentError.style.borderRadius = '5px';
  modalContentError.style.textAlign = 'center';

  const messageError = document.createElement('p');
  messageError.textContent = mensagem;
  messageError.style.fontSize = '18px';
  messageError.style.marginBottom = '15px';
  messageError.style.color = 'white';

  const closeButtonError = document.createElement('button');
  closeButtonError.textContent = 'OK';
  closeButtonError.style.padding = '10px 20px';
  closeButtonError.style.backgroundColor = '#860486';
  closeButtonError.style.color = 'white';
  closeButtonError.style.border = 'none';
  closeButtonError.style.borderRadius = '5px';
  closeButtonError.style.cursor = 'pointer';
  closeButtonError.onclick = function() {
    document.body.removeChild(modalError);
  };

  modalContentError.appendChild(messageError);
  modalContentError.appendChild(closeButtonError);
  modalError.appendChild(modalContentError);
  document.body.appendChild(modalError);
}


  //Função para mostrar modal de sucesso
 // redirecionarPara é string url (opcional)
 
function mostrarModalSucesso(mensagem, redirecionarPara) {
  // Evita multiplos modais
  if (document.getElementById('modal-sucesso')) return;

  const modalSuccess = document.createElement('div');
  modalSuccess.id = 'modal-sucesso';
  modalSuccess.style.position = 'fixed';
  modalSuccess.style.top = '0';
  modalSuccess.style.left = '0';
  modalSuccess.style.width = '100%';
  modalSuccess.style.height = '100%';
  modalSuccess.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modalSuccess.style.display = 'flex';
  modalSuccess.style.justifyContent = 'center';
  modalSuccess.style.alignItems = 'center';
  modalSuccess.style.zIndex = '1000';

  const modalContentSuccess = document.createElement('div');
  modalContentSuccess.style.backgroundColor = '#000000';
  modalContentSuccess.style.padding = '20px';
  modalContentSuccess.style.borderRadius = '5px';
  modalContentSuccess.style.textAlign = 'center';

  const messageSuccess = document.createElement('p');
  messageSuccess.textContent = mensagem;
  messageSuccess.style.fontSize = '18px';
  messageSuccess.style.marginBottom = '15px';
  messageSuccess.style.color = 'white';

  const closeButtonSuccess = document.createElement('button');
  closeButtonSuccess.textContent = 'OK';
  closeButtonSuccess.style.padding = '10px 20px';
  closeButtonSuccess.style.backgroundColor = '#860486';
  closeButtonSuccess.style.color = 'white';
  closeButtonSuccess.style.border = 'none';
  closeButtonSuccess.style.borderRadius = '5px';
  closeButtonSuccess.style.cursor = 'pointer';
  closeButtonSuccess.onclick = function() {
    document.body.removeChild(modalSuccess);
    if (redirecionarPara) {
      window.location.href = redirecionarPara;
    }
  };

  modalContentSuccess.appendChild(messageSuccess);
  modalContentSuccess.appendChild(closeButtonSuccess);
  modalSuccess.appendChild(modalContentSuccess);
  document.body.appendChild(modalSuccess);
}


  //inicializa validaçoes para a pagina Login se os campos existirem

function initValidacaoLogin() {
  const emailLoginInput = document.getElementById("emailLogin");
  const emailLoginLabel = document.querySelector("label[for='emailLogin']");
  const senhaLoginInput = document.getElementById("senhaLogin");
  const senhaLoginLabel = document.querySelector("label[for='senhaLogin']");

  if (!emailLoginInput || !emailLoginLabel || !senhaLoginInput || !senhaLoginLabel) return;

  emailLoginInput.addEventListener('focusout', () => validarCampo(emailLoginInput, emailLoginLabel));
  senhaLoginInput.addEventListener('focusout', () => validarCampo(senhaLoginInput, senhaLoginLabel));

  window.validarLogin = function() {
    const emailValido = validarCampo(emailLoginInput, emailLoginLabel);
    const senhaValida = validarCampo(senhaLoginInput, senhaLoginLabel);
    if (!emailValido || !senhaValida) {
      mostrarModalErro('Preencha todos os campos!');
      return false;
    } else {
      mostrarModalSucesso('Login efetuado com sucesso!', "index.html");
      return true;
    }
  };
}


  //Inicializa validações para a pagina Cadastro (se os campos existirem)
 
function initValidacaoCadastro() {
  const nomeInput = document.getElementById("nome");
  const nomeLabel = document.querySelector("label[for='nome']");
  const emailInput = document.getElementById("email");
  const emailLabel = document.querySelector("label[for='email']");
  const senhaInput = document.getElementById("senha");
  const senhaLabel = document.querySelector("label[for='senha']");

  if (!nomeInput || !nomeLabel || !emailInput || !emailLabel || !senhaInput || !senhaLabel) return;

  nomeInput.addEventListener('focusout', () => validarCampo(nomeInput, nomeLabel));
  emailInput.addEventListener('focusout', () => validarCampo(emailInput, emailLabel));
  senhaInput.addEventListener('focusout', () => validarCampo(senhaInput, senhaLabel));

  window.enviarCadastro = function() {
    const nomeValido = validarCampo(nomeInput, nomeLabel);
    const emailValido = validarCampo(emailInput, emailLabel);
    const senhaValida = validarCampo(senhaInput, senhaLabel);
    if (!nomeValido || !emailValido || !senhaValida) {
      mostrarModalErro('Preencha todos os campos!');
      return false;
    } else {
      mostrarModalSucesso('Cadastrado com sucesso!', "login.html");
      return true;
    }
  };
}

// Inicializa validações para cada página conforme os elementos existentes
document.addEventListener('DOMContentLoaded', () => {
  initValidacaoLogin();
  initValidacaoCadastro();
});

