const goButton = document.getElementById('goButton');
const tutorCover = document.getElementById('tutorCover');
const indexCover = document.getElementById('indexCover');

const slider = document.querySelectorAll('.tutor-main');

let slideIndex = 0;
//showSlides();

const openTutor = () => {
  indexCover.style.display = 'none';
  tutorCover.style.display = 'flex';
  showSlides();
};

const openTutorPages = () => {
  //indexCover.style.display = 'none';
  tutorCover.style.display = 'flex';
  showSlidesPages();
};

const closeTutorPages = () => {
  tutorCover.style.display = 'none';
}

function showSlides() {
  let slider = document.querySelectorAll('.tutor-main');
  let tutorCover = document.getElementById('tutorCover');
  let tutorCoverStyle = window.getComputedStyle(tutorCover);
  let tutorCoverDisplay = tutorCoverStyle.display;
  //console.log(tutorCoverDisplay);

  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slider.length) {
    //slideIndex = 1;
    clearInterval();
    window.location.href = 'pages/home.html';
  }
  slider[slideIndex - 1].style.display = 'flex';
  if (tutorCoverDisplay == 'flex') {
    setTimeout(showSlides, 5000); //
  }
  //setTimeout(showSlides, 5000);
}

function showSlidesPages() {
  let slider = document.querySelectorAll('.tutor-main');
  let tutorCover = document.getElementById('tutorCover');
  let tutorCoverStyle = window.getComputedStyle(tutorCover);
  let tutorCoverDisplay = tutorCoverStyle.display;
  //console.log(tutorCoverDisplay);

  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slider.length) {
    //slideIndex = 1;
    clearInterval();
    //window.location.href = 'home.html';
    closeTutorPages();
  }
  slider[slideIndex - 1].style.display = 'flex';
  if (tutorCoverDisplay == 'flex') {
    setTimeout(showSlidesPages, 5000); //
  }
  //setTimeout(showSlides, 5000);
}
