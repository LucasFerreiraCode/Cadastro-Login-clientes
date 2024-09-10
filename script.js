let linhaEditada = null; // Variável para armazenar a linha que está sendo editada

// Evento para o botão "Cadastrar Cliente"
document.getElementById('cadastrarClienteBtn').addEventListener('click', function() {
    // Exibe o formulário de cadastro
    document.getElementById('formularioCadastro').style.display = 'block';
    linhaEditada = null; // Reseta a linha editada para um novo cadastro
});

// Evento para o botão "Cancelar" no formulário
document.getElementById('cancelarCadastro').addEventListener('click', function() {
    // Esconde o formulário de cadastro
    document.getElementById('formularioCadastro').style.display = 'none';
    document.getElementById('clienteForm').reset(); // Limpa o formulário
    linhaEditada = null; // Reseta a linha editada ao cancelar
});

// Função para adicionar ou editar um cliente na tabela
function adicionarOuEditarClienteNaTabela(nome, email, celular, cidade) {
    if (linhaEditada) {
        // Se estiver editando, atualiza a linha existente
        linhaEditada.cells[0].textContent = nome;
        linhaEditada.cells[1].textContent = email;
        linhaEditada.cells[2].textContent = celular;
        linhaEditada.cells[3].textContent = cidade;
        linhaEditada = null; // Reseta a linha editada após salvar
    } else {
        // Se não estiver editando, adiciona uma nova linha
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
}

// Função para editar um cliente
function editarCliente(linha) {
    // Pega os valores atuais da linha
    const nome = linha.cells[0].textContent;
    const email = linha.cells[1].textContent;
    const celular = linha.cells[2].textContent;
    const cidade = linha.cells[3].textContent;

    // Preenche o formulário com os dados do cliente
    document.getElementById('nome').value = nome;
    document.getElementById('email').value = email;
    document.getElementById('celular').value = celular;
    document.getElementById('cidade').value = cidade;

    // Exibe o formulário
    document.getElementById('formularioCadastro').style.display = 'block';

    // Armazena a linha que está sendo editada
    linhaEditada = linha;
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

    // Adiciona ou edita o cliente na tabela
    adicionarOuEditarClienteNaTabela(nome, email, celular, cidade);

    // Reseta o formulário e esconde-o
    document.getElementById('clienteForm').reset();
    document.getElementById('formularioCadastro').style.display = 'none';
});