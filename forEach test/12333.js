// // const list = document.querySelector(".list");
// // let data = ["hello", "你好嗎？"];

// // let str2 = "<li>hello</li>";
// // data.forEach(function (item) {
// //   list.innerHTML = str2;
// //   str2 += `<li>${item}</li>`;
// // });

// // // let data1 = [
// // //     {
// // //       name:"Tom",
// // //       sex:"male"
// // //     },
// // //     {
// // //       name:"John",
// // //       sex:"male"
// // //     },
// // //     {
// // //       name:"John",
// // //       sex:"male"
// // //     },
// // //     {
// // //       name:"Mary",
// // //       sex:"woman"
// // //     },
// // //     {
// // //       name:"Jane",
// // //       sex:"woman"
// // //     }
// // //   ]

// // //   let maleNum = 0;
// // //   data1.forEach(function(item){
// // //     if(item.sex == 'male'){
// // //         maleNum+=1
// // //     }
// // //     if(item.name =='sam'){
// // //         console.log(`Tom好帥喔`)
// // //     }else {
// // //         console.log('你是誰');
// // //     }
// // //   })

// // //   alert(`男生有${maleNum}位`)

// // let data2 = [
// //   { school: "復興國中", num: 3013 },
// //   { school: "後甲國中", num: 2050 },
// //   { school: "民德國中", num: 1817 },
// //   { school: "建興國中", num: 1680 },
// //   { school: "崇明國中", num: 1544 },
// // ];

// // let TotalNum = 0;
// // data2.forEach((item) => {
// //   return (TotalNum += item.num);
// // });

// // console.log(`台南國中學生數有${TotalNum}位`);

// // let data3 = [
// //   { school: "復興國中", num: 3013 },
// //   { school: "後甲國中", num: 2050 },
// //   { school: "民德國中", num: 1817 },
// //   { school: "建興國中", num: 1680 },
// //   { school: "崇明國中", num: 1544 },
// // ];

// // let ur1 = data3.map(function(item){
// //   return item.school ;
// // })
// // console.log(`粽共有${ur1}這幾間`);

// // let ur = data3.map((item) => {
// //   return item.num * 2;
// // });
// // console.log(`台南國中學生數有${ur}位`);

// // let people = [1, 2, 3, 4, 5, 6];
// // console.log(people);
// // console.log(...typeof people);
// // console.log(...data3);
// // console.log(data3);

// // let month = ["Jan", "Feb", "Mar", "Apr"];
// // console.log(month);
// // let aMonth = month.sort(); //按照順序往前排(字母)
// // console.log(aMonth);

// // //join()將陣列連接成字串
// // // console.log("--join--");
// // // let arr = ["a", "b", "c", "d"];
// // // console.log(arr);
// // // console.log(arr.join()); //join指定要的東西
// // // console.log(arr.join(""));
// // // console.log(arr.join("-"));

// let a = (x,t)=>{
//   console.log('eeeee')
// }
// console.log(a)

// let num = x => x*x
// console.log(num(2));
// let arrr = [1,2,4,5]
// let num12 = arrr.map(x=>x*x);

// const num1 = (x,r) => {
//   let a = 33
//   const xr = 222
//   return a*xr*x*r
// }

// let abc = num1(1,2)
// console.log(abc)

// let data = [1,3,5,7]

// let newData = data.map(function(item){
//   return item*2
// })

// console.log(newData)

const ul = document.querySelector(".list");
console.log(ul);

let todo = [
  {
    txt: "eeeeeeeeeee",
  },
];

function render(todo) {
  let str = "";
  todo.forEach((item, index) => {
    str += `<li data-id="${index}">
  <label class="checkbox" for="">
    <input type="checkbox" >
    <span>${item.txt}</span>
    </label>
    <br>
  <a href="#" class="delete" >x</a>  
  
  </li>`;
  });
  ul.innerHTML = str;
}
render(todo);
ul.addEventListener("click", function (e) {
  console.log(e.target.textContent,'textContent');
  console.log(e.target.innerHTML,);

  console.log(e.target.getAttribute("dataset.id"));
  console.log(e.target.getAttribute("class"));
  console.log(e.target);
});
const num1 = (x,r) => {
  let a = 33
  const xr = 222
  return a*xr*x*r
}
console.log(num1(12,2))

let data = [{name:'tom',age:23},{name:'may',age:44},{name:'eee',age:23}]

let ary = data.filter((item)=>{
  console.log(item)

  return item.age === 23

})
let ary2 = data.findIndex((item)=>{
  console.log(item)

  return item.age === 23
})
console.log(ary2);


let obj = [{name:'dd'}]

console.log(...obj,)