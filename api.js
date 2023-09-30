const myButton = document.getElementById(`myButton`);
var myIpText = document.getElementById(`myIpText`);

myButton.addEventListener(`click`, doSomething, false)

function doSomething() {
    myIpText.textContent = IP;
}