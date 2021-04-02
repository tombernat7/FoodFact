var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[5].image);
        image.setAttribute('alt', data[5].caption);
        image.setAttribute('title', data[5].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[5].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[5].page)

    })
});