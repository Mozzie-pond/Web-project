
function watchTrailer() {
  window.open("https://www.rockstargames.com/videos/rkoCtr1r", "_blank");
}

function scrollSlider(direction) {
  const slider = document.getElementById("gameSlider");
  const scrollAmount = 320;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
