document.getElementById("muudaVarvi").addEventListener("click", function() {
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("p").style.color = "red";
});
