// let chart = c3.generate({
//   bindto: "#chart", // HTML 元素綁定
//   data: {
//     columns: [
//       ["data1", 30, 200, 100, 400, 150, 250],
//       ["data2", 50, 20, 10, 40, 15, 25],
//     ], // 資料存放
//   },
// });
// let aw = 12
// console.log(aw);

// function talk(ew){
//   return `hi,${ew}`;
// }
// talk('早上好')

// let data = 0 ;
// function count (num){
// data+=num
// return data
// }
// count(2)

// let data2= []
// function add(name,sex){
//   let obj = {}
//   obj.name = name
//   obj.sex = sex
//   data2.push(obj)
//   return data2
// }
// add('tom','girl')

// const bmi = {
//   overthin:{
//     'state':'過輕',
//     color:'blue'
//   },
//   normal:{
//     state:'適中',
//     color:'orange'
//   }
// }

// function dd(tea){
//   console.log(`你的體重${bmi[tea].state}`)
// }
// dd('overthin')

let h1 = document.querySelector('h1')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')

let num = 0

// btn.addEventListener('mouseleave',function(e){
//   console.log('點三小')
//   h1.textContent = '幹'
// })
btn.addEventListener('click',function(e){
  num+=1
  h1.textContent = num
  console.log('crazy click');
  // console.log(e.target)
})
btn2.addEventListener('click',function(e){
  num-=1
  h1.textContent = num
})

var parent = document.getElementById('parent');
// 子元素
var child = document.getElementById('child');
parent.addEventListener('click', function () {
  console.log('Parent Capturing');
}, true);
parent.addEventListener('click', function (e) {
  console.log('Parent Bubbling');
  console.log(e.target)
}, false);
child.addEventListener('click', function () {
  console.log('Child Capturing');
}, true);
child.addEventListener('click', function () {
  console.log('Child Bubbling');
}, false);

// console.log(btn2.nodeName);

// console.log(typeof  true,'1'); 
// console.log(typeof  'Kuro','2');         
// console.log(typeof  123,'3'); 
// console.log(typeof  undefined,'4');         
// console.log(typeof  null,'5');         
// console.log(typeof  { },'6');         
// console.log(typeof  [ ],'7');  
// console.log(typeof function(){},'8');         


// let a = [1,2,3]
// let total = 0
// /*a.forEach(function(item,index,array){
//  total+=item;
// console.log(`${index},我順序多少`)
// console.log(`我是顯示陣列`,array)
// })
// */
// a.forEach((item,index,array)=>{
//   total+=item;
// console.log(`${index},我順序多少`)
// console.log(`我是顯示陣列`,array)
// })
// // console.log(a.forEach())
// console.log(total);
// console.log();
// let tot = 0
let data22 = [
  {
    num:11
  },
  {
    num:22
  },
  {
    num:33
  }
]
let dad = tot
data22.forEach((item,index,data22)=>{
  tot += item.num;
  console.log(item)
  console.log(data22)
  return tot
})
console.log(dad)