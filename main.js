let advNum = document.querySelector("h1 span");
let advQuote = document.querySelector("q");
let btn = document.querySelector("button");
let apiUrl = "https://api.adviceslip.com/advice";

btn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      let data = response.slip;
      advNum.innerHTML = data.id;
      advQuote.innerHTML = data.advice;
    }).catch(error => console.error(error));
})
