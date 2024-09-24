
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})

//Button Function for another HTML transition.
function MinecraftCharacters() {
  window.location.href = "MC_Characters.html";
}

function MinecraftHistory() {
  window.location.href = "MC_History.html";
}

function MinecraftBlocks() {
  window.location.href = "MC_Blocks.html";
}

//Block Placement Function.
var value = 0; // Declare value in a broader scope

function PlaceBlockFunction() {
  var element = document.getElementById('incrementText');
  value++;

  console.log(value);
  document.getElementById('incrementText').innerHTML = value;
}

function decrementButton() {
  var element = document.getElementById('incrementText');
  
  if (value > 0) 
  {
    value--;
    console.log(value);
    element.innerHTML = value;
  } 
  else 
    console.log("Value cannot be negative.");
}

function ShowBlockCount() {
  alert("The number of Blocks you placed: " + value);
  value = 0;
  var element = document.getElementById('incrementText');
    element.innerHTML = value;
}

