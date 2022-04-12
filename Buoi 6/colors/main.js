const btnRandomName = document.getElementById('btn-random-name');
const btnRandomHex = document.getElementById('btn-random-hex');
const btnRandomRGB = document.getElementById('btn-random-rgb');
const listButton = document.querySelectorAll('button');
console.log(listButton);
const colorNameEl = document.getElementById("color-name");
listButton.forEach(btn =>{
    btn.addEventListener("click", async function(){
        try {
            let type = btn.dataset.type;
            //gọi API
            let res = await axios.get(`http://localhost:8080/random-color?type=${type}`)
            console.log(res);
            //Hiển thị tên color
            colorNameEl.innerText = res.data;
            //Thay đổi backgroundColor của body
            document.body.style.backgroundColor = res.data;
        } catch (error){
            alert(error.response.data.message);
        }
    })
})

