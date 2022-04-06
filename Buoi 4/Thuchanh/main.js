//bai 1
function randrom_item() {
    let items = new Array;
    items[0] = "Ở cái xã hội này phải chịu khó làm, chịu khó học hỏi, khắc có tiền. Nay không kiếm được nhiều thì kiếm được ít, mình tích tiểu thành đại, mình chưa có thì mình không được chơi bời. Mình chưa có thì mình đừng có ăn chơi lêu lổng, đừng có a dua a tòng, đàn đúm.";
    items[1] = "Chưa có thì mình phải làm, làm được bao nhiêu thì mình tiết kiệm, mình tích tiểu thành đại. Là một thằng đàn ông, kể cả mình bỏ ra 3 năm để làm ăn, kiếm tiền làm vốn chỉ làm ăn thôi, không giao lưu với đéo ai hết. Bởi vì khi các bạn đã không có tiền ý, đi giao lưu thì các bạn chỉ có thiệt thôi.";
    items[2] = "Còn xã hội này, sống muốn được người ta tôn trọng thì mình phải tôn trọng người khác trước, Muốn người ta quý mình thì mình phải quý người ta trước. Những người cho mình vay tiền, lúc mình khó khăn, lúc mình khổ, lúc mình vỡ nợ, không phải vì người ta ngu, không phải vì người ta dại, mà vì chính người đó mình nên tôn trọng, bởi những người đó coi mình là anh em bạn bè thì những lúc mình vỡ nợ, khó khăn, khổ người ta mới đưa tiền cho mình vay.";
    items[3] = "Những người có tiền, không phải người ta ngu đâu, không phải người ta thừa tiền đâu. Người ta coi mình quan trọng hơn tiền bạc, người ta mới giúp lúc mình khó khăn, lúc mình khổ. Còn anh em, bạn bè chơi với nhau, có ăn thì tìm đến có đòn thì tìm đi. Những cái loại đấy là ăn anh, ăn em.";
    items[4] = "Tao có sai, nhưng không sai với người thân, anh em ruột thịt của tao, người tôn trọng tao. Là người đàn ông cố gắng làm vì cái gì. Tất cả chỉ vì đứa con của mình, vì tương lai của vợ con mình thôi, chứ vì cái gì. Để cho vợ con mình, nó vượt khó vượt khổ. Mình có chấp nhận hi sinh, hi sinh một tý có sao, có tương sau này. Hi sinh đời bố, củng cố cho đời con."
    items[5] = "Anh em mình sinh ra đã đéo ở vạch đích rồi. Chấp đéo gì mấy thằng sinh ra đã ở vạch đích rồi nó còn cần cái gì đâu. Mình sinh ra là từ con số 0. Mình phải cô gắng. Từ con số 0 mà đi lên được mới là đẳng cấp. Chứ còn chúng nó sinh ra ở vạch đích rồi, nó làm sao hiểu được cảm giác của anh em mình, ra xã hội, vừa phải đối mặt nguy hiểm, vừa phải đánh đổi bằng máu, hi sinh, bán lưng cho đất, bán mặt cho trời, phải cày tiền như con chó, thức đêm thức hôm.";
    randomItems = Math.floor(Math.random() * items.length);
    document.getElementById("text").innerText = items[randomItems];
}


//bai 2
function randomHexCode(){
    let engArr = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    let kytu = "#";
    let hexcodeArr = [];
    for (let i = 0; i < 6; i++){
      let rand = engArr[Math.floor(Math.random() * engArr.length)];
      hexcodeArr.push(rand);
    }
    return kytu + hexcodeArr.join("");
  }

  const btn2 = document.getElementById("btn-2");
    btn2.onclick = randomHexCode;

