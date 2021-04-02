var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[6].image);
        image.setAttribute('alt', data[6].caption);
        image.setAttribute('title', data[6].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[6].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[6].page)

    })
});