// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const p1 = document.getElementById("text");
p1.style.color = "#777";
p1.style.fontSize = "2rem";
p1.innerHTML = `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.`;

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const ul1 = document.querySelectorAll("p + ul li");
console.log(ul1);
for (let i = 0; i < ul1.length; i++) {
    ul1[i].style.color = "blue";
}

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
// 1.Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const li8 = document.createElement("li");
const li9 = document.createElement("li");
const li10 = document.createElement("li");
li8.innerText = "Item 8";
li9.innerText = "Item 9";
li10.innerText = "Item 10";
// -------
const li7 = document.querySelector("#list li:nth-child(7)");
console.log(li7);
li7.insertAdjacentElement("afterend", li8);
li8.insertAdjacentElement("afterend", li9);
li9.insertAdjacentElement("afterend", li10);
// 2.Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector("#list > li");
console.log(li1);
li1.style.color = "red";
li1.style.textTransform = "upperCase";
// 3.Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("#list li:nth-child(3)");
li3.style.backgroundColor = "green";
// 4.Remove thẻ <li> 4
const li4 = document.querySelector("#list li:nth-child(4)");
li4.parentElement.removeChild(li4);
// 5.Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const liNew = document.createElement("li");
liNew.innerText = "Đây là thẻ li MỚI";
liNew.style.color = "brown";
li3.insertAdjacentElement("afterend", liNew);







