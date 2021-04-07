var open_mob_menu = document.querySelector(".open_mob_menu");
var mobile_menu = document.querySelector(".mobile_menu");
var quit = document.querySelector(".mobile_menu .quit");

var swipe_up = document.querySelector(".swipe-up");
var about_us = document.querySelector(".about_us");
var about_us__link = document.querySelector(".menu .about_us__link");
var _mm__about_us__link = document.querySelector(".mobile_menu .about_us__link");

var team__link = document.querySelector(".menu .team__link");
var _mm__team__link = document.querySelector(".mobile_menu .team__link");
var team = document.querySelector(".container .team");

var services__link = document.querySelector(".menu .services__link");
var _mm__services__link = document.querySelector(".mobile_menu .services__link");
var container_services_blog = document.querySelector(".container_services_blog");

var blog__link = document.querySelector(".menu .blog__link");
var _mm__blog__link = document.querySelector(".mobile_menu .blog__link");
var blog = document.querySelector(".container .container_services_blog .blog");

var contact_us__link = document.querySelector(".menu .contact_us__link");
var _mm__contact_us__link = document.querySelector(".mobile_menu .contact_us__link");
var contact_us = document.querySelector(".container .contact_us");



var point = document.querySelectorAll(".point");
var left__block = document.querySelectorAll(".left-block .block ._text");
var right__block = document.querySelectorAll(".right-block .block ._text");

var people__block = document.querySelector(".people");
var worker__block = document.querySelectorAll(".people .worker");

var services = document.querySelector(".services_blocks");
var services__blocks = document.querySelectorAll(".services .block");


/* ТОЧКИ ПРЕДИСТОРИИ КОМПАНИИ(БЛОК НА САЙТЕ) */
function selectPoint(new__point, zone__select, version, num__block, version__effect){
    if(new__point.getBoundingClientRect().top <= zone__select){
        if(version__effect===1){
            for(let i = 0; i<4; i++){
                point[i].classList.remove("_active");
                point[i].classList.remove("_active__r");
                point[i].classList.remove("_active__l");
            }
            if(version===1){
                new__point.classList.add("_active");
                new__point.classList.add("_active__r");
                if(num__block===1){
                    right__block[0].classList.add("_show__block");
                    right__block[1].classList.add("_show__block");
                }else{
                    right__block[2].classList.add("_show__block");
                    right__block[3].classList.add("_show__block");
                }
            }else{
                new__point.classList.add("_active");
                new__point.classList.add("_active__l");
                if(num__block===1){
                    left__block[0].classList.add("_show__block");
                    left__block[1].classList.add("_show__block");
                }else{
                    left__block[2].classList.add("_show__block");
                    left__block[3].classList.add("_show__block");
                }
            }
        }else if(version__effect===2){
            worker__block[0].classList.add("_show__workers");
            worker__block[1].classList.add("_show__workers");
            worker__block[2].classList.add("_show__workers");
        }else if(version__effect===3){
            services__blocks[0].classList.add("_show__services");
            services__blocks[1].classList.add("_show__services");
            services__blocks[2].classList.add("_show__services");
        }
    }
}


/* ССЫЛКИ МЕНЮ */
function swipeLinks(link, block){
    link.addEventListener('click', function() {
        mobile_menu.style.transform = "translateX(-200%)"
        block.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


/* ОТКРЫТИЕ МЕНЮ */
function openMenu(button, menu, act){
    button.addEventListener('click', function() {
        if(act === 1) menu.style.transform = "translateX(0)"
        if(act === 0) menu.style.transform = "translateX(-200%)"
    })
}


window.addEventListener('scroll', function() {

    selectPoint(point[0], document.documentElement.clientHeight/1.88, 0, 1, 1);
    selectPoint(point[2], document.documentElement.clientHeight/1.88, 1, 1, 1);
    selectPoint(point[1], document.documentElement.clientHeight/1.88, 0, 2, 1);
    selectPoint(point[3], document.documentElement.clientHeight/1.88, 1, 2, 1);
    selectPoint(people__block, document.documentElement.clientHeight/1.64, 0, 0, 2);
    selectPoint(services, document.documentElement.clientHeight/1.64, 0, 0, 3);
    
  });


  openMenu(open_mob_menu, mobile_menu, 1);
  openMenu(quit, mobile_menu, 0);

/* ДЕСКТОПНЫЕ ССЫЛКИ */
  swipeLinks(swipe_up, about_us);
  swipeLinks(about_us__link, about_us);
  swipeLinks(team__link, team);
  swipeLinks(services__link, container_services_blog);
  swipeLinks(blog__link, blog);
  swipeLinks(contact_us__link, contact_us);

/* МОБИЛЬНЫЕ ССЫЛКИ */
  swipeLinks(_mm__about_us__link, about_us);
  swipeLinks(_mm__team__link, team);
  swipeLinks(_mm__services__link, container_services_blog);
  swipeLinks(_mm__blog__link, blog);
  swipeLinks(_mm__contact_us__link, contact_us);


