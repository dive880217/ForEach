const list = document.querySelector(".list");
const pickUp = document.querySelector(".filter");
// list.innerHTML = '<li>www</li>' // test success

let data = [
  {
    sex: "male",
    name: "Tom",
    age: 12,
  },
  {
    sex: "female",
    name: "May",
    age: 16,
  },
  {
    sex: "male",
    name: "Jom",
    age: 22,
  },
  {
    sex: "female",
    name: "BlackTea",
    age: 43,
  },
  {
    sex: "female",
    name: "Ash",
    age: 24,
  },
];

let set = {
  male: 0,
  female: 0,
};
// if web updata, data with function init()
function init() {
  data.forEach((item) => {
    if (item.sex === "female") {
      set.female += 1;
    } else if (item.sex === "male") {
      set.male += 1;
    }
    let content = `<li>${item.sex},${item.name},${item.age}</li>`;
    set += content;
  });
  list.innerHTML = set;
}
init();

pickUp.addEventListener("click", function (e) {
  if (e.target.value == undefined) {
    alert("沒點到按鈕,關掉提醒視窗再按一次");
    return;
  }
  let str = ""; //顯示篩選點選按鈕後的值
  data.forEach((item, index) => {
    if (item.sex == e.target.value) {
      str += `<li>
      ${item.sex},
      ${item.name},
      age :${item.age}。
      </li>`;
    }
  });
  list.innerHTML = str;
});
