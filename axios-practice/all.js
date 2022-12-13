
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    cat1 = response.data  
    return  
 });
let cat2 = cat1
console.log(cat2)
const Name = document.querySelector('.name')
Name.innerHTML = `<div>${cat1}</div>`
 console.log(cat1)
