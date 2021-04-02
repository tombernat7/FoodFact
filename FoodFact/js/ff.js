//Getting the DOM elements

var title=document.getElementById('carTitle');
var prev=document.getElementById('carPrev');
var next=document.getElementById('carNext');
var images=document.getElementById('carI');
var cap=document.getElementById('carC');


//Fetching the json file

fetch('js/carousel.json').then(function (res) {
    res.json().then(function (data) {
        data.forEach(function (el) {  //data is the array of the json file, so let's go through it
            
            //Creating and setting a new image
            var image = document.createElement('img');
            image.setAttribute('src', el.url);
            image.setAttribute('title', el.title);
            image.setAttribute('caption', el.caption);
            images.appendChild(image);
        })

        //Calling the function setUp with data in parameter
        setUp(data);
    })
});

function setUp(json) {

    //width of one image
    var iWidth = 400;

    //current image displayed
    var iCounter = 1;

    //setting the title and the caption
    title.innerText = json[iCounter-1].title;
    cap.innerText = json[iCounter-1].caption;

    //setting the left row of the carousel
    prev.addEventListener('click', function(event) {

        event.preventDefault(); //Avoid bringing us back to the beginning of the page with each click.

        //If it's not the first image
        if(iCounter !== 1){
            --iCounter;     //Go to the previous image
        }
        else{               //If it is
            iCounter = 7;   //Go to the last image
        }
        //Moving the start of the images container so we'll see the previous image on screen
        images.style.left = iWidth - (iCounter * iWidth) + 'px';

        //Resetting title and caption 
        title.innerText = json[iCounter-1].title;
        cap.innerText = json[iCounter-1].caption;
    });

    //Same code as the left row but inverted
    next.addEventListener('click', function(event) {

        event.preventDefault();

        if(iCounter !== 7){
            ++iCounter;
        }
        else{
            iCounter = 1;
        }
        images.style.left = iWidth - (iCounter * iWidth) + 'px';
        title.innerText = json[iCounter-1].title;
        cap.innerText = json[iCounter-1].caption;
    });
}

//All these fun facts have been found on the webpage of the french media Konbini.