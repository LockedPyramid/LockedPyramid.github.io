

function GoToABout() { 
    document.getElementById("AboutPage").scrollIntoView()
 }


$('#Nav button').click(function(){
    console.log($(this).first().attr("data-url"))
    

    if ($(this).first().attr("data-animation") == "false"){
        window.location.href = $(this).first().attr("data-url")
    }
    else{
        GoPlace($(this).first().attr("data-url"))
    }
        
})


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
        }, 1000)
}

function logWorking(){    
    console.log("working")
}



const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let _iteration = -52;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < _iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(_iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    _iteration += 1 /3;
  }, 30);
}
