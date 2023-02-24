// Swiper manga must reading
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6.3,
  spaceBetween: 30,
  slideClass: 'slide',
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
// End Function

// Sign function dropdown
const DropBtn = document.getElementsByClassName('.DropBtn');
const DropDown = document.getElementById('dropdown-content');
let close = true;

function OpenDropDown() {
  DropDown.style.display = 'none'
  if (close === true) {
    DropDown.style.display = 'inherit'
    close = false;
  } else if (close === false) {
    DropDown.style.display = 'none'
    close = true;
  }
}
// mustShow..................................
document.getElementById('mustWatch-Day').addEventListener('click', function(){
  document.getElementById('mustWatch-Grid-Day').style.transform = 'translateX(0%)'
document.getElementById('mustWatch-Grid-Week').style.transform = 'translateX(0%)'
document.getElementById('mustWatch-Grid-Month').style.transform = 'translateX(0%)'
})
document.getElementById('mustWatch-Week').addEventListener('click', function(){
  document.getElementById('mustWatch-Grid-Day').style.transform = 'translateX(100%)'
  document.getElementById('mustWatch-Grid-Week').style.transform = 'translateX(100%)'
  document.getElementById('mustWatch-Grid-Month').style.transform = 'translateX(100%)'
})
document.getElementById('mustWatch-Month').addEventListener('click', function(){
document.getElementById('mustWatch-Grid-Day').style.transform = 'translateX(200%)'
document.getElementById('mustWatch-Grid-Week').style.transform = 'translateX(200%)'
document.getElementById('mustWatch-Grid-Month').style.transform = 'translateX(200%)'
})
// End .......,..............................
// Bestseries
document.getElementById('Bestseries-Day').addEventListener('click', function() {
  document.getElementById('Bestseries-Grid-Day').style.transform = 'translateX(0%)'
  document.getElementById('Bestseries-Grid-Week').style.transform = 'translateX(0%)'
  document.getElementById('Bestseries-Grid-Month').style.transform = 'translateX(0%)'
})
document.getElementById('Bestseries-Week').addEventListener('click', function() {
  document.getElementById('Bestseries-Grid-Day').style.transform = 'translateX(100%)'
  document.getElementById('Bestseries-Grid-Week').style.transform = 'translateX(100%)'
  document.getElementById('Bestseries-Grid-Month').style.transform = 'translateX(100%)'
})
document.getElementById('Bestseries-Month').addEventListener('click', function() {
  document.getElementById('Bestseries-Grid-Day').style.transform = 'translateX(200%)'
  document.getElementById('Bestseries-Grid-Week').style.transform = 'translateX(200%)'
  document.getElementById('Bestseries-Grid-Month').style.transform = 'translateX(200%)'
})
// End
document.getElementById('search').addEventListener('keyup', function(event) {
  let searchQuery = event.target.value;
  console.log(searchQuery)
})








let Chapters = document.getElementById('Chapters-Grid')
let database = [
  {
    titel: 'title of manga',
    image: 'images/Manga1.png',
    chapters: {
      first: '4',
      second: '2',
      last: '3',
    },
    links: {
      f: '',
      s: '',
      l: '',
    }
  },
  {
    titel: 'title of manga',
    image: 'images/Manga2.jpg',
    chapters: {
      first: '1',
      second: '2',
      last: '3',
    },
    links: {
      f: '',
      s: '',
      l: '',
    }
  }
  ]

function remderManga() {
  let baseDom = ''
  for (let i = 0; i < database.length; i++) {
    baseDom +=
      `<div class="Chapters-content">
   <h4>${database[i].titel}</h4>
  <span>
  <a href='${database[i].links.f}'>${database[i].chapters.first}</a>
  </span>
  <span>
  <a href='${database[i].links.s}'>${database[i].chapters.second}</a></span>
  <span><a href='${database[i].links.l}'>${database[i].chapters.last}</a></span>
        <img src="${database[i].image}" alt="">
      </div>`
  }
  Chapters.innerHTML = baseDom;
}
remderManga()