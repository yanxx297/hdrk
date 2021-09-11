const message = [
  "働け!",
  "Let's do it",
  "听话！",
  "下班再玩不香吗？",
  "您完全没有自制力是吗？",
  "塔塔开！塔塔开！"
];

function moveImg(e) {
  var valueX = (e.pageX * -1 / 10);
  var valueY = (e.pageY * -1 / 10);
  this.style.backgroundPositionX = valueX + "px"
  this.style.backgroundPositionY = valueY + "px"
}

function audioPlay(){
  document.getElementById("hdrk").play();
  var i = Math.floor(Math.random() * message.length);
  document.getElementById("msg").innerHTML = message[i];
}

function audioPause(){
  document.getElementById("hdrk").pause();
  document.getElementById("msg").innerHTML = "";
}

window.onload = function() {
  var im = document.getElementById("mv-img");
  if (im) {
    im.addEventListener("mousemove",moveImg,false);
  }  
}

