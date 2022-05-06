const API_URL = "http://localhost:8080/api/v1";
let users = [];
// API lấy danh sách user + tìm kiếm user
const getUserAPI = (keyword) => {
  let url = `${API_URL}/users`;
  if (keyword) {
    url = `${API_URL}/users/search?name=${keyword}`;
  }

  return axios.get(url);
};

// Hàm gọi API
const getUsers = async (keyword = "") => {
  try {
    let res = await getUserAPI(keyword);
    users = res.data;
    renderUsers(users);
  } catch (error) {
    console.log(error);
  }
};

// render users
// truy cập tbody
const tableContent = document.querySelector("tbody");
const renderUsers = (arr) => {
  tableContent.innerHTML = "";
  if (arr.length == 0) {
    tableContent.innerHTML = "Không có user nào trong danh sách";
    return;
  }
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    const u = arr[i];
    html += `
        <tr>
        <td>${i + 1}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.phone}</td>
        <td>${u.address}</td>
        <td>
            <a href="./detail.html?id=${u.id}" class="btn btn-success">Xem chi tiết</a>
            <button class="btn btn-danger" onclick="deleteUser(${u.id})">Xóa</button>
        </td>
    </tr>`;
  }

  tableContent.innerHTML = html;
};

// Search User
const searchEl = document.getElementById("search");
searchEl.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    let value = event.target.value;
    console.log(value);
    getUsers(value);
  }
});

// Xóa user
const deleteUser = async (id) => {
  try {
    //Hỏi trước khi xóa
    let isConfirm = confirm("Bạn có muốn xóa không");
    if (isConfirm) {
      //gọi API xóa
      await axios.delete(`${API_URL}/users/${id}`);

      // xóa ở mảng ban đầu
      users.forEach((user, index) => {
        if (user.id == id) {
          users.splice(index, 1);
        }
      });

      //Sau khi xóa thì render lại giao diện
      renderUsers(users);
    }
  } catch (error) {
    console.log(error);
  }
};

getUsers("");
