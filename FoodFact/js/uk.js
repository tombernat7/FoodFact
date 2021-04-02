var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[2].image);
        image.setAttribute('alt', data[2].caption);
        image.setAttribute('title', data[2].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[2].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[2].page)

    })
});