var a = document.getElementById("a");
var b = document.getElementById("b");
var plus = document.getElementById("+");
var minus = document.getElementById("-");
var multiple = document.getElementById("*");
var divide = document.getElementById("/");
var result = document.querySelector(".result");
var button = document.querySelectorAll(".button");



plus.addEventListener("click", function () {
    an = parseInt(a.value);
    bn = parseInt(b.value);
    if (an !== NaN || bn !== NaN) {
        return result.innerHTML = an+bn;
    } 
});

minus.addEventListener("click", function () {
    an = parseInt(a.value);
    bn = parseInt(b.value);
    if (an !== NaN || bn !== NaN) {
        return result.innerHTML = an-bn;
    }
});

multiple.addEventListener("click", function () {
    an = parseInt(a.value);
    bn = parseInt(b.value);
    if (an !== NaN || bn !== NaN) {
        return result.innerHTML = an*bn;
    }
});

divide.addEventListener("click", function () {
    an = parseInt(a.value);
    bn = parseInt(b.value);
    if (an !== NaN || bn !== NaN) {
        return result.innerHTML = an/bn;
    }
});



/* during trying smaller version of code ;)

button.addEventListener("click", function (){
    an = parseInt(a.value);
    bn = parseInt(b.value);
    switch (an !== NaN && bn !== NaN) {
        case plus:
            return result.innerHTML = an + bn;
            
        case minus:
            return result.innerHTML = an - bn;
       
        case multiple:
            return result.innerHTML = an * bn;
          
        case divide:
            return result.innerHTML = an / bn
          
    }*/