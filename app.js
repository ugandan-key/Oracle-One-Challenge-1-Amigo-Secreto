// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const friends = [];

// Función para renderizar la lista de amigos en el DOM
function renderFriends() {
    const list = document.getElementById("friend-list");
    list.innerHTML = "";
    friends.forEach((friend, index) => {
        const li = document.createElement("li");
        li.textContent = friend;
        
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = () => editFriend(index);
        
        li.appendChild(editButton);
        list.appendChild(li);
    });
}

// Función para agregar un amigo
function addFriend() {
    const input = document.getElementById("friend-input");
    const name = input.value.trim();
    if (name && !friends.includes(name)) {
        friends.push(name);
        input.value = "";
        renderFriends();
    }
}

// Función para editar un amigo
function editFriend(index) {
    const newName = prompt("Ingrese el nuevo nombre", friends[index]);
    if (newName && newName.trim() !== "") {
        friends[index] = newName.trim();
        renderFriends();
    }
}

// Función para sortear un amigo
function drawFriend() {
    if (friends.length > 0) {
        const winner = friends[Math.floor(Math.random() * friends.length)];
        alert(`El amigo sorteado es: ${winner}`);
    } else {
        alert("No hay amigos en la lista para sortear");
    }
}

// Event listeners
document.getElementById("add-friend").addEventListener("click", addFriend);
document.getElementById("draw-friend").addEventListener("click", drawFriend);

// Render inicial
renderFriends();