// Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function (event) {
//     if(event.keyCode == 13){
//         console.log("Ối dồi ôi");
//     } else{
//         console.log("Thái là nhất");
//     }
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function(event){
        if(event.keyCode == 13){
            let value = inputEl.value;
            alert(`Twf khóa bạn vừa nhập là :  ${value}`);
        }
})

inputEl.addEventListener("change", function(event){
    let value = event.target.value;
    inputEl.value = value.toLowerCase();
})

inputEl.addEventListener("focus", function(){
    inputEl.value = inputEl.value.toUpperCase();
})