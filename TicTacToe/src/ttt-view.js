class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    $el.append(this.setupBoard);
  }

  bindEvents() {
    $("li").on("click", (e) => {
      let $li = $(e.currentTarget);
      try {
        this.makeMove($li);
      }
      catch(err) {
        console.log(err);
        alert(`That ${err.msg}`);
      }
    });
  }

  makeMove($li) {
    let x = Math.floor($li.data("number") / 3);
    let y = $li.data("number") % 3;
    let mark = this.game.currentPlayer;
    this.game.playMove([x, y]);

    $li.text(mark);
    $li.removeClass("unchecked");
    $li.addClass("checked");

    if (this.game.isOver()) {
      let mark = this.game.winner();
      if (mark) {
        let $div = $("<div>");
        $div.text(`You win, ${mark}`);
        this.$el.append($div);
        let $winnerlis = $("li:contains('x')")
        if (mark = "o") {
          let $winnerlis = $("li:contains('o')");
        }
        $winnerlis.addClass("winner");
      } else {
        let $div = $("<div>");
        $div.text(`It is tie!`);
        this.$el.append($div);
      }
      $("li:not(.winner)").removeClass("unchecked");
      $("li:not(.winner)").addClass("checked");
      $("li").unbind("click");
    }
  }

  setupBoard() {
    let $ul = $("<ul>");
    let numSquares = 9;
    for (let i = 0; i < numSquares; i++) {
      let $li = $("<li>");
      $li.data("number", i);
      $li.addClass("unchecked");
      $ul.append($li);
    }
    return $ul;
  }
}

module.exports = View;
