const heading = document.querySelector("h1");
console.log(heading.classList);
heading.classList.add("text-uppercase", "text-center");
heading.classList.remove("text-uppercase", "text-center");
console.log(heading.classList.contains("text-red")); //true
console.log(heading.classList.contains("abc")); //false

//Thực hiện 1 công việc sau 1 khoảng thời gian nhất định (ms)
setInterval(function(){
    heading.classList.toggle("text-red");
},2000)