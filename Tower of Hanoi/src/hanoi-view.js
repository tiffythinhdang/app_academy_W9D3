class HanoiView {
  constructor (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setUpTowers();
    this.render();
  }

  setUpTowers() {
    let numTowers = 3;
    for (let i = 0; i < numTowers; i++) {
      let $ul = $("<ul>");
      $ul.addClass(`tower-${i}`);

      for (let j = 0; j < numTowers; j++) {
        let $li = $("<li>");
        $li.addClass(`tower-height-${j}`);
        $ul.append($li);
      }

      let $div = $("<div>");
      $ul.append($div);
      this.$el.append($ul);
    }
  }

  render() {
    let towers = this.game.towers();
    towers.forEach( (el, i) => {
      el.forEach( (item, j) => {
        let $tower = $(`ul.tower-${i}`);
        let $disc = $("<div>");
        $disc.addClass(`disc-${item}`);
        let $curli = $tower.find(`li.tower-height-${j}`);
        $curli.append($disc);
      });
    });
  }
}

module.exports = HanoiView;