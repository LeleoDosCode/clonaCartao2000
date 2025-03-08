document.getElementById("clonar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;
    const validade = document.getElementById("validade").value;
    const cvv = document.getElementById("cvv").value;

    if (!nome || !numero || !validade || !cvv) {
        Swal.fire("Erro!", "Preencha todos os campos!", "error");
        return;
    }

    const cartao = {
        nome: nome,
        numero: numero.replace(/\s+/g, ""), // Remove espaços
        validade: formatarDataParaBanco(validade),
        cvv: cvv
    };

    fetch("http://localhost:8080/api/cartoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartao)
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire("Sucesso!", "Cartão cadastrado com sucesso!", "success");
        console.log("Resposta do servidor:", data);
    })
    .catch(error => {
        Swal.fire("Erro!", "Ocorreu um erro ao salvar os dados!", "error");
        console.error("Erro:", error);
    });
});

// Formata a data MM/AAAA para o formato do banco YYYY-MM-DD
function formatarDataParaBanco(data) {
    const partes = data.split("/");
    if (partes.length === 2) {
        return `20${partes[1]}-${partes[0]}-01`; // Assume o primeiro dia do mês
    }
    return "2000-01-01"; // Data padrão se der erro
}
