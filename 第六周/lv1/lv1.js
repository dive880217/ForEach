let data = [];

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function(response) {
  data=response.data.data;
  rebulidData();
  });

  let str="";

function rebulidData(){
  data.forEach(item=>{
    str+=`<li class="ticketCard">
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
        </li>`
  })
  document.querySelector(".ticketCard-area").innerHTML=str;
}
//有參考別人的在自己邊看邊打出來 
//參考 https://codepen.io/yuyu850913/pen/JjZeMdY?editors=1111