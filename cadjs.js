const replaybtn = document.querySelector(".replay");
const hidebtn = document.querySelector(".hide");
const appearbtn = document.querySelector(".appear");

const elementY = document.querySelector(".firstClass");
const elementX = document.querySelector(".secondClass");

  elementY.addEventListener("animationend", function(){
  elementY.classList.remove("animControl");
})

replaybtn.addEventListener("click", function(){
  elementY.classList.add("animControl");
})


hidebtn.addEventListener("click", function(){
  elementX.classList.remove("animAppear");
  elementX.classList.add("animHide");
})


appearbtn.addEventListener("click", function(){
  elementX.classList.remove("animHide");
  elementX.classList.add("animAppear");
})
