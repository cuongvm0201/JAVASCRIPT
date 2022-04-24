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

    renderTodos(todos);
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
            <button class="btn btn-update" onclick="updateTitle(${t.id})">
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
let isUpdate = false;
let idUpdate = null;
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
      // Nếu isUpdate == true thì cho phép cập nhật
      // Ngược lại isUpdate == false thì cho phép thêm
   if (isUpdate) {

    // Tìm công viêc có id = idUpdate
     let todo = todos.find((todo) => todo.id == idUpdate);

    // Sửa lại tiêu đề của công việc đó = nội dung trong ô input
     todo.title = title;

    // Thực hiện cập nhật
     updateTodo(todo);
 } else {

    // Thực hiện thêm công việc
     createTodo(title);
 }

 inputTodoEl.value = "";
  
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
//Truy cập 3 nút radio
const todo_option_item = document.querySelectorAll(".todo-option-item input");
function getOptionSelected() {
  for (let i = 0; i < todo_option_item.length; i++) {
      if (todo_option_item[i].checked) {
          return todo_option_item[i].value;
      }
  }
}

todo_option_item.forEach((btn) => {
  btn.addEventListener("change", function () {
      let optionSelected = getOptionSelected();
      getTodos(optionSelected);
  });
});



// API thêm công việc
function createTodoAPI(title) {
  return axios.post(`${API_URL}/todos`, {
      title: title
  });
}

// Hàm xử lý việc thêm
async function createTodo(title) {
  try {
     // Gọi API tạo todo
      const res = await createTodoAPI(title);

     // Khi có kết quả trả về từ server thì thêm vào trong mảng todos
      todos.push(res.data)

      // Render ra ngoài giao diện
      renderTodos(todos);
  } catch (error) {
      console.log(error);
  }
}

// API Update công việc

function updateTodoAPI(todoUpdate) {
  return axios.put(`${API_URL}/todos/${todoUpdate.id}`, {
      title: todoUpdate.title,
      status: todoUpdate.status
  });
}
// Hàm xử lý việc update
async function updateTodo(todoUpdate) {
  try {
     // Gọi API cập nhật
      let res = await updateTodoAPI(todoUpdate);

     // Cập nhật lại trong mảng todos
      todos.forEach((todo, index) => {
          if (todo.id == todoUpdate.id) {
              todos[index] = res.data;
          }
      });

     // Thay đổi giao diện về ban đầu
     btnAdd.innerText = "Thêm";

     // Reset lại biến sau khi đã cập nhật thành công
      isUpdate = false;
      idUpdate = null;

      renderTodos(todos);
  } catch (error) {
      console.log(error);
  }
}


function updateTitle(id) {
  let title;

 // Tìm kiếm công việc muốn cập nhật và lưu lại giá trị title
  todos.forEach((todo) => {
      if (todo.id == id) {
          title = todo.title;
      }
  });

 // Đổi tên "THÊM" -> "CẬP NHẬT"
  btnAdd.innerText = "CẬP NHẬT";

 // Hiển thị tiêu đề cần cập nhật lên ô input
 inputTodoEl.value = title;
 inputTodoEl.focus();

 // Lưu lại id của công việc cần cập nhật và cho phép cập nhật
  idUpdate = id;
  isUpdate = true;
}

getTodos();
