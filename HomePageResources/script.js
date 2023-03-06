function GoToABout() { 
    document.getElementById("AboutPage").scrollIntoView()
 }

function GoPlace(_Location){
        var _button = document.getElementById("AnimationBlob")
        
        console.log("Trigger")
        _button.style.display = "flex"
        _button.style.marginTop = "0vh"
        _button.style.backgroundColor = "rgb(255, 255, 255)"
        _button.style.marginTop = "00vh"
        setTimeout(function(){
            _button.style.marginTop = "75vh"
        },100);
        setTimeout(function(){
            _button.transition = "all 0.1s ease-in-out" 
            _button.style.transform = "scale(100)"
            _button.style.backgroundColor = "rgb(13, 17, 23)"
            _button.innerHTML = ""
            document.getElementById()
        }, 500);
        setTimeout(function(){
            window.location.href = _Location
        },1500);
}

function ChangePage(){    
}