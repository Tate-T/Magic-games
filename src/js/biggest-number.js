document.getElementById("checkButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const num3 = parseFloat(document.getElementById("number3").value);
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("result").textContent = "Будь ласка, введіть дійсні числа.";
        return;
    }

    const biggestNumber = Math.max(num1, num2, num3);
    document.getElementById("result").textContent = "Найбільше число: " + biggestNumber;
});
