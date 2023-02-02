// Objects Data
const projects = [
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
];

const userData = {
  name: '',
  email: '',
  message: '',
};

// Header - Nav Variables
const hamburger = document.querySelector('#hamburger');
const logoContainer = document.querySelector('.logo-container');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav > ul');
const closeMobileMenu = document.querySelector('#close-mobile-menu');
const overlay = document.querySelector('#overlay');
const header = document.querySelector('header');
const navMenuList = document.querySelectorAll('.nav-menu');

// Works-Section Variables
const worksSection = document.getElementById('works-section');

// Contact-Section Variables
const contactForm = document.getElementById('contact-form');
const clientName = document.getElementById('client-name');
const clientEmail = document.getElementById('client-email');
const clientMsg = document.getElementById('client-msg');

// Functions
const renderWorksSection = () => {
  worksSection.insertAdjacentHTML('beforeend',
    `<div class="container">
      <h2>My Recent Works</h2>
      <img src="https://raw.githubusercontent.com/mwismann/mwismann.github.io/a5668d2e5a89784262bf1747248c72134396cb1c/icon-img/indicator.svg"
          alt="Horizontal Line Content Separator">
      
      <div class="works-grid-container">
      </div>
    </div>

  <div class="displayed-project-container">
  </div>`);

  const worksGridContainer = document.querySelector('.works-grid-container');
  const displayedProject = document.querySelector('.displayed-project-container');

  projects.forEach((project) => {
    worksGridContainer.insertAdjacentHTML('beforeend',
      `<div class="works-grid-card">
        <div class="works-card-meta">
            <h3>${project.name}</h3>
            <ul class="work-categories">
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
            <li>${project.technologies[3]}</li>
            </ul>

            <a href="#" class="action-btn" data-id="${project.id}">See Project</a>
        </div>
    </div>`);
  });

  const seeProjectBtn = document.querySelectorAll('.works-card-meta > a');

  const displayProject = (currentBtn) => {
    overlay.classList.add('active-alt');
    const displayIdOf = projects.findIndex((project) => project.id === +currentBtn);

    displayedProject.insertAdjacentHTML('beforeend',
      `<div class="displayed-project">
        <div class="project-snapshot-container">
          <img id="snapshot-img" src="${window.innerWidth < 768 ? projects[displayIdOf]['mobile image'] : projects[displayIdOf]['desktop image']}" alt="Three Towers standing tall">
          <img id="close-project-view" src="${window.innerWidth < 768 ? `
          https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/project-close.svg` : `
          https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/project-close-desk.svg`}" alt="An X to close the project view">
        </div>
        
        <h3 class="project-name">${projects[displayIdOf].name}</h3>
        <ul class="work-categories alt">
        </ul>
        
        <p class="project-description">
        ${projects[displayIdOf].description}
        </p>
        
        <div class="project-action-btn">
          <a href="${projects[displayIdOf].liveVersion}" class="action-btn live-btn">See Live <img src="icon-img/icon-live.svg" alt="Arrow Pointing To Upper Right Corner"></a>
          <a href="${projects[displayIdOf].source}" class="action-btn source-btn">See Source <img src="icon-img/github-white.svg" alt="GitHub logo"></a>
        </div>
      </div>`);

    const projectTechnologies = document.querySelector('.work-categories.alt');
    projects[displayIdOf].technologies.forEach((element) => {
      const li = document.createElement('li');
      li.innerHTML = element;
      projectTechnologies.appendChild(li);
    });

    const closeProjectBtn = document.getElementById('close-project-view');
    const closeProject = () => {
      overlay.classList.remove('active-alt');
      displayedProject.innerHTML = '';
    };
    closeProjectBtn.addEventListener('click', closeProject);
  };

  seeProjectBtn.forEach((btn) => btn.addEventListener('click', (e) => {
    displayProject(e.target.dataset.id);
  }));
};

const openMenu = () => {
  logoContainer.classList.add('hidden');
  hamburger.classList.add('hidden');
  nav.classList.add('active');
  navMenu.classList.add('active');
  closeMobileMenu.classList.add('active');
  overlay.classList.add('active');
  header.classList.add('active');
};

const closeMenu = () => {
  logoContainer.classList.remove('hidden');
  hamburger.classList.remove('hidden');
  nav.classList.remove('active');
  navMenu.classList.remove('active');
  closeMobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  header.classList.remove('active');
};

const renderContactInfo = () => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  clientName.value = storedUserData.name;
  clientEmail.value = storedUserData.email;
  clientMsg.value = storedUserData.message;
};

// eventListeners and Functions Calls
window.onload = renderWorksSection;
window.onload = renderContactInfo;
hamburger.addEventListener('click', openMenu);
closeMobileMenu.addEventListener('click', closeMenu);
navMenuList.forEach((element) => element.addEventListener('click', closeMenu));
clientName.addEventListener('keyup', (e) => {
  userData.name = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
clientEmail.addEventListener('keyup', (e) => {
  userData.email = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
clientMsg.addEventListener('keyup', (e) => {
  userData.message = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
contactForm.addEventListener('submit', (e) => {
  const validationCheck = clientEmail.value.toLocaleLowerCase();
  if (clientEmail.value === validationCheck) {
    clientEmail.classList.remove('error');
    contactForm.removeChild(document.querySelector('.error-msg'));
    contactForm.removeChild(document.querySelector('.suggest-msg'));
    contactForm.submit();
  } else {
    e.preventDefault();
    clientEmail.classList.add('error');
    contactForm.insertAdjacentHTML('beforeend',
      `<span class="error-msg">Please enter only lowercase letters on the email input</span>
    <span class="suggest-msg">Is <span class="correct-email">"${validationCheck}"</span> the correct address?</span>`);
  }
});