const swiper = new Swiper('.swiper', {
	spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});



// open-burger

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open")
  })
})

// sclose-link

const link = document.querySelector(".header__list");

 link.addEventListener("click", function () {
    document.querySelector("header").classList.remove("open")
  })


// stop-scroll

document.getElementById("burger").addEventListener("click", function () {
  document.body.classList.toggle("stop-scroll")
})

link.addEventListener("click", function () {
  document.body.classList.remove("stop-scroll")
})

// search

  document.getElementById("search").addEventListener("click", function () {
    document.querySelector(".search-box").classList.add("open")
  })

  document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".search-box").classList.remove("open")
})

  document.getElementById("search").addEventListener("click", function () {
    document.querySelector(".header__logo").classList.add("close")
  })

  document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".header__logo").classList.remove("close")
  })

document.getElementById("search").addEventListener("click", function () {
    document.querySelector(".burger").classList.add("close")
  })

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".burger").classList.remove("close")
  })

// tabs

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Get a NodeList of all .demo elements
const demoClasses = document.querySelectorAll('.swiper-pagination-bullet');

// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
  element.setAttribute("aria-label", "Слайд");
});

// Access the first element in the NodeList
demoClasses[0];
