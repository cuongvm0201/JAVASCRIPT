const prew = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");
const button = document.querySelector("button");
const counter = document.getElementById("counter");

let dem = 0;
prew.addEventListener("click", function(){
   counter.innerText = Number(counter.innerText) -1;
   if(Number(counter.innerText) < 0){
      counter.style.color = "red";
   }
   if(Number(counter.innerText) == 0){
      counter.style.color = "#333333";
   }
})

next.addEventListener("click", function(){
    counter.innerText = Number(counter.innerText) +1;
    if(Number(counter.innerText) > 0){
      counter.style.color = "green";
   }
   if(Number(counter.innerText) == 0){
      counter.style.color = "#333333";
   }
 })
