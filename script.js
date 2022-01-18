
var animation = bodymovin.loadAnimation({
  container: document.getElementById("name-anim"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data.json'

});

let name = document.getElementById('name-anim');
name.addEventListener("mouseover", function () {
  animation.play();
  animation.setDirection(1);
});
name.addEventListener("mouseout", function(){
  animation.pause(2);
  animation.play();
  animation.setDirection(-1);
});
/*
const navbar = document.querySelector(".navbar");
navbar.addEventListener("mouseover", function(){

});
*/
const aboutBtn = document.querySelector(".about-header");
const projectsBtn = document.querySelector(".projects-header");
const resumeBtn = document.querySelector(".resume-header");
const contactBtn = document.querySelector(".contact-header");
const closeBtn = document.querySelector(".close-btn");
const contentHeader = document.querySelector(".content-header");
aboutBtn.addEventListener("click", growContent);
projectsBtn.addEventListener("click", growContent);
resumeBtn.addEventListener("click", growContent);
contactBtn.addEventListener("click", growContent);
closeBtn.addEventListener("click", shrinkContent);

//aboutBtn.addEventListener("click", changeHeader("ABOUT"));
//projectsBtn.addEventListener("click", changeHeader("PROJECTS"));
//resumeBtn.addEventListener("click", changeHeader("RESUME"));
//contactBtn.addEventListener("click", changeHeader("CONTACT"));


function growContent(event){
  const item = event.target;
  if (item.classList[0] === "about-header"){contentHeader.innerHTML = "ABOUT";
    document.querySelector(".content-text").innerHTML = "My name is Brendan Moorehead. I am currently enrolled in my second year at the University of Guelph, studying Computer Science and pursuing a minor in Entrepreneurship. While I've yet to decide where exactly I see myself in ten years, I have a strong interest in front-end development. In my free time, I enjoy sports such as skiing, volleyball, spikeball, and hockey.";}
    document.querySelector(".content-text").style.opacity = "100";
    document.querySelector(".content-text").style.userSelect = "none";
  if (item.classList[0] === "projects-header"){
    contentHeader.innerHTML = "PROJECTS";
    document.querySelector(".content-text").innerHTML = "<b>CHA-CHIEVE</b> - A simple, reward-based todo list. <br> https://pensive-clarke-97a472.netlify.app/ <br> Users enter tasks and rewards, assigning values to each. When a user completes a task, they are rewarded with the subsequent value, which can be used towards the user generated rewards.";
    document.querySelector(".content-text").style.userSelect = "text";
  }
  if (item.classList[0] === "resume-header"){
    contentHeader.innerHTML = "RESUME";
    document.querySelector(".content-text").innerHTML = "https://drive.google.com/file/d/16-Gx6JMPZLP8fvhPAVJJgTOU-rl2WjXI/view?usp=sharing";
    document.querySelector(".content-text").style.userSelect = "text";
  }
  if (item.classList[0] === "contact-header"){
    contentHeader.innerHTML = "CONTACT";
    document.querySelector(".content-text").innerHTML = "EMAIL - bmoorehe@uoguelph.ca";
    document.querySelector(".content-text").style.userSelect = "text";
  }

  var content = document.querySelector(".navbar-content");
  content.style.width = "40%";
  document.querySelector(".fa-chevron-left").style.visibility = "visible";
  document.querySelector(".content-header").style.opacity = "100";
}

function shrinkContent(event){
  var content = document.querySelector(".navbar-content");
  content.style.width = "50px";
  document.querySelector(".fa-chevron-left").style.visibility = "hidden";
  document.querySelector(".content-text").style.opacity = "0";
  document.querySelector(".content-header").style.opacity = "0";
}
