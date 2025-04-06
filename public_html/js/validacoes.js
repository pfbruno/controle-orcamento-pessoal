function validarReceita() {
    const valor = document.getElementById("valorReceita").value;
    const data = document.getElementById("dataReceita").value;

    if (valor <= 0) {
        alert("Informe um valor positivo.");
        return false;
    }

    if (!data) {
        alert("Informe a data.");
        return false;
    }

    alert("Receita cadastrada com sucesso!");
    return true;
}

function validarDespesa() {
    const valor = document.getElementById("valorDespesa").value;
    const data = document.getElementById("dataDespesa").value;

    if (valor <= 0) {
        alert("Informe um valor positivo.");
        return false;
    }

    if (!data) {
        alert("Informe a data.");
        return false;
    }

    alert("Despesa cadastrada com sucesso!");
    return true;
}

function validarMeta() {
    const meta = document.getElementById("metaValor").value;

    if (meta <= 0) {
        alert("Meta deve ser maior que zero.");
        return false;
    }

    alert("Meta definida com sucesso!");
    return true;
}

