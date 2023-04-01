
function calcular() {
    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);
    
    const imc = peso / (altura * altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha os campos com valores válidos.");
        return;
      }
  
    const res = document.querySelector(".res");
    res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
  }
