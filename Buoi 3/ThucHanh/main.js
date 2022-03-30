//Bai 1
//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const h1 = document.getElementById("heading");
h1.style.color = "red";
h1.style.textTransform = "UpperCase";

//Bai 2
//Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const para = document.querySelectorAll(".para");
console.log(para);
for(let i = 0; i < para.length; i++){
    para[i].style.color = "blue";
    para[i].style.fontSize = "20px";
}

//Bai 3
//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const para3 = document.querySelector(".para.para-3");
const link = document.createElement("a");
link.innerText = "Facebook";
link.href = "https://www.facebook.com/";
para3.insertAdjacentElement("afterend",link);

//Bai 4
//Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.getElementById("title");
title.innerText = "Đây là thẻ tiêu đề";

//Bai 6
//Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
para3.innerHTML = "<button>Click me</button>";

//Bai 7
//Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para.para-2");
const copyPaste = para2.cloneNode(true);
para2.insertAdjacentElement("afterend",copyPaste);

//Bai 8
//Xóa thẻ có class=“para-1”
const para1 = document.querySelector(".para.para-1");
para1.parentElement.removeChild(para1);