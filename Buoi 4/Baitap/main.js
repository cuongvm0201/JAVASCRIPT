// let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
// let boxes = document.querySelector(".boxes");
// let divContain = document.querySelector(".wrap");
// let moreBoxes = document.getElementById("btn");

// let point = document.querySelector(".points");
// let totalBoxes = document.getElementById("score");


// let listAll;
// function createElement() {
//   listAll = [];
//   const box1 = document.createElement("div");
//   const box2 = document.createElement("div");
//   const box3 = document.createElement("div");
//   const box4 = document.createElement("div");
//   const box5 = document.createElement("div");
//   boxes.appendChild(box1);
//   boxes.appendChild(box2);
//   boxes.appendChild(box3);
//   boxes.appendChild(box4);
//   boxes.appendChild(box5);
//   box1.classList.add("box");
//   box2.classList.add("box");
//   box3.classList.add("box");
//   box4.classList.add("box");
//   box5.classList.add("box");
//   box1.style.backgroundColor = "#3498db";
//   box2.style.backgroundColor = "#9b59b6";
//   box3.style.backgroundColor = "#e74c3c";
//   box4.style.backgroundColor = "#2c3e50";
//   box5.style.backgroundColor = "#d35400";
//   let listBox = document.querySelectorAll(".box");
//   console.log(listAll);
//   for (let i = 0; i < listBox.length; i++) {
//     listAll.push(listBox[i]);
//     listBox[i].addEventListener("click", function () {
//       listBox[i].remove();
//       removeData(listBox[i]);
//       })
//   }
//   point.innerText = listAll.length;

// }

// function removeData(data){
//   for (let i = 0; i< listAll.length ; i++){
//       if (listAll[i] == data){
//         listAll.splice(i, 1);
//         point.innerText = listAll.length;
//       }
//   }
// }

// createElement();
// moreBoxes.addEventListener("click", function () {
//   createElement();
// });

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
let boxes = document.querySelector(".boxes");
let divContain = document.querySelector(".wrap");
let moreBoxes = document.getElementById("btn");

let point = document.querySelector(".points");
let totalBoxes = document.getElementById("score");
function createElement() {
  const box1 = document.createElement("div");
  const box2 = document.createElement("div");
  const box3 = document.createElement("div");
  const box4 = document.createElement("div");
  const box5 = document.createElement("div");
  boxes.appendChild(box1);
  boxes.appendChild(box2);
  boxes.appendChild(box3);
  boxes.appendChild(box4);
  boxes.appendChild(box5);
  box1.classList.add("box");
  box2.classList.add("box");
  box3.classList.add("box");
  box4.classList.add("box");
  box5.classList.add("box");
  box1.style.backgroundColor = "#3498db";
  box2.style.backgroundColor = "#9b59b6";
  box3.style.backgroundColor = "#e74c3c";
  box4.style.backgroundColor = "#2c3e50";
  box5.style.backgroundColor = "#d35400";
  let listBox = document.querySelectorAll(".box");
  point.innerText =  document.querySelectorAll(".box").length;
  for (let i = 0; i < listBox.length; i++) {
    listBox[i].addEventListener("click", function () {
        listBox[i].remove();
        point.innerText =  document.querySelectorAll(".box").length;
      })
  }
}
createElement();
moreBoxes.addEventListener("click", function () {
  createElement();
});