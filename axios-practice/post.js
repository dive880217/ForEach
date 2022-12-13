// https://hexschool-tutorial.herokuapp.com/api/signup

let obj = {
    email: 'die880217@gmail.com',
    password: '12345678'
  }
axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });