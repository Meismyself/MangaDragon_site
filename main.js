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
const mustDay = document.getElementById('mustWatch-Grid-Day');
const mustWeek = document.getElementById('mustWatch-Grid-Week');
const mustMonth = document.getElementById('mustWatch-Grid-Month');

function OpenmustDay() {
  mustDay.style.transform = 'translateX(0%)'
  mustWeek.style.transform = 'translateX(0%)'
  mustMonth.style.transform = 'translateX(0%)'
}

function OpenmustWeek() {

  mustDay.style.transform = 'translateX(100%)'
  mustWeek.style.transform = 'translateX(100%)'
  mustMonth.style.transform = 'translateX(100%)'
}

function OpenmustMonth() {
  mustDay.style.transform = 'translateX(200%)'
  mustWeek.style.transform = 'translateX(200%)'
  mustMonth.style.transform = 'translateX(200%)'
}
// End .......,..............................
// Bestseries
const bestDay = document.getElementById('BestSeries-Grid-Day');
const bestWeek = document.getElementById('BestSeries-Grid-Week');
const bestMonth = document.getElementById('BestSeries-Grid-Month');

function OpenBestDay() {
  bestDay.style.transform = 'translateX(0%)'
  bestWeek.style.transform = 'translateX(0%)'
  bestMonth.style.transform = 'translateX(0%)'
}

function OpenBestWeek() {

  bestDay.style.transform = 'translateX(100%)'
  bestWeek.style.transform = 'translateX(100%)'
  bestMonth.style.transform = 'translateX(100%)'
}

function OpenBestMonth() {
  bestDay.style.transform = 'translateX(200%)'
  bestWeek.style.transform = 'translateX(200%)'
  bestMonth.style.transform = 'translateX(200%)'
}
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
    image: 'images/Manga1.png',
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