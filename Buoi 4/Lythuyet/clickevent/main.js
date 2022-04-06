// sử dụng htmk attribuute

function sayHello(){
    alert("Xin chào các bạn");
}

// sử dụng DOM property
const btn2 = document.getElementById("btn-2")
//bt2.onclick = function(){
    // alert("Xin chào các bạn");
// }


btn2.onclick = sayHello;

function sayHello2(){
    alert("Xin chào các bạn 2");
}

// sử dụng addEventListener
const btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", function(){
    alert("Xin chào các bạn 3");
})


//