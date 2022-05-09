//import apod_object_parser;

// getImg = apod_object_parser.get_data('0rVrOia1ybcu45k1cWLqb3TwgwWYuTv9MUU3joXg');


// var date = apod_object_parser.get_date(getImg);
// var caption = apod_object_parser.get_explaination(getImg);
// var title = apod_object_parser.get_title(getImg);

// function AIOD() {
//     document.body.style.background = "url(' ') no-repeat right top";
//   }

// 2


// const url = 'https://api.nasa.gov/planetary/apod?api_key=Tg8XpSr6EYE6fdeFrMeS5cpkzf9uEELrlArmece0'
// const my_api_key = 'Tg8XpSr6EYE6fdeFrMeS5cpkzf9uEELrlArmece0';

// const getData = async () => {
//   try {
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${my_api_key}`);
//     const data = await response.json();
//     showData(data);
//   } catch (error) {
//     console.log(error)
//   }
// }

// const showData = data => {
//   document.getElementsByClassName('IOD-place').src = data.url;
//   document.getElementsByClassName('IOD-caption').textContent = data.explanation;
// }

// getData();




// 1




APIrequested();

async function APIrequested(){
    let api_Key = "0rVrOia1ybcu45k1cWLqb3TwgwWYuTv9MUU3joXg";
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=${api_Key}');
    console.log(response);
    let data = await response.json();
    console.log(data);
    ApiData(data);
}


function ApiData(data){
    document.querySelector(".IOD-caption").innerHTML += data.explaination;
    document.querySelector(".IOD-place").innerHTML += '<img src="${data.url}">';
}







//  archives
function openModal() {
    document.getElementById("imgModal").style.show = "block";
}

function closeModal() {
    document.getElementById("imgModal").style.show = "none";
}


// function showmodalImg(n) {
//     document.getElementsByClassName('').src = data.url;
// }