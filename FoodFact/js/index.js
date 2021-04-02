//Getting the DOM element that we need

var gallery = document.getElementById('gallery');

//Fetching the json file called images.json

fetch('js/images.json').then(function (res) {
    res.json().then(function (data) {
        data.forEach(function (el) {        //data is the array of the json file, so let's go through it

            //Creating and setting a new anchor
            var galleryItem = document.createElement('a');
            galleryItem.setAttribute('href', el.page);    
            galleryItem.setAttribute('class', 'gallery-item');  

            /*Indeed the url of the anchor is not the same as the url of the image because I wanted my gallery to
            be the support for linking to the other pages of my website (except for the fun facts page)*/

            //Creating and setting a new image
            var image = document.createElement('img');
            image.setAttribute('src', el.image);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);

            //Creating and setting a new caption
            var caption = document.createElement('caption');
            caption.innerText = el.caption;

            galleryItem.appendChild(image);     //Placing the new elements into its container
            galleryItem.appendChild(caption);

            gallery.appendChild(galleryItem);   //Placing the container into the DOM
        })
    })
});

//Getting DOM element that we need
var here = document.getElementById('here');

function randomPage() {
    var num = Math.floor(Math.random() * (8 - 0) + 0);  //Creating a random number

    switch (num) {      //In function of this number, send the user to a different page
        case 0:                          
            here.setAttribute('href', "France.html");
            break;
        case 1:
            here.setAttribute('href', "Italy.html");
            break;
        case 2:
            here.setAttribute('href', "UK.html");
            break;
        case 3:
            here.setAttribute('href', "Japan.html");
            break;
        case 4:
            here.setAttribute('href', "China.html");
            break;
        case 5:
            here.setAttribute('href', "India.html");
            break;
        case 6:
            here.setAttribute('href', "Lebanon.html");
            break;
        case 7:
            here.setAttribute('href', "Mexico.html");
            break;
        case 8:
            here.setAttribute('href', "Canada.html");
            break;
    }
}

//The code of all the other js files are very similar to this so I didn't explain them in details