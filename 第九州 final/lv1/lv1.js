const apiPath = 'margo';
const token = 'u3vp4kK9t8WJ3CBvhEkbzTYum4t2';

const productWrap = document.querySelector(".productWrap"); // 產品清單的DOM
const productSelect = document.querySelector(".productSelect"); // 產品篩選器的DOM
const cartTableList = document.querySelector(".shoppingCart-tableList"); // 購物車顯示列表的DOM
const discardAllBtn = document.querySelector(".discardAllBtn"); // 清空購物車的DOM
const totalCartPrice = document.querySelector(".totalCartPrice"); // 購物車總金額的DOM

let productData = []; // 產品資訊陣列
let cartData = []; // 購物車資訊陣列

// 初始化產品清單頁面
init();

// 篩選功能：監聽篩選商品類別選單
productSelect.addEventListener("change", function (e) {
  let filter = e.target.value; // 選到的類別
  if (filter == "全部") {
    renderProductCard(productData);
    return; // 結束監聽事件
  }
  let data = productData.filter(function (value) {
    // filter 不會影響原陣列，所以要再用另一個陣列裝
    if (value.category == filter) return filter;
  });
  renderProductCard(data);
});

// 加入購物車：對產品清單綁監聽
productWrap.addEventListener("click", function (e) {
  e.preventDefault(); //取消預設觸發行為
  let addCartClass = e.target.getAttribute("class");
  // 如果不是點到加入購物車就結束監聽
  if (addCartClass !== "addCardBtn") return;

  let productID = e.target.getAttribute("data-productID");
  let productNum = 1;
  cartData.forEach(function (value) {
    if (value.product.id === productID) {
      productNum = value.quantity + 1;
    }
  });
  let productName = e.target.getAttribute("data-productName");
  addToCart(productID, productNum, productName);
});

// 刪除購物車商品
cartTableList.addEventListener("click", function (e) {
  e.preventDefault();
  const cardID = e.target.getAttribute("data-ID");
  const productName = e.target.getAttribute("data-Product");
  if (cardID == null) {
    return;
  }
  axios
    .delete(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts/${cardID}`
    )
    .then(function (response) {
      alert(`${productName}已從購物車內刪除`);
      getCartData();
    });
});

// 清空購物車
discardAllBtn.addEventListener("click", function (e) {
  e.preventDefault();
  axios
    .delete(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`
    )
    .then(function (response) {
      alert(`${response.data.message}`);
      getCartData();
    })
    .catch(function (error) {
      //console.log(error);
      alert(`${error.response.data.message} 請勿重複點擊`);
    });
});

// 送出訂購資訊
const orderInfoBtn = document.querySelector(".orderInfo-btn");

console.log(customerName, customerEmail, customerPhone);

orderInfoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (cartData.length == 0) {
    alert(`購物車內並沒有商品，無法送出訂單！`);
    return;
  }
  const orderInfoForm = document.querySelector(".orderInfo-form"); // 訂購資訊表格的DOM
  const customerName = document.querySelector("#customerName").value;
  const customerEmail = document.querySelector("#customerEmail").value;
  const customerPhone = document.querySelector("#customerPhone").value;
  const customerAddress = document.querySelector("#customerAddress").value;
  const tradeWay = document.querySelector("#tradeWay").value;

  if (
    customerName.trim().length == 0 ||
    customerEmail.trim().length == 0 ||
    customerPhone.trim().length !== 10 ||
    customerAddress.trim().length == 0
  ) {
    alert(`請確認訂購資訊是否完整填寫`);
    return;
  }
  axios
    .post(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/orders`,
      {
        data: {
          user: {
            name: customerName,
            tel: customerPhone,
            email: customerEmail,
            address: customerAddress,
            payment: tradeWay
          }
        }
      }
    )
    .then(function (response) {
      alert("訂購成功，您的訂單已送出！");
      orderInfoForm.reset();
    })
    .catch(function (error) {
      alert(`${error.response.data.message}`);
    });
});

// ---------------- 函式區 ------------------

// 初始化產品清單：接API並渲染畫面
function init() {
  getProductList();
  getCartData();
}

// 接產品API 取得產品資訊
function getProductList() {
  axios
    .get(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/products`
    )
    .then(function (response) {
      productData = response.data.products;
      // console.log(productData);
      renderProductCard(productData); // render要放在get裡面
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 渲染產品清單列表
function renderProductCard(data) {
  let str = data.reduce(function (acc, cur) {
    acc += `<li class="productCard"><h4 class="productType">新品</h4><img src=${cur.images} alt=""><a href="#" class="addCardBtn" data-productID="${cur.id}" data-productName="${cur.title}">加入購物車</a><h3>${cur.title}</h3><del class="originPrice">NT$${cur.origin_price}</del><p class="nowPrice">NT$${cur.price}</p></li>`;
    return acc; // reduce 要記得 return！！！
  }, "");
  productWrap.innerHTML = str; // 顯示在畫面上
}

// 取得購物車資料 並渲染到畫面
function getCartData() {
  axios
    .get(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`
    )
    .then(function (response) {
      cartData = response.data.carts;
      renderCart(cartData);
      let total = response.data.finalTotal;
      totalCartPrice.textContent = total; // render 購物車總金額
      console.log(2, response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderCart(cartData) {
  let str = cartData.reduce(function (acc, cur) {
    acc += ` <tr>
        <td>
            <div class="cardItem-title">
                <img src="${cur.product.images}" alt="">
                <p>${cur.product.title}</p>
            </div>
        </td>
        <td>NT$${cur.product.price}</td>
        <td>${cur.quantity}</td>
        <td>NT$${cur.product.price * cur.quantity}</td>
        <td class="discardBtn">
            <a href="#" class="material-icons"  data-ID="${
              cur.id
            }" data-Product="${cur.product.title}" >
                clear
            </a>
        </td>
    </tr>`;

    return acc;
  }, "");
  cartTableList.innerHTML = str;
}

// 加入購物車
function addToCart(id, num, name) {
  axios
    .post(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`,
      {
        data: {
          productId: id,
          quantity: num
        }
      }
    )
    .then(function (response) {
      console.log(response.data.carts);
      alert(`${name} 已加入購物車`);
      getCartData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 因為實在不太會 所以是照著參考的一步一步打
//參考網址 https://codepen.io/bzycyvdl-the-typescripter/pen/oNymPEj