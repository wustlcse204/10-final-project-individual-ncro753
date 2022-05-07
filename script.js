import apod_object_parser;

getImg = apod_object_parser.get_data('0rVrOia1ybcu45k1cWLqb3TwgwWYuTv9MUU3joXg');


var date = apod_object_parser.get_date(getImg);
var caption = apod_object_parser.get_explaination(getImg);
var title = apod_object_parser.get_title(getImg);

// function AIOD() {
//     document.body.style.background = "url(' ') no-repeat right top";
//   }