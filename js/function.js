function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("inputZipCode").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x)) {
        text = "please input number";
    } else {
        text = "submit success!";
    }
    document.getElementById("result").innerHTML = text;
}