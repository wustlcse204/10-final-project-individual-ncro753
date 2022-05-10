
// 1

function getAPOD(){
    var xhttp = new XMLHttpRequest();
    const data = {
        thumbs: true
    };
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4){
            var respond = JSON.parse(xhttp.responseText);
            if(respond.media_type != "video") {
                // returned a picture
                document.getElementById("IOD-place-image").src = respond.hdurl;
            } else {
                // returned a video
                document.getElementById("IOD-place-video").src = respond.url;
            }
            //document.getElementById("IOD-place").src = respond.hdurl;
            document.getElementById("IOD-date").innerHTML = respond.date;
            document.getElementById("IOD-caption").innerHTML = respond.explanation;
            console.log(respond);
            }
    }
    xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=Tg8XpSr6EYE6fdeFrMeS5cpkzf9uEELrlArmece0", true);
    xhttp.send(JSON.stringify(data));

}

getAPOD();


// APIrequested();

// async function APIrequested(){
//     let api_Key = "0rVrOia1ybcu45k1cWLqb3TwgwWYuTv9MUU3joXg";
//     let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=${api_Key}');
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     ApiData(data);
// }


// function ApiData(data){
//     document.querySelector(".IOD-caption").innerHTML += data.explaination;
//     document.querySelector(".IOD-place").innerHTML += '<img src="${data.url}">';
// }







//  archives
function openModal(element) {
    document.getElementById("modal").style.display = "block";
    console.log("opened modal")
    console.log(element.id)
    getAPODa(element.id)
        
}

function getAPODa(date){
    var xhttp = new XMLHttpRequest();
    const data = {
        thumbs: true
    };
    
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4){
            var respond = JSON.parse(xhttp.responseText);

            if(respond.media_type != "video") {
                // returned a picture
                document.getElementById("archive-place-image").src = respond.hdurl;
                document.getElementById("archive-place-video").style.display = "none";
                console.log("Result",respond.hdurl)

            } else {
                // returned a video
                document.getElementById("archive-place-video").src = respond.url;
                document.getElementById("archive-place-image").style.display = "none";
                console.log("Result-2",respond.hdurl)
            }

            document.getElementById("placeDate").innerHTML = respond.date;
            document.getElementById("placeCaption").innerHTML = respond.explanation;    
    }
    else{
        console.log("https://api.nasa.gov/planetary/apod?api_key=Tg8XpSr6EYE6fdeFrMeS5cpkzf9uEELrlArmece0&date="+date)
    }
    }
    xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=Tg8XpSr6EYE6fdeFrMeS5cpkzf9uEELrlArmece0&date="+date, true,);
    xhttp.send(JSON.stringify(data));

}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


// function showmodalImg(n) {
//     document.getElementsByClassName('').src = data.url;
// }