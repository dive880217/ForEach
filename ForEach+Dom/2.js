const list = document.querySelector('.list')
// list.innerHTML = '<li>www</li>' // test success

let data = [
    {
        sex : 'male',
        name : 'Tom',
        age : 12
     },
     {
        sex : 'female',
        name : 'May',
        age : 16
     },
     {
        sex : 'male',
        name : 'Jom',
        age : 22
     },
     {
        sex : 'female',
        name : 'BlackTea',
        age : 43
     },
     {
        sex : 'female',
        name : 'Ash',
        age : 24
     }
]

let set = {
    male : 0,
    female: 0,
} 
// if web updata, data with fn
function init(){
    data.forEach((item)=>{
        if(item.sex === 'female'  ){
         set.female+=1 
        } else if(item.sex === 'male'){
         set.male+=1 
        }
        let content = `<li>${item.sex},${item.name},${item.age}</li>`
        set += content
     })
     list.innerHTML = set
}
init()
// console.log(set)
