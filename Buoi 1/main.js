console.log("Xin chào");

let name = "Bùi Hiên";
console.log(name);

name = 19;
console.log(name);

const email = "hien@techmaster.vn";
console.log(email);

// email = "a@gmail.com";
// console.log(email);

let firstName = "Nguyễn";
let lastName = "Văn A";
console.log(firstName + " " + lastName);

console.log(`${firstName} ${lastName}. Năm nay tôi ${2022 - 1995} tuổi`);

// Function
function sum(a, b) {
  return a + b;
}

let data = sum(4, 5);
console.log(data);

// First class function
// 1 function có thể gán cho 1 biến => function expresstion

// Higher order function
// 1 function có thể truyền vào như là 1 tham số cho function khác
// 1 function có thể return về 1 function khác

// function expresstion
let sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(5, 5));

// arrow function
let sum2 = (a, b) => {
  return a + b;
};

// thuc hanh 1
// Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau
// ”A” nếu mark >= 85
// ”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
// ”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
// Các trường hợp còn lại in ra “D”
function findMark(mark) {
  if (mark >= 85) {
    return "A";
  }
  if (mark >= 70 && mark < 85) {
    return "B";
  }
  if (mark >= 40 && mark < 70) {
    return "C";
  }
  return "D";
}
console.log(findMark(75));

// thuc hanh 2
// Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
function findNumber(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(findNumber(5, 6));

//thuc hanh 3
// Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
function checkNumber(a) {
  let ketQua = "";
  if (a < 0) {
    return (ketQua = "Là số âm");
  }
  if (a > 0) {
    return (ketQua = "Là số dương");
  }
  return (ketQua = "Là số 0");
}
console.log(checkNumber(-5));

//thuc hanh 4
// Bài 4: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
function checkChanLe(b) {
  if (b % 2 == 0) {
    return "Là số chẵn";
  }
  return "Là số lẻ";
}
console.log(checkChanLe(5));

//thuc hanh 5
//Bài 5: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
function checkChiaHet(c) {
  if (c % 3 == 0 && c % 5 == 0) {
    return true;
  }
  return false;
}
console.log(checkChiaHet(15));

//thuc hanh 6
// Bài 6: Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
function checkSum(a, b, c) {
  if (c == a + b) {
    return true;
  }
  return false;
}
console.log(checkSum(4, 7, 10));

// thuc hanh SwitchCase

//bai 1
let day = 0;
switch (day) {
  case 0: {
    console.log("Đây là Chủ Nhật");
    break;
  }
  case 1: {
    console.log("Đây là Thứ Hai");
    break;
  }
  case 2: {
    console.log("Đây là Thứ Ba");
    break;
  }
  case 3: {
    console.log("Đây là Thứ Tư");
    break;
  }
  case 4: {
    console.log("Đây là Thứ Năm");
    break;
  }
  case 5: {
    console.log("Đây là Thứ Sáu");
    break;
  }
  case 6: {
    console.log("Đây là Thứ Bảy");
    break;
  }
  default: {
    console.log("Không hợp lệ");
    break;
  }
}

//bai 2
let month = 10;
switch (month) {
  case 1:
  case 2:
  case 3: {
    console.log("Mùa Xuân");
    break;
  }
  case 4:
  case 5:
  case 6: {
    console.log("Mùa Hạ");
    break;
  }
  case 7:
  case 8:
  case 9: {
    console.log("Mùa Thu");
    break;
  }
  case 10:
  case 11:
  case 12: {
    console.log("Mùa Đông");
    break;
  }
  default: {
    console.log("Mùa Covid");
    break;
  }
}

// thuc hanh vong lap
// bai 1
let randomStr = "a";
function lapChuoi(randomStr){
    let result = "";
    for(let i = 0; i < 10; i ++){
        result += randomStr;
    }
    return result;
}
console.log(lapChuoi(randomStr));

// bai 2
let currentStr = "a";
function lapChuoi1(currentStr){
    let result1 = "";
    for(let i = 0; i < 10; i ++){
       result1 += (currentStr + "-");
    }

return result1.substring(0,result1.length-1);
}
console.log(lapChuoi1(currentStr));

// bai 3
let currentStr1 = "a";
let n = 5;
function lapChuoi2(currentStr1,n){
    let result1 = "";
    for(let i = 0; i < n; i ++){
       result1 += (currentStr + "-");
    }
return result1.substring(0,result1.length-1);
}
console.log(lapChuoi2(currentStr1,n));

// bai 4
function sumChuoi(){
    let result = 0;
    for (let i = 0;i < 101;i++){
        if(i%5 == 0){
            result += i;
        }
    }
    return result;
}
console.log(sumChuoi());

// bai 5
// tinh the tich hinh cau
function thetichHinhCau(a){
  return (4*Math.PI*a*a*a)/3;
}
let ban_kinh = 5;
console.log("Thể tích hình cầu với bán kính " + ban_kinh +  " là: " + thetichHinhCau(ban_kinh));

//bai 6
function sumNewChuoi(a,b){
    let result = 0;
    if(a<b){
        for(let i = a+1; i < b;i++){
            result += i;
        }
    }
    for(let i = a-1; i > b;i--){
        result += i;
    }   
    
    return result;
}
console.log(sumNewChuoi(3,8));
console.log(sumNewChuoi(8,3));

//bai 7
//Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function checkNguyenTo(n){
  if(n < 2){
    return false;
  }
  for(let i = 2; i < n - 1; i++){
      if(n % i == 0){
        return false;
      }
  }

  return true;
}
console.log(checkNguyenTo(9));

//bai 8
//Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function sumNguyenTo(x){
  let result = 0;
  for(let j = 2; j <= x;j++){
      if(checkNguyenTo(j) == true){
        result += j;
      }
  }
  return result;
}
console.log(sumNguyenTo(10));
