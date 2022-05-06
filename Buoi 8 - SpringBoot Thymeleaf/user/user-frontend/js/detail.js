const API_URL = "http://localhost:8080/api/v1";
const btnBack = document.querySelector(".btn-back");
const addressEl = document.getElementById("address");
const nameEl = document.getElementById("fullname");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const btnSave = document.getElementById("btn-save");
const oldPass = document.getElementById("old-password");
const newPass = document.getElementById("new-password");
const btnchangePass = document.getElementById("btn-change-password");
const btnforgotPass = document.getElementById("btn-forgot-password");
const avatarEl = document.getElementById("avatar");
const avatarPreviewEl = document.getElementById("avatar-preview");
const myModal = new bootstrap.Modal(document.getElementById('modal-change-password'), {
    keyboard: false
  })
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  
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
    // Avatar
    if(!user.avatar){
        avatarPreviewEl.src="https://via.placeholder.com/200";
    }else{
        avatarPreviewEl.src=`http://localhost:8080${user.avatar}`;
    }
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

// Update pass
btnchangePass.addEventListener("click", async function(){
    try {
        let res = await axios.put(`${API_URL}/users/update-password/${id}`,
        {
            oldPassword: oldPass.value,
            newPassword: newPass.value
        })
        toastr.success(`Update Password Success`);
        myModal.hide();
        // Reset ô input;
        oldPass.value = "";
        newPass.value = "";
    } catch (error) {
        alert(error.response.data.message);
    }
} )

// Quên mật khẩu
btnforgotPass.addEventListener("click", async function(){
    let res = await axios.post(`${API_URL}/users/forgot-password/${id}`,
    {
 
    })
    toastr.success(`NewPassword: `+ res.data);
})

// Upload file dùng formData
const uploadFileAPI = file => {
    // Khai báo 1 new FormData
    const formData = new FormData();
    // Thêm file (tương ứng với ModelAttribute trong backend)
    formData.append("file", file);
    return axios.post(`${API_URL}/users/upload-file/${id}`,formData);
}

// Xử lý khi upload file
avatarEl.addEventListener("change", async function (event){
    try {
         // Lấy file
         let file = event.target.files[0];
         console.log(file);
 
         // Gọi lên server
         let res = await uploadFileAPI(file);
         console.log(res);
         avatarPreviewEl.src=`http://localhost:8080${res.data}`;
    } catch (error) {
        console.log(error);
    }     
})




const init = async () => {
    await getDistrict();
    await getUser(id);
}

init();
