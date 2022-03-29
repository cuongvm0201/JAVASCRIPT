// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
console.log("6. Thêm 1 sản phẩm bất kỳ vào trong mảng product.")
function insertNew(arr) {
    let newProducts1 = {
        name: "Iphone 14 Pro Max",
        price: 35000000,
        brand: "Apple",
        count: 5,
    }
    let newProducts2 =
    {
        name: "Samsung Galaxy S22 Ultra",
        price: 26000000,
        brand: "Samsung",
        count: 8,
    }
    //Thêm vào đầu
    // arr.unshift(newProducts, newProducts2); 
    //Thêm vào cuối
    arr.push(newProducts1, newProducts2);
    let newArr = arr.map(product => product);
    return newArr;
}
console.log(insertNew(products));

//7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log("7. Xóa tất cả sản phẩm của thương hiệu 'Samsung' trong giỏ hàng.")
// dung filter lọc các sản phẩm khác brand 'Samsung'
function deleteSamssung(arr, delete_brand) {
    return arr.filter(product => product.brand.toLowerCase() != delete_brand.toLowerCase())
}
console.log(deleteSamssung(products, "Samsung"));

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