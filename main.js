import players from "./js/players";
import { cast } from "./js/magics";

import "./app.scss";

function initPlayers() {
  players.forEach((player) => {
    const playerElement = document.getElementById(player.kind);
    playerElement.querySelector(".player-name").textContent = player.name;

    const btnCast = playerElement.querySelector(".action-cast");
    btnCast.addEventListener("click", function () {
      // console.log(player);
      cast.call(player, "fire");
      player.cast("thunder");
    });
  });
}

initPlayers();
