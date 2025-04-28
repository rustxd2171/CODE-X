window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  const modeToggle = document.getElementById('modeToggle');
  const snippet = document.getElementById('snippet');
  const example = document.getElementById('example');
  const code = document.getElementById('code');
  const web = document.getElementById('web');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (modeToggle) modeToggle.innerHTML = 'Light Mode <i class="bx bxs-sun"></i>';
    if (snippet) snippet.style.backgroundColor = '#333';
    if (example) example.style.color = '#fff';
    if (code) code.style.color = '#fff';
    if (web) web.style.color = '#fff';
  } else {
    document.body.classList.remove('dark-mode');
    if (modeToggle) modeToggle.innerHTML = 'Dark Mode <i class="bx bxs-moon"></i>';
    if (snippet) snippet.style.backgroundColor = '#fff';
    if (example) example.style.color = '#222';
    if (code) code.style.color = '#1f1d1d';
    if (web) web.style.color = '#1f1d1d';
  }
};




const snippet = document.getElementById('snippet');
const x = document.getElementById('example');
const code = document.getElementById('code');
const future = document.getElementById('future');
const web = document.getElementById('web');
const html = document.getElementById('html');
const result = document.getElementById('result');
const modeToggle = document.getElementById('modeToggle');
snippet.style.transition = '1s';

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    snippet.style.backgroundColor = '#333';
    x.style.color = '#fff';
    code.style.color = '#fff';
    future.style.color = '#fff';
    web.style.color = '#fff';
    html.style.color = '#fff';
    result.style.color = '#fff';
    modeToggle.innerHTML = 'Light Mode <i class="bx bxs-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    snippet.style.backgroundColor = '#fff';
    x.style.color = '#1f1d1d';
    code.style.color = '#1f1d1d';
    future.style.color = '#1f1d1d';
    web.style.color = '#1f1d1d';
    html.style.color = '#1f1d1d';
    result.style.color = '#1f1d1d';
    modeToggle.innerHTML = 'Dark Mode <i class="bx bxs-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});


// card animation on scroll
window.addEventListener('scroll', () => {
  const element = document.querySelector('.morepar');
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    element.classList.add('show');
  }
});

//Map
const map = document.getElementById('map');
const info = document.getElementById('info');
const mapbtn = document.getElementById('mapbtn');

mapbtn.addEventListener('click', function () {
  if (map.style.display === 'none') {
    map.style.display = 'block'
    info.style.display = 'none'
    mapbtn.textContent = 'Hide Map'
  }
  else {
    map.style.display = 'none'
    info.style.display = 'block'
    mapbtn.textContent = 'Show Map'
  }
});

//hamburger menu
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

//loading...
document.getElementById("loading-spinner").style.display = "flex";
setTimeout(() => {
  document.getElementById("loading-spinner").style.display = "none";
}, 2000);

