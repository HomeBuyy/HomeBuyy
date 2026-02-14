
const options = document.querySelectorAll(".option");
const tipoInput = document.getElementById("tipo");
const siteFields = document.querySelector(".site-fields");
const socialFields = document.querySelector(".social-fields");

function showRelevantFields(serviceType) {
  siteFields.classList.add("hidden");
  socialFields.classList.add("hidden");
  
  if (serviceType === "site") {
    siteFields.classList.remove("hidden");
  } else if (serviceType === "redes") {
    socialFields.classList.remove("hidden");
  } else if (serviceType === "completo" || serviceType === "manutencao") {
    siteFields.classList.remove("hidden");
    socialFields.classList.remove("hidden");
  }
}

options.forEach(opt => {
  opt.addEventListener("click", () => {
    options.forEach(o => o.classList.remove("selected"));
    opt.classList.add("selected");
    tipoInput.value = opt.dataset.value;
    showRelevantFields(opt.dataset.value);
  });
});

document.getElementById("serviceForm").addEventListener("submit", function(e) {
  if (!tipoInput.value) {
    alert("Por favor, selecione o tipo de serviço.");
    e.preventDefault();
  }
});
