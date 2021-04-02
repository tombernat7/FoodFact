var flag = document.getElementById('flag');

fetch('js/images.json').then(function(res){
    res.json().then(function(data){

        var image = document.createElement('img');
        image.setAttribute('src', data[7].image);
        image.setAttribute('alt', data[7].caption);
        image.setAttribute('title', data[7].caption);
        
        var caption = document.createElement('caption');
        caption.innerText = data[7].caption;

        flag.appendChild(image);
        flag.appendChild(caption);
        flag.setAttribute('href', data[7].page)

    })
});