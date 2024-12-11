var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function ad(num1, num2) {
    return num1 + num2;
}
console.log(ad(1, 6));
buttonElement.addEventListener('click', function () {
    var numOne = num1.value;
    var numTwo = num2.value;
    var result = ad(+numOne, +numTwo);
});
