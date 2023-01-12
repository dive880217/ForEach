// let cost1 = 23
// console.log (cost1)
// var cost2 =24 
// console.log(cost2)
// var a = 12 
// var a = 34 
// console.log(a)
// function add(num1,num2){return num1,num2}
// let arr = add(1,4)
// console.log(arr)

// const title = document.querySelector('h1')

// title.textContent = '變更後的標題'
// const a = title.textContent
// console.log(a)

// let box = document.querySelector('.box')
// box.textContent = '<h2>222</h2>'

// // let arr =  [444,5,6]
// // let total = 0 
// // arr.forEach(function(item,index){
// //     total+=item
// // console.log(item);
// // console.log(index);

// // })
// // console.log(total);

// let data = [
//   {
//     num: 10
//   },
//   {
//     num: 30
//   },
//   {
//     num: 100
//   }
// ];
// // let total1 = 0;
// data.forEach(function(item, array, ary){
//   total1+=item.num;
// })
// console.log(total1);
//  function star(i) {
//         let result = " "
//         for (let j = 1; j <= i; j++) {
//             result += '*'
//         }
//             return result
        
//     }
//     function stars(ary) {
//         for (let i = 1; i <= ary; i++) {
//             console.log(star(i))
//         }
//         for (let i = ary - 1; i >= 1; i--) {
//             console.log(star(i))
//         }
//     }
//     stars(5) 
let count = 0 
function checkScore(score){
    count += 1;
    if(score>=60)
    {console.log('及格喽') 
    return'final';
    }else{console.log('不及格,岩壁喽')
    return'岩壁';}
}
checkScore(59)
checkScore(54)
checkScore(1)
checkScore(533)
console.log(`第${count}次`);

const main = document.querySelector('.main')
console.log(main)
main.innerHTML = `<h1 class="dd">iii </h1 >`

const element = document.querySelector('h1')
console.log(element);
element.innerHTML = 'eee333'
element.innerText =222
element.textContent = true

const a = document.querySelectorAll('a')
console.log(a)
a[0].setAttribute('href','https://www.notion.so/2022-JS-0c3d885aceb84ac6bf05ba74a9ac20a6')
a[0].setAttribute('class','title')
a[1].setAttribute('href','https://www.google.com/')
a[1].setAttribute('class','REE')

// https://livejs-api.hexschool.io/api/livejs/v1/customer/hds5688/products

axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?%24top=30&%24format=JSON')
  .then(function (response) {
    cat1 = response.data;
 })
  .catch(function (error) {
    console.log(error);
 });

 axios.get('https://hexschool.github.io/ajaxHomework/data.json')
 .then(function (response) {
   cat = response.data  
});
let cat1 = []
console.log(cat1)
