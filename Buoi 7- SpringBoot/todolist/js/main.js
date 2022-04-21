const API_URL = "http://localhost:8080/api/v1";
let todos = [];

function getTodosAPI(status) {
  switch (status) {
    case "all": {
      return axios.get(`${API_URL}/todos`);
    }
    case "unactive": {
      return axios.get(`${API_URL}/todos?status=false`);
    }
    case "active": {
      return axios.get(`${API_URL}/todos?status=true`);
    }
    default: {
      return axios.get(`${API_URL}/todos`);
    }
  }
}

async function getTodos(status) {
  try {
    let res = await getTodosAPI(status);
    console.log(res);
    todos = res.data;

    renderTodos(res.data);
  } catch (error) {
    console.log(error);
  }
}
//truy cập vào các thành phần
const todoListEl = document.querySelector(".todo-list");
function renderTodos(arr) {
  // xóa hết nội dung đang có
  todoListEl.innerHTML = "";
  // kiểm tra mảng có rỗng hay không (có danh sách todo hay không)
  if (arr.length == 0) {
    todoListEl.innerHTML = "Không có công việc nào trong danh sách";
    return;
  }

  //Sử dụng vòng lặp để render
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    html += `<div class="todo-item ${t.status ? "active-todo" : ""}">
        <div class="todo-item-title">
            <input type="checkbox" 
            ${t.status ? "checked" : ""} 
            onclick="toggleStatus(${t.id})"
            />
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update">
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick="deleteTodo(${t.id})")>
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>`;
  }

  todoListEl.innerHTML = html;
}

// Xóa công việc

async function deleteTodo(id) {
  try {
    //gọi API xóa
    await axios.delete(`${API_URL}/todos/${id}`);

    // xóa ở mảng ban đầu
    todos.forEach((todo, index) => {
      if (todo.id == id) {
        todos.splice(index, 1);
      }
    });
    //Sau khi xóa thì render lại giao diện
    renderTodos(todos);
  } catch (error) {
    console.log(error);
  }
}

// Thêm công việc
// Truy cập vào input và button thêm

const inputTodoEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", async function () {
  try {
    // Lấy title
    let title = inputTodoEl.value;
    if (title == "") {
      alert("Vui lòng nhập dữ liệu");
      return;
    }
    //Gọi API
    let res = await axios.post(`${API_URL}/todos`, {
      title: title,
    });
    console.log(res);
    // Thêm todo mới vào trong mảng
    todos.push(res.data);
    // Hiển thị lại trên giao diện
    renderTodos(todos);
  } catch (error) {
    console.log(error);
  }
});

// Thay đổi trạng thái công việc
async function toggleStatus(id) {
  try {
    // Lấy ra công việc cần cập nhật
    let todo = todos.find((todo) => todo.id == id);

    let res = await axios.put(`${API_URL}/todos/${id}`, {
      title: todo.title,
      status: !todo.status,
    });
    if (res.data) {
      // Cập nhật lại todo trong mảng ban đầu
      todos.forEach((todo) => {
        if (todo.id == id) {
          todo.status = !todo.status;
        }
      });

      // Hiển thị lại trên giao diện
      renderTodos(todos);
    }
  } catch (error) {
    console.log(error);
  }
}

getTodos();
