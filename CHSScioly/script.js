const images = ["homepageimage.jpg", "Picture2.jpg", "Picture3.jpg", "Picture4.jpg", "Picture5.jpg", "Picture6.jpg", "Picture7.jpg", "Picture8.jpg","Picture9.jpg", "Picture10.jpg", "Picture12.jpg"];
const images1 = ["Picture13.jpg", "Picture14.jpg","Picture15.jpg", "Picture16.jpg", "Picture17.jpg", "Picture18.jpg","Picture19.jpg", "Picture20.jpg", "Picture21.jpg", "Picture22.jpg"];
const images2 = ["Picture23.jpg", "Picture24.jpg","Picture25.jpg", "Picture26.jpg", "Picture27.jpg", "Picture28.jpg","Picture29.jpg", "Picture30.jpg", "Picture31.jpg"];
const images3 = ["Picture33.jpg", "Picture34.jpg", "Picture35.jpg", "Picture36.jpg", "Picture37.jpg", "Picture38.jpg","Picture32.png"];
const carousel = document.querySelector(".carousel");
const carousel1 = document.querySelector(".carousel1");
const carousel2 = document.querySelector(".carousel2");
const carousel3 = document.querySelector(".carousel3");
const interval = setInterval(function() {
    startCarousel();
}, 6000);
const interval1 = setInterval(function() {
    startCarousel1();
}, 6000);
const interval2 = setInterval(function() {
    startCarousel2();
}, 6000);
const interval3 = setInterval(function() {
    startCarousel3();
}, 6000);
var index = 1;
var index1 = 1;
var index2 = 1;
var index3 = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index >= images.length - 1) index = 1;
}
startCarousel1 = () => {
    carousel1.style.backgroundImage = `url(${images1[index1++]})`;
    carousel1.classList.remove("fade");
    void carousel1.offsetWidth;
    carousel1.classList.add("fade");
    if(index1 >= images1.length - 1) index1 = 1;
}
startCarousel2 = () => {
    carousel2.style.backgroundImage = `url(${images2[index2++]})`;
    carousel2.classList.remove("fade");
    void carousel2.offsetWidth;
    carousel2.classList.add("fade");
    if(index2 >= images2.length - 1) index2 = 1;
}
startCarousel3 = () => {
    carousel3.style.backgroundImage = `url(${images3[index3++]})`;
    carousel3.classList.remove("fade");
    void carousel3.offsetWidth;
    carousel3.classList.add("fade");
    if(index3 >= images3.length - 1) index3 = 1;
}