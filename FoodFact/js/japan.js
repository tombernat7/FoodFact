var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[3].image);
        image.setAttribute('alt', data[3].caption);
        image.setAttribute('title', data[3].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[3].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[3].page)

    })
});