axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

axios
  .get(
    "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?%24top=30&%24format=JSON"
  )
  .then(function (res) {
    cat1 = res.data;
    console.log(res.data);
    renderHTML();
  })
  .catch(function (error) {
    console.log(error);
  });
const ul = document.querySelector(".list");
let cat1 = [];
function renderHTML() {
  let str = "";
  cat1.forEach((item) => (str += `<li>${item.HotelName}</li>`));
  ul.innerHTML = str;
}

console.log(cat1);
