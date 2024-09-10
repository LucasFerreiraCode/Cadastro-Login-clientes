let linhaEditada = null;


document.getElementById('cadastrarClienteBtn').addEventListener('click', function () {

    document.getElementById('formularioCadastro').style.display = 'block';
    linhaEditada = null;
});


document.getElementById('cancelarCadastro').addEventListener('click', function () {

    document.getElementById('formularioCadastro').style.display = 'none';
    document.getElementById('clienteForm').reset();
    linhaEditada = null;
});


function adicionarOuEditarClienteNaTabela(nome, email, celular, cidade) {
    if (linhaEditada) {

        linhaEditada.cells[0].textContent = nome;
        linhaEditada.cells[1].textContent = email;
        linhaEditada.cells[2].textContent = celular;
        linhaEditada.cells[3].textContent = cidade;
        linhaEditada = null;
    } else {

        const tabela = document.querySelector('tbody');
        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${celular}</td>
            <td>${cidade}</td>
            <td class="action-buttons">
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            </td>
        `;

        novaLinha.querySelector('.editar').addEventListener('click', () => editarCliente(novaLinha));
        novaLinha.querySelector('.excluir').addEventListener('click', () => excluirCliente(novaLinha));
    }
}

function editarCliente(linha) {

    const nome = linha.cells[0].textContent;
    const email = linha.cells[1].textContent;
    const celular = linha.cells[2].textContent;
    const cidade = linha.cells[3].textContent;

    document.getElementById('nome').value = nome;
    document.getElementById('email').value = email;
    document.getElementById('celular').value = celular;
    document.getElementById('cidade').value = cidade;

    document.getElementById('formularioCadastro').style.display = 'block';


    linhaEditada = linha;
}

function excluirCliente(linha) {
    linha.remove();
}

document.getElementById('clienteForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const cidade = document.getElementById('cidade').value;

    adicionarOuEditarClienteNaTabela(nome, email, celular, cidade);

    document.getElementById('clienteForm').reset();
    document.getElementById('formularioCadastro').style.display = 'none';
});