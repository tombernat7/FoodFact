var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[4].image);
        image.setAttribute('alt', data[4].caption);
        image.setAttribute('title', data[4].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[4].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[4].page)

    })
});