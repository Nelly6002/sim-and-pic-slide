let generatedNumber;
function generateNumber() {
    generatedNumber = Math.floor(Math.random() * 100000000000000) + 1;
    document.getElementById("dis").innerHTML = "YOUR PIN IS: " + generatedNumber
}

function validateNumber() {
    const userInput = document.getElementById('numberInput').value;
    if (userInput !== "*311*" + generatedNumber +'#') {
        alert("Number not matched! Please try again.");
        return;
    }
    document.getElementById("disp").innerHTML = "succesful! "
   
}