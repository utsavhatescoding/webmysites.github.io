const ToggleButton=document.getElementsByClassName('toggle-button')[0]
const NavLink=document.getElementsByClassName('navlink')[0]

ToggleButton.addEventListener('click',()=>{
    console.log("This is runnung");
    NavLink.classList.toggle('active')
    ToggleButton.classList.toggle('rotate')
});

