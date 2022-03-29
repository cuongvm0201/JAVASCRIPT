// // Array
// let arr = [];
// arr[0] = "Hello";
// arr[1] = true;
// arr[2] = 10;

// console.log(arr);

// let numbers = [1,2,3,4,5];

// //In ra phần tử của array
// for(let i = 0;i < numbers.length;i++){
//   console.log(numbers[i]);
// }

// //In ra phần tử của array foreach
// numbers.forEach(function(value, index){
//   console.log(`${value} - ${index}`);
// });
// console.log("--------")
// //In ra phần tử của array foreach với arrow function
// numbers.forEach((value,index) => {
//   console.log(`${value} - ${index}`);
// });

// //Tổng các phần tử của array
// let total = 0;
// for(let i = 0;i < numbers.length;i++){
//   total += numbers[i];
// }
// console.log(total);

// //
// let arr1 = [1,12,10,2,3];
// let arr2 = [1,2,3];
// let text = "1,2,3";

// console.log(arr1 == arr2); //false
// console.log(arr1 != arr2); //true
// console.log(arr1 == text); //true
// console.log(arr1.sort() == arr1); //true
// //sap xep binh thuong se la theo string
// console.log(arr1.sort());

// //sap xep theo kiểu number
// console.log(arr1.sort((a,b) => a- b));

//map
let numbers = [1,2,3,4];
//tạo mảng mới với cách phổ thông
let newArr = [];
for(let i = 0;i < numbers.length;i++){
  newArr[i] = numbers[i] * 2;
}
//tạo mảng mới với map
let newArr2 = numbers.map(ele => ele * 2);

//filter = for + if
// let is0dd = value => value % 2 == 1;
// let arr0dd = numbers.filter(is0dd);
let arr0dd = numbers.filter(ele => ele % 2 == 1);
console.log(arr0dd);


//find: for + if + break 
//Giá trị đầu tiên tìm thấy
let firstOddNumber = numbers.find(ele => ele % 2 == 1);
console.log(firstOddNumber);

//findIndex
// Chỉ mục cảu giá trị đầu tiên tìm thấy
let firstOddIndex = numbers.findIndex(ele => ele % 2 == 1);
console.log(firstOddIndex);

// some()
// Chỉ 1 phần tử thỏa mãn điều kiện => true
// Không có phần tử nào thỏa mãn điều kiện => false
console.log(numbers.some(ele => ele > 5));
console.log(numbers.some(ele => ele >= 4));


// every()
// Chỉ 1 phần tử k thỏa mãn điều kiện => false
// Tất cả phần tử thỏa mãn điều kiện => true
console.log(numbers.every(ele => ele > 1));
console.log(numbers.every(ele => ele > 0));

//bai 1
//Viết function tìm số lớn nhất trong mảng

function findMax(arr){
  arr.sort((a,b) => a- b);
  return arr[arr.length-1];
}
let newNums = [1,4,5,8,6,3,2,7];
console.log(findMax(newNums));
console.log("--------")
//bai 3
function convertArr(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
      newArr[i] = arr[i]%2;
  }
  return newArr;
}
let oldArr = [4,2,5,6,2,7];
console.log(convertArr(oldArr));

//bai 3 dung map
console.log(oldArr.map(ele => ele%2));

//bai 4
//Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
function repeatString(str){
  let strArr = [];
  for(let i = 0 ; i < 10 ; i++){
    strArr[i] = str;
    // strArr.push(str);
  }
  return strArr.join("");
}
let newString = 'a';
console.log(repeatString(newString));

// Thực hành 2
//bai 1
//Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
function checkElementExist(arr, number){
  return arr.some(ele => ele == number);
}
console.log(checkElementExist([1,2,3,4,5],6));


//bai 2
//Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
function checkElementExist1(arr, number){
  let result = [];
  result = arr.filter(ele => ele > number);
  return result;
}
console.log(checkElementExist1([1,2,3,4,5],3));

//bai 3
//Viết function để tạo mã màu HEX ngẫu nhiên.
function randomHexCode(){
  let engArr = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
  let kytu = "#";
  let hexcodeArr = [];
  for (let i = 0; i < 6; i++){
    let rand = engArr[Math.floor(Math.random() * engArr.length)];
    hexcodeArr.push(rand);
  }
  return kytu + hexcodeArr.join("");
}
console.log(randomHexCode());

//bai 4
//Viết function để tạo mã màu RGB ngẫu nhiên.
//------------------


//OBJECT - Lý thuyết

