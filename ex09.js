function arredondaNota(nota) {
    if (nota < 38) {
      return nota; // Aluno reprovado, não faz arredondamento
    }
  
    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
    if (proximoMultiploDe5 - nota < 3) {
      return proximoMultiploDe5; // Arredonda para o próximo múltiplo de 5
    } else {
      return nota; // Não arredonda
    }
  }
  
  function classificaAluno(nota) {
    const notaFinal = arredondaNota(nota);
  
    if (notaFinal >= 40) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }