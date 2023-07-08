const educationBtn = document.getElementsByClassName("education-button")[0];
const skillsBtn = document.getElementsByClassName("skills-button")[0];
const projectsBtn = document.getElementsByClassName("projects-button")[0];
const intrestsBtn = document.getElementsByClassName("intrests-button")[0];

const educationSection = document.getElementById("education");
const skillSection = document.getElementById("skills");
const projectSection = document.getElementById("projects");
const intrestSection = document.getElementById("interests");

const homepage = document.getElementById("home");

educationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  educationSection.style.display = "block";
  homepage.style.display = "none";
  projectSection.style.display = "none";
  intrestSection.style.display = "none";
  skillSection.style.display = "none";
});

skillsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  skillSection.style.display = "block";
  educationSection.style.display = "none";

  homepage.style.display = "none";
  projectSection.style.display = "none";
  intrestSection.style.display = "none";
});

projectsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.style.display = "block";
  homepage.style.display = "none";
  skillSection.style.display = "none";
  educationSection.style.display = "none";
  intrestSection.style.display = "none";
});

intrestsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  intrestSection.style.display = "block";
  homepage.style.display = "none";
  projectSection.style.display = "none";
  educationSection.style.display = "none";
  skillSection.style.display = "none";
});
