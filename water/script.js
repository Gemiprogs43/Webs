let clipRect = document.getElementById('clip-rect');
let welcomeText = document.getElementById('welcome');
let percentageText = document.getElementById("percentage");

function updateGlassFill() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollTop / docHeight, 1);
   percentageText.textContent = Math.round(progress * 100) + "%";

 
  const maxHeight = 180;
  const fillHeight = maxHeight * progress;
  const newY = 10 + (maxHeight - fillHeight);

  clipRect.setAttribute('y', newY);
  clipRect.setAttribute('height', fillHeight);

  
  if (progress > 0.3) {
    welcomeText.style.opacity = Math.min((progress - 0.3) / 0.5, 1);
  } else {
    welcomeText.style.opacity = 0;
  }
}

window.addEventListener('scroll', updateGlassFill);
updateGlassFill();
