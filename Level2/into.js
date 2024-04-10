const blockct=document.querySelector(".sm-block")
const hamburger=document.querySelector("#dash")
console.log(blockct.style.display);
function clickfn(){
    if(blockct.style.display===''){
        if(window.innerWidth<=600){
            blockct.style.display='block';
            hamburger.classList.remove("fa-bars")
            hamburger.classList.add("fa-close")
        }
        


    }
    else if(blockct.style.display==='block'){
        blockct.style.display='';
        hamburger.classList.remove("fa-close")
        hamburger.classList.add("fa-bars")
    }
}