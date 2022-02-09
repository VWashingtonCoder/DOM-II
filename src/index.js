import './less/index.less'

// Your code goes here!
//set up getters
const links= document.querySelectorAll("a.nav-link");
const buttons = document.querySelectorAll("div.btn");
const contentImg = document.querySelectorAll("div.img-content");

// eventListeners(#1)_click
links.forEach(link => link.addEventListener("click", evt => {
    evt.target.style.color = "blue";
  }))
  // eventListeners(#2&3)_mouseenter&mouseleave
buttons.forEach(btn => btn.addEventListener("mouseenter", evt => {
    evt.target.style.background = 'pink';
}))
buttons.forEach(btn => btn.addEventListener("mouseleave", evt => {
    evt.target.style.background = '';
}))
// eventListener(#4)_scroll
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable){
        alert("Ready to Sign Up Now?")
    } 
})
// eventListeners(#5&#6)_mouseover&mouseout_
links.forEach(link => link.addEventListener("mouseover", evt => {
    evt.target.style.color = "green";
  }))

  links.forEach(link => link.addEventListener("mouseout", evt => {
    evt.target.style.color = "";
  }))

  // event
  document.querySelectorAll("*").forEach(elem => elem.addEventListener("dblclick", evt => {
    console.log(`event target: ${evt.target}`);
    evt.stopPropagation()
  }))