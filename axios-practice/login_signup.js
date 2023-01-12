//https://hexschool-tutorial.herokuapp.com/api/signup 註冊網址
//https://hexschool-tutorial.herokuapp.com/api/signin 登入網址

// SignUP
const account = document.querySelector(".account");
const password = document.querySelector(".password");
const signUpBtn = document.querySelector(".signUpBtn");
signUpBtn.addEventListener("click", function (e) {
  // console.log('aa') success
  SignUpFn();
});

account.addEventListener('click',function(e){
    console.log(account)
    console.log(e.target.type)
    console.log(e.target.getAttribute('class'))


})

function SignUpFn() {
  let obj = {};
  obj.email = account.value;
  obj.password = password.value;

  if (account.value == "" || password.value == "") {
    alert("填寫正確格式");
    return;
  }

  //   console.log(obj); success
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signup", obj)
    .then(function (response) {
      if (response.data.message == "帳號註冊成功") {
        alert("account signup success ");
      } else {
        alert("account signup not success ");
        account.value = "";
        password.value = "";
      }
      account.value = "";
      password.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}
// Login
const loginAccount = document.querySelector(".loginAccount");
const loginPassword = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", function (e) {
  LoginFn();
});

function LoginFn() {
  let obj = {};
  obj.email = loginAccount.value;
  obj.password = loginPassword.value;

  if (loginAccount.value == "" || loginPassword.value == "") {
    alert("填寫正確格式");
    return;
  }

  //   console.log(obj); success
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signin", obj)
    .then(function (response) {
      if (response.data.message == "帳號登入成功") {
        alert("login success ");
      } else {
        alert("login not success ");
        loginAccount.value = "";
        loginPassword.value = "";
      }
      loginAccount.value = "";
      loginPassword.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}
