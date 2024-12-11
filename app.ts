const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement; 
const buttonElement = document.querySelector('button')!;

function ad(num1: number, num2: number) {
    if (typeOf num1 === "number" && typeOf num2 === "number") {
        return num1 + num2;
    }
    else if (typeOf num1 === "string" && typeOf num2 === "string") {
        return num1 + "" + num2
    }
    return +num1+ +num2
}

console.log(ad(1, 6));

if (buttonElement) {
    
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = ad(+num1, +num2)
    const stringResult = ad(num1, num2);
    console.log(stringResult);
    console.log(ad(true, false));
})   
};
