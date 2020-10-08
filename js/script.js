$('.slider__inner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    dots: true
});

$('.sales__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
});


let tabs = document.querySelectorAll('.tabs');
let contents = document.querySelectorAll('.contents');

let brandsAll = document.querySelector('.brands-all.first');
let filterItem = document.querySelectorAll('.filter__item');

for (let i = 0; i < filterItem.length; i++) {
    filterItem[i].onclick = () => brandsAll.hidden = true;
}

for (let x = 0; x < tabs.length; x++) {
    for (let i = 0; i < tabs[x].children.length; i++) {
        tabs[x].children[i].addEventListener('click', function(e) {
            e.preventDefault();
            for (let j = 0; j < tabs[x].children.length; j++) {
                tabs[x].children[j].classList.remove('active');
                contents[x].children[j].classList.remove('active');
            }
            tabs[x].children[i].classList.add('active');
            contents[x].children[i].classList.add('active');
        });
    }
}