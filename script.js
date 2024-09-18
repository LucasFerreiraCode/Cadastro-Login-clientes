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


let linhaEmpresaEditada = null;

document.getElementById('cadastroEmpresaBtn').addEventListener('click', function () {
    document.getElementById('formularioCadastroEmpresa').style.display = 'block';
    linhaEmpresaEditada = null;
});

document.getElementById('cancelarCadastroEmpresa').addEventListener('click', function () {
    document.getElementById('formularioCadastroEmpresa').style.display = 'none';
    document.getElementById('empresaForm').reset();
    linhaEmpresaEditada = null;
});

function adicionarOuEditarEmpresaNaTabela(nomeEmpresa, endereco, estado, complemento, cnpj, cpfSocios, rg) {
    if (linhaEmpresaEditada) {
        linhaEmpresaEditada.cells[0].textContent = nomeEmpresa;
        linhaEmpresaEditada.cells[1].textContent = endereco;
        linhaEmpresaEditada.cells[2].textContent = estado;
        linhaEmpresaEditada.cells[3].textContent = complemento;
        linhaEmpresaEditada.cells[4].textContent = cnpj;
        linhaEmpresaEditada.cells[5].textContent = cpfSocios;
        linhaEmpresaEditada.cells[6].textContent = rg;
        linhaEmpresaEditada = null;
    } else {
        const tabelaEmpresas = document.querySelector('#tabelaEmpresas tbody');
        const novaLinha = tabelaEmpresas.insertRow();

        novaLinha.innerHTML = `
            <td>${nomeEmpresa}</td>
            <td>${endereco}</td>
            <td>${estado}</td>
            <td>${complemento}</td>
            <td>${cnpj}</td>
            <td>${cpfSocios}</td>
            <td>${rg}</td>
            <td class="action-buttons">
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            </td>
        `;

        novaLinha.querySelector('.editar').addEventListener('click', () => editarEmpresa(novaLinha));
        novaLinha.querySelector('.excluir').addEventListener('click', () => excluirEmpresa(novaLinha));
    }
}


function editarEmpresa(linha) {
    const nomeEmpresa = linha.cells[0].textContent;
    const endereco = linha.cells[1].textContent;
    const estado = linha.cells[2].textContent;
    const complemento = linha.cells[3].textContent;
    const cnpj = linha.cells[4].textContent;
    const cpf = linha.cells[5].textContent;
    const rg = linha.cells[6].textContent;

    document.getElementById('nomeEmpresa').value = nomeEmpresa;
    document.getElementById('endereco').value = endereco;
    document.getElementById('estado').value = estado;
    document.getElementById('complemento').value = complemento;
    document.getElementById('cnpj').value = cnpj;

    document.querySelectorAll('[name="cpfSocios"]').forEach((input, index) => {
        input.value = cpf.split(', ')[index] || ''; 
    });

    document.getElementById('rg').value = rg;

    document.getElementById('formularioCadastroEmpresa').style.display = 'block';
    linhaEmpresaEditada = linha;
}



function excluirEmpresa(linha) {
    linha.remove();
}

document.getElementById('empresaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeEmpresa = document.getElementById('nomeEmpresa').value;
    const endereco = document.getElementById('endereco').value;
    const estado = document.getElementById('estado').value;
    const complemento = document.getElementById('complemento').value;
    const cnpj = document.getElementById('cnpj').value;
    const cpfSocios = document.getElementById('cpfSocios').value;
    const rg = document.getElementById('rg').value;

    console.log(nomeEmpresa, endereco, estado, complemento, cnpj, cpfSocios, rg);

    adicionarOuEditarEmpresaNaTabela(nomeEmpresa, endereco, estado, complemento, cnpj, cpfSocios, rg);

    document.getElementById('empresaForm').reset();
    document.getElementById('formularioCadastroEmpresa').style.display = 'none';
});