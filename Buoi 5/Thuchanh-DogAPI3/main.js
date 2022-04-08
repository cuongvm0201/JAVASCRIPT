const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");
const listul = document.querySelector(".list-sub");
let allLi;
// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all
let showText;
async function getBreedList() {
  // Gọi API để lấy danh sách giống loài
  try {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(res);
    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message);
  } catch (error) {
    console.log(error.response.data.message);
  }
}

function renderBreed(breeds) {
  // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
  // Cách 1: Sử dụng for ... in
  // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
  let keys = Object.keys(breeds);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    console.log(breeds[keys[i]]);
    let option = document.createElement("option");
    select.appendChild(option);
    option.id = Number(i) + 1;
    option.value = Number(i) + 1;
    option.innerText = keys[i];
  }

  btn.addEventListener("click", async function () {
    try {
      //B1: Gọi API
      //Cách 1: Sử dụng fetch API mặc định
      //Cách 2: Sử dụng axios ****
      
      let res = await axios.get(`https://dog.ceo/api/breed/${showText}/list`);
      console.log(res);
      //B2: lấy kết quả từ API để gán link cho image
      // image.src = res.data.message;
      while (listul.firstChild) {
        listul.removeChild(listul.firstChild)
      }
      renderSubBreed(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  });

  return keys;
}

function renderSubBreed(subbreeds) {
  let subkeys = [];
  subkeys = subbreeds;
  if (subbreeds == "") {
    let li = document.createElement("li");
    listul.appendChild(li);
    li.innerText = "Không có Sub Breed";
  }
  for (let i = 0; i < subkeys.length; i++) {
    let li = document.createElement("li");
    listul.appendChild(li);
    li.id = Number(i) + 1;
    li.innerHTML = `<a href='#'>${subkeys[i]}</a>`;
    li.addEventListener("click", async function () {
      try {
        //B1: Gọi API
        //Cách 1: Sử dụng fetch API mặc định
        //Cách 2: Sử dụng axios ****
        let res = await axios.get(`https://dog.ceo/api/breed/${showText}/${subkeys[i]}/images/random`);
        console.log(res);
        //B2: lấy kết quả từ API để gán link cho image
        image.src = res.data.message;
        
      } catch (error) {
        console.log(error.response.data.message);
      }
    });
  }
  return subkeys;
}
function selectChanged(obj) {
  var value = obj.value;
  let message = document.getElementById('show_message');
  let listOp = document.querySelectorAll("select > option");
  for (let i = 0; i < listOp.length; i++) {
    if (value === "") {
  
      showText = "";
      return showText;
    } else if (value === listOp[i].value) {
      showText = listOp[i].text;
    }
  }
  return showText;
}
getBreedList();


