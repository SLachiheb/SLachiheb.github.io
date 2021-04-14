const section_skills = document.querySelector('.section-skills');
const container_skills = document.querySelector('.container-skills');
const skills_title = document.querySelector('.skills--title');
const text = document.querySelector('.text');
const innerText = document.querySelector('.innerText');

window.addEventListener('scroll', function () {
  text.style.display = 'inline-block';
  let distance = section_skills.getBoundingClientRect().top * -1;
  if (distance > 0) {
    skills_title.style.clipPath = `circle(${distance}px at center center)`;
    text.style.left = 150 - distance / 5 + '%';
    innerText.style.left = 150 - distance / 5 + '%';
  } else {
    text.style.display = 'none';
  }
});
