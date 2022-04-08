// Promise: Lời hứa

// Hứa: cuối năm có đủ 40 củ thì mua con iphone 14 Pro max

let money = 44;

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

//Thực hiện nối tiếp
// buyIphone()
//   .then((res) => {
//     console.log(res);
//     return buyAirpod();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Uống rượu");
//   })

//Thực hiện song song
// buyIphone()
// .then(res => {
//     console.log(res);
// })
// .catch(res => {
//     console.log(res);
// })

// buyAirpod()
// .then(res => {
//     console.log(res);
// })
// .catch(res => {
//     console.log(res);
// })

Promise.all([buyIphone(), buyAirpod()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
