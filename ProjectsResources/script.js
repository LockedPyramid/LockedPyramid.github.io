
const _ItemHeight = "10vh"

function OpenNav(){ 
        document.getElementById("NavLine1").style.height = _ItemHeight
        document.getElementById("NavLine2").style.height = _ItemHeight
        document.getElementById("NavLine3").style.height = _ItemHeight
        document.getElementById("NavLine4").style.height = _ItemHeight

       
        
        setTimeout(function(){
            document.getElementById("NavLine1Text").innerText = "Home"
            document.getElementById("NavLine2Text").innerText = "Learn"
            document.getElementById("NavLine3Text").innerText = "Docks"
            document.getElementById("NavLine4Text").innerText = "Github"
            _IsOpen = true
        }, 800)
};

function CloseNav() {  } { 
        document.getElementById("Nav").style.width = "4vw";
        document.getElementById("NavLine1").style.height = "1vh";
        document.getElementById("NavLine2").style.height = "1vh";
        document.getElementById("NavLine3").style.height = "1vh";
        document.getElementById("NavLine4").style.height = "1vh";

        document.getElementById("NavLine1Text").innerText = ""
        document.getElementById("NavLine2Text").innerText = ""
        document.getElementById("NavLine3Text").innerText = ""
        document.getElementById("NavLine4Text").innerText = ""
        
};


$("#NavItem").click(function (e) { 
    e.preventDefault();
    console.log($(this).data("GoTo"))
});