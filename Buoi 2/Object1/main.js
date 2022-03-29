// Object

// Khởi tạo object có dữ liệu (nên sử dụng)
let user = {
    name: "Nguyễn Quốc Thái",
    age: 23,
    email: "abc@gmail.com",

    sayHello() {
        console.log("Xin chào các bạn");
    },

    eat(food){
        console.log(`Ăn món ${food}`);
    }
}

//Truy cập vào thuộc tính
console.log(user.name);
console.log(user["age"]);
user.sayHello();
user.eat("Rượu Ba Kích");

//Set lại giá trị
user.name = "Thái Nát Rượu";
console.log(user);

//Lặp Object
// C1 : Sử dụng Object.keys
// Lấy ra mảng các keys của object user
let keys = Object.keys(user) // Trả về mảng các keys
console.log(keys);
//Duyệt qua mảng các keys để in ra value tương ứng
for(let i = 0; i < keys.length; i++){
    console.log(user[keys[i]]);
}

// C2 : Sử dụng for ... in
for (const key in user) {
    console.log(user[key]);
}

//Thực hành OBJECT
