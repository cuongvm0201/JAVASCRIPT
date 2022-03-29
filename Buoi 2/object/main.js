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


