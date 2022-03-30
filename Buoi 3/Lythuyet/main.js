const heading = document.getElementById("heading");
console.log(heading);

const para2 = document.querySelector(".para");
console.log(para2);

const para3 = document.querySelector("p:nth-child(4)");
console.log(para3);

const ul2 = document.querySelector("body > ul");
console.log(ul2);

const ul21 = document.querySelector(".box + ul");
console.log(ul21);

const ul1 = document.querySelector(".box ul");
console.log(ul1);

const li44 = document.querySelector(".box ul li:last-child");
console.log(li44);

// querySelectorAll
const paras = document.querySelectorAll("p");
console.log(paras);
console.log(paras[1]);
console.log(paras.length);

//Duyet Nodelist
for (let i = 0; i < paras.length; i++) {
  console.log(paras[i]);
}


//Ép kiểu node thành mảng để dùng thư viện array
Array.from(paras).map((ele) => console.log(ele));

//Truy cập gián tiếp
console.log(para3.previousElementSibling);
console.log(para3.nextElementSibling);
console.log(para3.parentElement);

//Thay đổi style
heading.style.color = "red";
heading.style.backgroundColor = "black";

for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = "blue";
}

paras.forEach((ele) => {
  ele.style.backgroundColor = "black";
});

Array.from(paras).map((ele) => (ele.style.fontSize = "30px"));

//Lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

//Thay đổi nội dung
//innerHTML sẽ thay đổi nội dung bao gồm cả text và type thẻ
heading.innerHTML = "Xin chào";
heading.innerHTML = "<span> Các bạn </span>";

//innerText chỉ thay đổi nội dung, thẻ gắn vào sẽ hiển cả type thẻ trong nội dung
heading.innerText = "Thái Giáo Sư";
heading.innerText = "<span>Thái Giáo Sư</span>";

//Tạo thẻ
const link = document.createElement("a");
link.innerText = "Google";
link.href = "https://www.google.com/";
console.log(link);

//Thêm thẻ vào DOM
// document.body.prepend(link); thêm vào đầu body
// document.body.appendChild(link); thêm vào cuối body
// thêm vào vị trí chỉ định (sau body, và trước class .box)
const boxEle = document.querySelector(".box");
document.body.insertBefore(link, boxEle);

//tạo thẻ li có nội dung "li new" nằm trước thẻ li "Thẻ li 3"
const newLi = document.createElement("li");
const li3 = document.querySelector("body > ul li:nth-child(3)");
console.log(li3);
newLi.innerText = "li new";
console.log(newLi);
ul2.insertBefore(newLi, li3);


//Tạo thẻ button
para2.insertAdjacentHTML("beforebegin", "<button>Login</button>");

const para1 = document.querySelector("p");
para1.insertAdjacentHTML("afterend", "<button>Logout</button>");

//Tạo thẻ
const li = document.createElement("li");
li.innerText = "Li NEW";
ul1.insertAdjacentElement("afterbegin", li);

//Xóa
// document.body.removeChild(para2); 
para2.parentElement.removeChild(para2);

//Thay thế
const h2 = document.createElement("h2");
h2.innerText = "Đây là thẻ H2";
// document.body.replaceChild(h2,heading);
heading.parentElement.replaceChild(h2, heading);

//Copy
const boxCopy1 = boxEle.cloneNode(true);
const boxCopy2 = boxEle.cloneNode(false);
console.log(boxCopy1);
console.log(boxCopy2);

h2.insertAdjacentElement("afterend",boxCopy1);


//Thực hành
