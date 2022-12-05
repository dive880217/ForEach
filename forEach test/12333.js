
const list = document.querySelector(".list");
let data = [
  "hello","你好嗎？"
];

let str2 = "<li>hello</li>"
data.forEach(function(item){
    list.innerHTML = str2;
    str2+=`<li>${item}</li>`
})

// let data1 = [
//     {
//       name:"Tom",
//       sex:"male"
//     },
//     {
//       name:"John",
//       sex:"male"
//     },
//     {
//       name:"John",
//       sex:"male"
//     },
//     {
//       name:"Mary",
//       sex:"woman"
//     },
//     {
//       name:"Jane",
//       sex:"woman"
//     }
//   ]
  
//   let maleNum = 0;
//   data1.forEach(function(item){
//     if(item.sex == 'male'){
//         maleNum+=1
//     }
//     if(item.name =='sam'){
//         console.log(`Tom好帥喔`)
//     }else {
//         console.log('你是誰');
//     }
//   })
  
  
//   alert(`男生有${maleNum}位`)

let data2 = 
[{"school":"復興國中","num":3013},
{"school":"後甲國中","num":2050},
{"school":"民德國中","num":1817},
{"school":"建興國中","num":1680},
{"school":"崇明國中","num":1544}];
let TotalNum = 0

data2.forEach((item)=>{
  TotalNum+=item.num
})

console.log(`台南國中學生數有${TotalNum}位`)
alert(`台南國中學生數有${TotalNum}位`)
