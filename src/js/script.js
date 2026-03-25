function calcular() {
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    const imc = peso / (altura * altura);
    let condicao = "";
  
    if (sexo === "F") {
      if (imc < 19.1) condicao = "Abaixo do peso";
      else if (imc <= 25.8) condicao = "Normal";
      else if (imc <= 27.3) condicao = "Marginalmente acima";
      else if (imc <= 32.3) condicao = "Acima do peso";
      else condicao = "Obeso";
    } else {
      if (imc < 20.7) condicao = "Abaixo do peso";
      else if (imc <= 26.4) condicao = "Normal";
      else if (imc <= 27.8) condicao = "Marginalmente acima";
      else if (imc <= 31.1) condicao = "Acima do peso";
      else condicao = "Obeso";
    }
  
    document.getElementById("resultado").innerHTML =
      `<p><strong>${nome}</strong><br>
       IMC: ${imc.toFixed(2)}<br>
       Condição: ${condicao}</p>`;
  }