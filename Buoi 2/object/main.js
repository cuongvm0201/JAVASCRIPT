// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
function displayInfo(arr) {
    arr.forEach(product => {
        console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
    })
}

displayInfo(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function calculateTotalMoney(arr) {
    let sum = 0;
    arr.forEach(product => {
        sum += product.price * product.count
    })
    return sum
}

console.log(calculateTotalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
function findByBrand(arr, brandName) {
    return arr.filter(product => product.brand.toLowerCase() == brandName.toLowerCase())
}

console.log(findByBrand(products, "Apple"));

// 4. Tìm các sản phẩm có giá > 20000000
function findByPrice(arr, price) {
    return arr.filter(product => product.price > price)
}

console.log(findByPrice(products, 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
function findbyName(arr, name) {
    return arr.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}

console.log(findbyName(products, "PRO"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
console.log("6. Thêm 1 sản phẩm bất kỳ vào trong mảng product.")
function insertNew(arr, newObject) {
    arr.push(newObject);
    return arr.slice();
}
    let newProducts1 =
    {
        name: "Samsung Galaxy S22 Ultra",
        price: 26000000,
        brand: "Samsung",
        count: 8,
    }
console.log(insertNew(products, newProducts1));


//7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log("7. Xóa tất cả sản phẩm của thương hiệu 'Samsung' trong giỏ hàng.")
// dung filter chỉ lọc được các sản phẩm khác brand 'Samsung'
// function deleteSamssung(arr, delete_brand) {
//     return arr.filter(product => product.brand.toLowerCase() != delete_brand.toLowerCase())
// }
// console.log(deleteSamssung(products, "Samsung"));

// dùng splice xóa phần tử tại index có chứa brand 'Samsung'
function deleteSamssung1(arr, delete_brand) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].brand.toLowerCase() == delete_brand.toLowerCase()) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(deleteSamssung1(products, "Samsung"));

//8. Sắp xếp giỏ hàng theo price tăng dần
console.log("8. Sắp xếp giỏ hàng theo price tăng dần.")
function sortPrice(arr) {
    arr.sort(function (product1, product2) {
        return product1.price - product2.price;
    });
    return arr.slice();
}
console.log(sortPrice(products));

//9. Sắp xếp giỏ hàng theo count giảm dần
console.log("9. Sắp xếp giỏ hàng theo count giảm dần.")
function sortCart(arr) {
    return arr.sort(function (product1, product2) {
        return product2.count - product1.count;
    })
}
console.log(sortCart(products));

//10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log("10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng.")
function get2Product(arr) {
    let newArr = []
    while (newArr.length < 2){
        let randomNum = Math.floor(Math.random() * arr.length);
        if(newArr.includes(arr[randomNum]) == false) {
            newArr.push(arr[randomNum]);
        }
    }
   
    return newArr;
}
console.log(get2Product(products));
