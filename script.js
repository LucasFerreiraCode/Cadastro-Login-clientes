// Evento para o botão "Cadastrar Cliente"
document.getElementById('cadastrarClienteBtn').addEventListener('click', function() {
    // Exibe o formulário de cadastro
    document.getElementById('formularioCadastro').style.display = 'block';
});

// Evento para o botão "Cancelar" no formulário
document.getElementById('cancelarCadastro').addEventListener('click', function() {
    // Esconde o formulário de cadastro
    document.getElementById('formularioCadastro').style.display = 'none';
});

// Função para adicionar um cliente à tabela
function adicionarClienteNaTabela(nome, email, celular, cidade) {
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

    // Adicionar eventos de editar e excluir
    novaLinha.querySelector('.editar').addEventListener('click', () => editarCliente(novaLinha));
    novaLinha.querySelector('.excluir').addEventListener('click', () => excluirCliente(novaLinha));
}

// Função para editar um cliente
function editarCliente(linha) {
    // Pega os valores atuais da linha
    const nome = linha.cells[0].textContent;
    const email = linha.cells[1].textContent;
    const celular = linha.cells[2].textContent;
    const cidade = linha.cells[3].textContent;

    // Preenche o formulário com os dados do cliente para edição
    document.getElementById('nome').value = nome;
    document.getElementById('email').value = email;
    document.getElementById('celular').value = celular;
    document.getElementById('cidade').value = cidade;

    // Exibe o formulário
    document.getElementById('formularioCadastro').style.display = 'block';

    // Remove a linha antiga depois de editar
    excluirCliente(linha);
}

// Função para excluir um cliente
function excluirCliente(linha) {
    linha.remove();
}

// Evento para o formulário de cadastro
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const cidade = document.getElementById('cidade').value;

    
    adicionarClienteNaTabela(nome, email, celular, cidade);

    document.getElementById('clienteForm').reset();
    document.getElementById('formularioCadastro').style.display = 'none';
});