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

// if web updata, data with function init()
function init() {
let set = '';
  data.forEach((item) => {
    // if (item.sex === "female") {
    //   set.female += 1;
    // } else if (item.sex === "male") {
    //   set.male += 1;
    // }
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
    }else  if(e.target.value == 'ALL'){
        str += `<li>
        ${item.sex},
        ${item.name},
        age :${item.age}。
        </li>`;
    }
   

  });
  list.innerHTML = str;
//   console.log(str)
});

//new data input 
const sex = document.querySelector('.sex')
const Name = document.querySelector('.Name')
const age = document.querySelector('.age')
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(e){
// console.log(sex.value,Name.value,age.value)
if(sex.value == '' || Name.value ==
''||age.value ==''){
    alert('請重新輸入正確格式')
    return
}

let obj = {}
obj.sex = sex.value
obj.name = Name.value
obj.age = age.value
data.push(obj)
init()
console.log(data)

  })
  console.log(data)
