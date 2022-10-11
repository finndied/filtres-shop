"use strict";

// SLIDER ------------------------------------------------------------

const slider2 = setInterval(function(slider2){
   document.getElementById("slider-4").style.display = "none";
   document.getElementById("slider-3").style.display = "none";
   document.getElementById("slider-2").style.display = "flex";
   document.getElementById("slider-1").style.display = "none";
   
},15200)

const slider3 = setInterval(function(slider3){
   document.getElementById("slider-4").style.display = "none";
   document.getElementById("slider-3").style.display = "flex";
   document.getElementById("slider-2").style.display = "none";
   document.getElementById("slider-1").style.display = "none";
   if(slider2 !== slider3) {
      clearInterval(slider3)
   }
},32200)
const slider4 = setInterval(function(slider4){
   document.getElementById("slider-4").style.display = "flex";
   document.getElementById("slider-3").style.display = "none";
   document.getElementById("slider-2").style.display = "none";
   document.getElementById("slider-1").style.display = "none";
},43200)

const slider = setInterval(function(slider){
   document.getElementById("slider-4").style.display = "none";
   document.getElementById("slider-3").style.display = "none";
   document.getElementById("slider-2").style.display = "none";
   document.getElementById("slider-1").style.display = "flex";
},54200)


// ---------------------------------------------------------------
