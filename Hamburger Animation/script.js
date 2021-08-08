const menubutton=document.querySelector('.menubutton');
let menuOpen=false;

menubutton.addEventListener('click',()=>{
    if(menuOpen==false){
        menubutton.classList.add('open');
        menuOpen=true;
    }
    else{
        menubutton.classList.remove('open');
        menuOpen=false;
    }
});