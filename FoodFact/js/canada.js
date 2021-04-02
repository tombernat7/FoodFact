var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[8].image);
        image.setAttribute('alt', data[8].caption);
        image.setAttribute('title', data[8].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[8].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[8].page)

    })
});