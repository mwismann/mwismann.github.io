const projects = [
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap','Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: 2,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap','Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: 3,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap','Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: 4,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap','Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: 5,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap','Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: 6,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'mobile image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/snapshot-portfolio-project.svg',
    'desktop image': 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/snapshot-portfolio-project-desk.svg',
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap','Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#'
  }
]

// Header - Nav Variables
const hamburger = document.querySelector('#hamburger');
const logoContainer = document.querySelector('.logo-container');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav > ul');
const closeMobileMenu = document.querySelector('#close-mobile-menu');
const overlay = document.querySelector('#overlay');
const header = document.querySelector('header');
const navMenuList = document.querySelectorAll('.nav-menu');

// Work-Section Variables
const seeProjectBtn = document.querySelectorAll('.works-card-meta > a');
const displayedProject = document.querySelector('.displayed-project-container');

// Functions
const openMenu = () => {
  logoContainer.classList.add('hidden');
  hamburger.classList.add('hidden');
  nav.classList.add('active');
  navMenu.classList.add('active');
  closeMobileMenu.classList.add('active');
  overlay.classList.add('active');
  header.classList.add('active');
}

const closeMenu = () => {
  logoContainer.classList.remove('hidden');
  hamburger.classList.remove('hidden');
  nav.classList.remove('active');
  navMenu.classList.remove('active');
  closeMobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  header.classList.remove('active');
}

const displayProject = (currentBtn) => {
  overlay.classList.add('active-alt');

  for (const project of projects) {
    if (project.id === +currentBtn) {
      displayedProject.insertAdjacentHTML('beforeend',
      `<div class="displayed-project">
      <div class="project-snapshot-container">
      <img src="${window.innerWidth < 768 ? project['mobile image'] : project['desktop image']}" alt="Three Towers standing tall">
      <img id="close-project-view" src="${window.innerWidth < 768 ? 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/project-close.svg' : 'https://raw.githubusercontent.com/mwismann/mwismann.github.io/d6dfbe842fd5e8f029bb39ea9d353585a9346d0f/icon-img/desktop/project-close-desk.svg'}" alt="An X to close the project view" onclick="closeProject()">
      </div>
      
      <h3 class="project-name">${project.name}</h3>
      <ul class="work-categories alt">
      <li>Ruby on rails</li>
      <li>css</li>
      <li>JavaScript</li>
      </ul>
      
      <p class="project-description">
      ${project.description}
      </p>
      
      <div class="project-action-btn">
      <a href="${project.liveVersion}" class="action-btn live-btn">See Live <img src="icon-img/icon-live.svg" alt="Arrow Pointing To Upper Right Corner"></a>
      <a href="${project.source}" class="action-btn source-btn">See Source <img src="icon-img/github-white.svg" alt="GitHub logo"></a>
      </div>
      </div>`);
    };
  };
}

const closeProject = () => {
  overlay.classList.remove('active-alt');
  displayedProject.innerHTML = '';
}

// eventListeners
hamburger.addEventListener('click', openMenu);
closeMobileMenu.addEventListener('click', closeMenu);
navMenuList.forEach((element) => element.addEventListener('click', closeMenu));
seeProjectBtn.forEach(btn => btn.addEventListener('click', (e) => {
  displayProject(e.target.dataset.id);
}));