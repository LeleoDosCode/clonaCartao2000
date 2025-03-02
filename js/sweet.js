function clonar() {
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let validade = document.getElementById("validade").value;
    let cvv = document.getElementById("cvv").value;

    if (!nome || !numero || !validade || !cvv) {
        Swal.fire({
            title: "Dados incompletos",
            text: "Preencha todos os dados",
            icon: "error"
        });
        return;
    } else {
        Swal.fire({
            title: "Dados vazados",
            text: "Cartão clonado com sucesso",
            icon: "success"
        });
        localStorage.setItem("nome", nome);
        localStorage.setItem("numero", numero);
        localStorage.setItem("validade", validade);
        localStorage.setItem("cvv", cvv);
        return;
    }
}