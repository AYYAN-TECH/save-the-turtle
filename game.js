AFRAME.registerComponent('game-play', {

  init: function () {
    turtlesRemaining = 20
    this.el.addEventListener('collide', function (e) {
    turtlesRemaining=turtlesRemaining-1
    e.detail.target.el.remove()
    turtletext=document.getElementById("twentyfour")
    turtletext.setAttribute('text', { value: String(turtlesRemaining) });
    if (turtlesRemaining ==0){
      wintext=document.getElementById("win")
      wintext.setAttribute('text', { value:"You Win For Now"})
    }

    });
  },

});