const API_URL = "http://localhost:8080/api/v1";
const btnBack = document.querySelector(".btn-back");
const addressEl = document.getElementById("address");
const nameEl = document.getElementById("fullname");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const btnSave = document.getElementById("btn-save");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

//Gọi API
const getUser = async (id) => {
    try {
        let res = await axios.get(`${API_URL}/users/${id}`);
        console.log(res);
        renderUser(res.data);
    } catch (error) {
        console.log(error);
    }
}
// Render user
const renderUser = (user) => {
    nameEl.value = user.name;
    emailEl.value = user.email;
    phoneEl.value = user.phone;
    addressEl.value = user.address;
}

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



const init = async () => {
    await getDistrict();
    await getUser(id);
}

init();

//Xử lý nút quay lại
btnBack.addEventListener("click", function(){
    window.location.href="/";
})

// Update user
btnSave.addEventListener("click", async function(){
    try {
        let res = await axios.put(`${API_URL}/users/${id}`,
        {
            name: nameEl.value,
            phone: phoneEl.value,
            address: addressEl.value
        })
        if(res.data){
            window.location.href = "/";
        }
    } catch (error) {
        alert(error.response.data.message);
    }
} )
