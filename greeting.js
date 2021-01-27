const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

// Application에 Name 저장하는 함수
function saveName(text) {
    localStorage.setItem(USER_LS, text); // F12에서 Application에 Value값을 저장
}

// value값을 보내는 함수
function handleSubmit(event) {
    event.preventDefault(); // form에서 Enter를 눌러도 내용이 사라지지 않음
    const currentValue = input.value;

    paintGreeting(currentValue);
    saveName(currentValue);
}

// Name 물어보는 함수
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// 화면에 Name 띄워주는 함수
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

// Name 로딩하는 함수
function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // F12에서 Application에 Key값

    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();