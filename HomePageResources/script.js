
function GoToABout() { 
    document.getElementById("AboutPage").scrollIntoView()
 }

function GoPlace(_Location){
        var _button = document.getElementById("AnimationBlob")
        
        console.log("Trigger")
        _button.style.display = "flex"
        _button.style.marginTop = "0vh"
        _button.style.backgroundColor = "rgb(255, 255, 255)"
        setTimeout(function(){
            _button.style.marginTop = "75vh"
        },100);
        setTimeout(function(){
            _button.transition = "all 0.1s ease-in-out" 
            _button.style.transform = "scale(100)"
            _button.style.backgroundColor = "rgb(13, 17, 23)"
            document.getElementById("Home").display = "none"
        }, 500);
        setTimeout(function(){
            
            window.location.href = _Location
        },800);
        setTimeout(function(){
            _button.style.transform = "scale(1)"
            document.getElementById("Home").display = ""
            _button.style.display = "none"
            _button.style.marginTop = "0vh"
        }, 801)
}

function ChangePage(){    
}