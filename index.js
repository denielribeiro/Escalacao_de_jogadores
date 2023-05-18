//Função que recebe os dados do jogador e confirma se o usuario deseja adicionar
function addPlayer() {
  const playersTable = document.getElementById("players-list");
  let player = document.getElementById("playerName").value;
  let position = document.getElementById("playerPosition").value;
  let number = document.getElementById("playerNumber").value;

  let add = confirm("Deseja adicionar o jogador?\n" + player + "\n" + position + "\n" + number + "?");

  function newPlayer() {
    //Cria sessão
    const sectionPlayer = document.createElement("section");
    const sectionId = document.getElementById("playerNumber").value;
    sectionPlayer.setAttribute("id", sectionId);
    playersTable.appendChild(sectionPlayer);

    //Cria Título do campo
    const dataTitle = document.createElement("h3");
    dataTitle.innerText = "Dados do Jogador";

    //Cria tabela
    const playerTable = document.createElement("ul");

    //Recebe os dados do nome
    const namePlayer = document.createElement("li");
    namePlayer.innerText = "Nome: ";
    const inputPlayer = document.createElement("input");
    inputPlayer.type = "text";
    inputPlayer.value = player;
    inputPlayer.setAttribute("readonly", "readonly");
    sectionPlayer.appendChild(dataTitle);
    sectionPlayer.appendChild(playerTable);
    namePlayer.appendChild(inputPlayer);
    playerTable.appendChild(namePlayer);
    playerTable.appendChild(document.createElement("br"));

    //Recebe os dados da posição
    const playerPosition = document.createElement("li");
    playerPosition.innerText = "Posição: ";
    const inputPosition = document.createElement("input");
    inputPosition.type = "text";
    inputPosition.value = position;
    inputPosition.setAttribute("readonly", "readonly");
    playerPosition.appendChild(inputPosition);
    playerTable.appendChild(playerPosition);
    playerTable.appendChild(document.createElement("br"));

    //Recebe os dados do número
    const playerNumber = document.createElement("li");
    playerNumber.innerText = "Número: ";
    const inputNumer = document.createElement("input");
    inputNumer.type = "text";
    inputNumer.value = number;
    inputNumer.setAttribute("readonly", "readonly");
    playerNumber.appendChild(inputNumer);
    playerTable.appendChild(playerNumber);
    playerTable.appendChild(document.createElement("br"));
  }

  //Confirmação dos dados de entrada do jogador
  if (add == true) {
    newPlayer();
    document.getElementById("playerName").value = "";
    document.getElementById("playerPosition").value = "";
    document.getElementById("playerNumber").value = "";
  } else {
    alert("Dados cancelados.");
  }
}

function removePlayer() {
  const playersTable = document.getElementById("players-list");
  const tableId = prompt("Qual jogador deseja excluir da lista?");
  const removeConfirm = confirm("Tem certeza que deseja excluir o jogador número\n" + tableId + "?");
  const selectedId = document.getElementById(tableId);

  if (removeConfirm == true) {
    playersTable.removeChild(selectedId);
  } else {
    alert("O jogador não será excluido.");
  }
}
