function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open');
  }
}

let sliderAtual = 1;
exibirSlider(sliderAtual);


function avancarSlide(n) {
  exibirSlider((sliderAtual += n));
}

function irParaSlider(n) {
  exibirSlider((sliderAtual = n));
}

function exibirSlider(n) {
  let i;
  let slides = document.getElementsByClassName('slideItem');
  let pontos = document.getElementsByClassName('dot');
  if (n > slides.length) {
    sliderAtual = 1;
  }
  if (n < 1) {
    sliderAtual = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; // Oculta todos os slides
  }
  for (i = 0; i < pontos.length; i++) { // Remove a classe active de todos os pontos
    pontos[i].className = pontos[i].className.replace(' active', ''); 
  }
  slides[sliderAtual - 1].style.display = 'block';
  pontos[sliderAtual - 1].className += ' active';
}
