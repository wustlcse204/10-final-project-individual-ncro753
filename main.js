import apod_object_parser;

getImg = apod_object_parser.get_data('0rVrOia1ybcu45k1cWLqb3TwgwWYuTv9MUU3joXg');


var date = apod_object_parser.get_date(getImg);
var caption = apod_object_parser.get_explaination(getImg);
var title = apod_object_parser.get_title(getImg);

// function AIOD() {
//     document.body.style.background = "url(' ') no-repeat right top";
//   }



// archives
function openModal() {
    document.getElementById("imgModal").style.display = "block";
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

var imgIndex = 1;
showmodalImg(imgIndex);

function currentSlide(n) {
  showmodalImg(imgIndex = n);
}

function showmodalImg(n) {
    var i;
    var modalImg = document.getElementsByClassName("lrgimg");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > modalImg.length) {imgIndex = 1}

    if (n < 1) {imgIndex = modalImg.length}

    for (i = 0; i < modalImg.length; i++) {
        modalImg[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active");
    }

    modalImg[imgIndex-1].style.display = "block";
    dots[imgIndex-1].className += "active";
    captionText.innerHTML = dots[imgIndex-1].alt;
}