const API_URL = "http://localhost:8080/api/v1";
const btnBack = document.querySelector(".btn-back");
const addressEl = document.getElementById("address");
const nameEl = document.getElementById("fullname");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const passwordEl = document.getElementById("password");
const btnSave = document.getElementById("btn-save");
//Xử lý nút quay lại
btnBack.addEventListener("click", function(){
    window.location.href="/";
})

// Lấy danh sách tỉnh thành phố
const getDistrict = async () => {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        renderDistrict(res.data);
    } catch (error) {
        console.log(error);
    }
}
// Hiển thị tỉnh thành phố

const renderDistrict = (arr) => {
    let html = "";
    for(let i = 0 ; i < arr.length ; i++){
        const d = arr[i];
        html += `<option value="${d.name}">${d.name}</option>`;
    }
    addressEl.innerHTML = html;
}

// Tạo User mới

btnSave.addEventListener("click", async function(){
    try {
        let res = await axios.post(`${API_URL}/users`,
        {
            name: nameEl.value,
            email: emailEl.value,
            phone: phoneEl.value,
            address: addressEl.value,
            password: passwordEl.value
        })
        if(res.data){
            window.location.href = "/";
        }
    } catch (error) {
        alert(error.response.data.message);
    }
})

getDistrict();