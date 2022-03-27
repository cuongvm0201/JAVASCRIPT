//bai 1
//Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
function giaiThua(x) {
  let result = 1;
  let i = 1;
  while (i <= x) {
    result = result * i;
    i++;
  }
  return result;
}
console.log(giaiThua(5));

//bai 2
//Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
function reverseString(curentStr) {
  return curentStr.split("").reverse().join("");
}
console.log(reverseString("helloworld"));

//bai 3
//Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
function translateMessage(codeCountry) {
  switch (codeCountry) {
    case "VN":
    case "vn": {
      console.log("Xin Chào");
      break;
    }
    case "EN":
    case "en": {
      console.log("Hello");
      break;
    }
    case "TH":
    case "th": {
      console.log("สวัสดี");
      break;
    }
    case "JA":
    case "ja": {
      console.log("やあ");
      break;
    }
    case "CN":
    case "cn": {
      console.log("你好");
      break;
    }
    case "ES":
    case "es": {
      console.log("Hola");
      break;
    }
    case "FR":
    case "fr": {
      console.log("Bonjour");
      break;
    }
    default: {
      console.log("Error");
      break;
    }
  }
}
translateMessage("VN");

//bai 4
//Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, 
//lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
function spitString(oldString){
    if(oldString.length < 16){
        return "";
    }
    let stringSlice = oldString.substring(0,10) + "...";
    return stringSlice;
}
console.log(spitString("xinchaocacbandenvoiHaNoi"));