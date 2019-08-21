const View = require("./ttt-view");
const Game = require("../solution/game");

  $(() => {
    let $el = $("figure");
    let game = new Game();
    let view = new View(game, $el);
    view.bindEvents();
  });
