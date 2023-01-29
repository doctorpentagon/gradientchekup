var body = document.getElementById("body");

getColor1 = document.querySelector("#color1")
getColor2 = document.querySelector("#color2")


getColor1.addEventListener("input", 
(function(){body.style.background ="linear-gradient(to right, " + getColor1.value  + ", " + getColor2.value +")";
document.querySelector("p").innerHTML = body.style.background + ";"}))


getColor2.addEventListener("input", 
(function(){body.style.background ="linear-gradient(to right, " + getColor1.value  + ", " + getColor2.value +")";
document.querySelector("p").innerHTML = body.style.background + ";"}))


// "The background color at the left is " + getColor1.value + "and the righ is" + getColor2.value