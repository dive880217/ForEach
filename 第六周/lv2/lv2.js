let datalist = [];

axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
.then(res => {
  datalist = res.data.data;
  render(datalist);
}).catch(error => {
  alert("連線失敗!");
  console.log(error);
})

const list=document.querySelector(`.ticketCard-area`);
const searchCount =document.querySelector("#searchResult-text");
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const bottom = document.querySelector(".addTicket-btn");

function render(data) {
  let str="";
  console.log(data);

  data.forEach(function(item){
        str+=`
        <li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src="${item.imgUrl}" alt="">
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${item.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${item.price}</span>
              </p>
            </div>
          </div>
        </li>`;                         
  })
  list.innerHTML=str;
  searchCount.textContent = `本次搜尋共 ${data.length} 筆資料`;
};


//地區搜尋
const searchArea = document.querySelector(".regionSearch");
searchArea.addEventListener("change",function(e){
  let seachSelect = e.target.value;  
  let filterData = datalist.filter(function(value) {
      return value.area == seachSelect || seachSelect=="";
  });
  render(filterData);
})

//Add
bottom.addEventListener("click",function(e){  
  let msgBox = '';
  if (ticketRate.value > 10){
    msgBox += "套票星級不可超過 10 級\n";
  };
  if (ticketName.value.length==0){
    msgBox += "請輸入套票名稱\n";
  };

  if (msgBox){
    alert(msgBox);
    return;
  }

  let theDay = new Date();
  datalist.push({
    id : theDay.valueOf(),
    name : ticketName.value,
    imgUrl:ticketImgUrl.value,
    area: ticketRegion.value,
    description: ticketDescription.value,
    group: Number(ticketNum.value),
    price: Number(ticketPrice.value),
    rate: Number(ticketRate.value),
  });

  ticketName.value = '';
  ticketImgUrl.value = '';
  ticketRegion.value = '';
  ticketDescription.value = '';
  ticketNum.value = '';
  ticketPrice.value = '';
  ticketRate.value = '';
  searchArea.value = '';

  render(datalist);
})

render(datalist);