document.getElementById("novoCalculo").style.display = "none";

function calcularMedia() {

    // Pegando os valores digitados pelo usuário
    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;

    // Pegando as notas
    let valorN1 = document.getElementById("nota1").value;
    let valorN2 = document.getElementById("nota2").value;
    let valorN3 = document.getElementById("nota3").value;
    let valorN4 = document.getElementById("nota4").value;

    // Verificando se algum campo está vazio
    if (
        nome === "" ||
        disciplina === "" ||
        valorN1 === "" ||
        valorN2 === "" ||
        valorN3 === "" ||
        valorN4 === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    // Convertendo as notas para número
    let n1 = Number(valorN1);
    let n2 = Number(valorN2);
    let n3 = Number(valorN3);
    let n4 = Number(valorN4);

    // Calculando a média
    let soma = n1 + n2 + n3 + n4;
    let media = soma / 4;

    // Verificando a situação
    let situacao;
    let classeSituacao;

    if (media >= 7) {
        situacao = "APROVADO";
        classeSituacao = "aprovado";
    } else if (media >= 5) {
        situacao = "EM RECUPERAÇÃO";
        classeSituacao = "recuperacao";
    } else {
        situacao = "REPROVADO";
        classeSituacao = "reprovado";
    }

    // Exibindo o resultado
    let resultado = document.getElementById("resultado");

    resultado.innerHTML =
        "Aluno: " + nome + "<br><br>" +
        "Disciplina: " + disciplina + "<br><br>" +
        "Média: " + media.toFixed(2) + "<br><br>" +
        "Situação: <span class='" + classeSituacao + "'>" +
        situacao + "</span>";

    // Esconde o botão calcular
    document.getElementById("calcular").style.display = "none";

    // Mostra o botão calcular novamente
    document.getElementById("novoCalculo").style.display = "block";
}


function calcularNovo() {

    // Limpando os campos
    document.getElementById("nome").value = "";
    document.getElementById("disciplina").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    // Limpando o resultado
    document.getElementById("resultado").textContent =
        "Preencha os dados acima e clique em calcular média";

    // Mostra o botão calcular
    document.getElementById("calcular").style.display = "block";

    // Esconde o botão calcular novamente
    document.getElementById("novoCalculo").style.display = "none";
}