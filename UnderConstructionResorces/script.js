

function CloseAnimation() { 
    var _button = document.getElementById("BackButton")
    
    console.log("Trigger")
    _button.style.marginTop = "100vh"
    setTimeout(function(){
        _button.style.marginTop = "75vh"
    },500);
    setTimeout(function(){
        _button.transition = "all 0.1s ease-in-out" 
        _button.style.transform = "scale(100)"
        _button.style.backgroundColor = "rgb(13, 17, 23)"
        _button.innerHTML = ""
    },1000);
    setTimeout(function(){
        window.location.href = "/index.html"
    },1500);
    setTimeout(function(){
        _button.style.backgroundColor = "rgb(13, 17, 23)"
        _button.style.marginTop = "25vh"
        _button.style.transform = "scale(100)"
    },1501);
 }