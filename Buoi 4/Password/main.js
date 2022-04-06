const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", function(){
    if (input.type == "password") {
        input.type = "text";
        button.innerText = "Hide";
      } else {
        input.type = "password";
        button.innerText = "Show";
      }
})
