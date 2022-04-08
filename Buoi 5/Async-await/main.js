let money = 50;

function buyIphone() {
  return new Promise(function (resolve, reject) {
    if (money >= 40) {
      resolve("Mua iphone 14 pro max thôi");
    } else {
      reject("Cày tiếp để đủ tiền");
    }
  });
}
// Hứa tiếp: mua iphone còn tiền thì mua con airpod (4tr)
function buyAirpod() {
  return new Promise(function (resolve, reject) {
    if (money - 40 - 4 >= 0) {
      resolve("Mua thêm airpod");
    } else {
      reject("Không đủ tiền mua airpod");
    }
  });
}
// const buy = async () => {

// }
async function buy() {
  try {
    let res = await buyIphone();
    console.log(res);

    let res1 = await buyAirpod();
    console.log(res1);
  } catch (error) {
      console.log(error);
  }

  return "Uống rượu";
}


buy()
.then(res => console.log(res))
.catch(err => console.log(err))
