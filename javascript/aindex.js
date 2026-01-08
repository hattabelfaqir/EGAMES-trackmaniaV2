// const timerElement = document.querySelector('.box-time');

// if (timerElement) {
//   const targetDate = new Date(2025, 11, 24);
//   targetDate.setHours(15, 0, 0, 0);

//   function updateTimer() {
//     const now = new Date();
//     let diff = targetDate - now;
//     if (diff < 0) diff = 0;

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     timerElement.textContent =
//      `${hours.toString().padStart(2,'0')}:
//       ${minutes.toString().padStart(2,'0')}:
//       ${seconds.toString().padStart(2,'0')}`;
//   }

//   updateTimer();
//   setInterval(updateTimer, 1000);
// }


//const 

const finale_time = Date.parse("Jan 24 2026 14:00:00");


function getCurrentTime(){
	return new Date();
}

function leadZero(num){
	return num < 10 ? `0${num}` : `${num}`
}


function countdownManager(target_time,countdown_element, callback){
	const interval = setInterval(()=>{
		const current_time = getCurrentTime().getTime();
		let time_left_in_s = (target_time - current_time)/1000;

		if(time_left_in_s > 0 ){
			const days_left = Math.floor(time_left_in_s / 86400);
			const hours_left = Math.floor((time_left_in_s % 86400) / 3600) ;
			const minutes_left = Math.floor((time_left_in_s % 3600) / 60) ;
			const seconds_left = Math.floor(time_left_in_s % 60);
			countdown_element.innerText = `${leadZero(days_left)}j : ${leadZero(hours_left)}h : ${leadZero(minutes_left)}m : ${leadZero(seconds_left)}s`;
		}else{
			callback();
			window.clearInterval(interval);
		}
	},1000)
}


countdownManager(finale_time,document.querySelector(".countdown"),()=>{
	document.querySelector(".countdown-flavor-text").innerText = "Le tournoi est en cours";
})

// MENU BERGER

const burger = document.querySelector('.burger');
const menuburger = document.querySelector('.menu-burger');

if (burger && menuburger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuburger.classList.toggle('active');
  });
}


// ANIMATION BACKRAND


const blob = document.getElementById("animer")

if (blob) {

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;
  let isActive = false;
  let idleTimeout;
  let time = 0;
  
  function animer() {
    if(!isActive) {
      time += 0.003;
      targetX = window.innerWidth / 2 + Math.cos(time) * window.innerWidth * 0.15;
      
      targetY = window.innerHeight / 2 + Math.sin(time * 1.2) * window.innerHeight * 0.15;
    }
    currentX += Math.round((targetX - currentX) * 0.05);
    currentY += Math.round((targetY - currentY) * 0.05);

    blob.style.left = `${currentX}px`;
    blob.style.top  = `${currentY}px`;

    requestAnimationFrame(animer);
  }
  animer();
    
  window.addEventListener("pointermove", (e) => {
    isActive = true;
    
    targetX = e.clientX;
    targetY = e.clientY;

    blob.classList.add("paused");

    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      isActive = false;
      blob.classList.remove("paused");
    }, 1200)
  })
}


// LIVE TWITCH

(function () {
  const container = document.getElementById("twitch-embed");

  if (!container) {
    console.warn("conteneur introuvable.");
    return;
  }

  if (typeof Twitch === "undefined" || typeof Twitch.Embed === "undefined") {
    console.warn("Twitch embed: API Twitch non chargée.");
    return;
  }

  new Twitch.Embed("twitch-embed", {
    channel: "grimtix180qi",            // Ta chaîne Twitch
    width: "100%",                      // Largeur responsive // Par toucher
    height: "100%",                     // Hauteur responsive // Par toucher
    parent: [                           // Obligatoire pour la sécurité // Par toucher 
      "tonsite.com",                    // Remplace par ton domaine 
      "www.tonsite.com"                 // Remplace par ton domaine 
    ],
    layout: "video"                     // Juste la vidéo, pas de chat // Par toucher
  });
})();

/// Sliders img

const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider div");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

if (slider && slides && prev && next) {
  
  let index = 0;
  
  function Slider() {
  
    slides.forEach(slide => {
      slide.classList.remove("active")
    })
  
    slides[index].classList.add("active");
  
    const slideWidth = slides[index].offsetWidth + 48;
  
    slider.style.transform = `translateX(${-(index * slideWidth)}px)`;
  }
  
  next.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
        index = 0;
      }
    Slider();
  })
  
  prev.addEventListener("click", () => {
    index--;
    if (index <= - 1) {
      index = slides.length - 1;
    }
    Slider();
  });
  
  Slider();
}

// POPEP footer

const legalmodal = document.getElementById('legal-modal');
const Politiquemodal = document.getElementById('Politique-modal');
const modalclose = document.querySelectorAll('.modal-close');
const btnfooter = document.getElementById('btn-footer');
const btnfooterr = document.getElementById('btn-footerr');
const modaloverlay = document.querySelectorAll('.modal-overlay')

if (legalmodal && Politiquemodal && modalclose && btnfooter && btnfooterr && modaloverlay) {
 
  btnfooter.addEventListener('click', () => {
    legalmodal.classList.add('active');
  })
  
  btnfooterr.addEventListener('click', () => {
    Politiquemodal.classList.add('active');
  })
  
  modalclose.forEach(btnclose => {
    btnclose.addEventListener('click', () => {
      legalmodal.classList.remove('active');
      Politiquemodal.classList.remove('active');
    })
  });
  
  modaloverlay.forEach(closebtn => {
    closebtn.addEventListener('click', (e) => {
      if (e.target === closebtn) {
        legalmodal.classList.remove('active');
        Politiquemodal.classList.remove('active');
      }
    })
  });
}


