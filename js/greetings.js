
const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginFrom.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello" + username;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);

}

function paintGreetings(username){
  greeting.innerText = `Hello ${username};`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginFrom.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginFrom.classList.remove(HIDDEN_CLASSNAME);
  loginFrom.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(username);
}

