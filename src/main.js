import players from "./js/players";
import { cast } from "./js/magics";

import "./css/app.scss";

function initPlayers() {
  players.forEach((player) => {
    const playerElement = document.getElementById(player.kind);

    // setup name
    playerElement.querySelector(".player-name").textContent = player.kind;

    // setup available magics
    let selectMagicElement = playerElement.querySelector("#select-magic");
    let htmlOptions = "";
    player.magicAbilities.map((m) => {
      htmlOptions += `<option value="${m}">${m}</option>`;
    });
    selectMagicElement.innerHTML = htmlOptions;

    // setup btnCast
    const btnCast = playerElement.querySelector(".action-cast");
    btnCast.addEventListener("click", function () {
      let selectedMagic = selectMagicElement.value;
      cast.call(player, selectedMagic);
    });
  });
}

initPlayers();
