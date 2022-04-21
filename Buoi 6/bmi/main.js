const btn1 = document.getElementById("btn-get");
const btn2 = document.getElementById("btn-post");
const btn3 = document.getElementById("btn-reset");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const showRes = document.getElementById("show-result");
const showMes = document.getElementById("show-message");

btn1.addEventListener("click", async function () {
  try {
    //gọi API
    let h = Number(height.value);
    let w = Number(weight.value);
    let url = `http://localhost:8080/bmi?height=${h}&weight=${w}`;

    let res2 = await axios.get(url);
    console.log(res2);
    showRes.value = res2.data;
    console.log(res2.data);
    bmiComment(Number(res2.data));
  } catch (error) {
    alert(error.response.data.message);
  }
})

btn2.addEventListener("click", async function () {
  try {
    //gọi API
    let h = Number(height.value);
    let w = Number(weight.value);
    let res1 = await axios({
      method: 'post',
      url: 'http://localhost:8080/bmi',
      data: { height: h,
        weight: w, }
    });
    console.log(res1.data);
    showRes.value = Number(res1.data);
    bmiComment(Number(res1.data));
  } catch (error) {
    alert(error.response.data.message);
  }
});

btn3.addEventListener("click",function(){
  height.value = "";
  weight.value = "";
  showRes.value ="";
  showMes.value ="";
})

function bmiComment(data){
  if (data < 18.5) {
    return showMes.value ="Thiếu cân";
  }
  if (data >= 18.5 && data <= 24.9) {
    return showMes.value ="Bình thường";
  }
  if (data >= 25 && data <= 29.9) {
    return showMes.value ="Thừa cân";
  }  
  if (data >= 30) {
    return showMes.value ="Béo phì";
  }
}
