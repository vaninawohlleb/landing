window.onload = (e) => {
  let slides = [...document.getElementsByClassName('slides')];
  const arrow = document.getElementById('arrow');
  
  arrow.addEventListener('click', function(e) {
    let currentSlide = slides.find(item => item.dataset.status === 'active');
      currentIndex = slides.indexOf(currentSlide);

    if (currentIndex >= 0 && currentIndex < slides.length) {
      let nextSlide = slides[currentIndex + 1] || slides[0];
      currentSlide.removeAttribute('data-status');
      nextSlide.setAttribute('data-status', 'active');
    }
  });
}

