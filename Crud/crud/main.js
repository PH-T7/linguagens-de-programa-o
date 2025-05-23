

function listaAnimais() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
    
    fetch(urlServer)
        .then(response => response.json())
        .then(data => {
            data.forEach(usuario => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let button = document.createElement("button");

                button.innerHTML = "Excluir";
                button.classList.add("btn-excluir");
                button.onclick = () => {
                    fetch(`${urlServer}${usuario.id}`, {
                        method: "DELETE"
                    })
                    .then(() => listaAnimais());
                }   

                a.innerHTML = ` ${usuario.nome} (${usuario.idade}) - ${usuario.email}`; // Adicionando o email aqui
                a.href = `cadastrar/cadastrar.html?id=${usuario.id}`;
                a.classList.add("linkUsuario");

                li.appendChild(button);
                li.appendChild(a);
                   
                lista.appendChild(li);
            })
        })
}

listaAnimais();