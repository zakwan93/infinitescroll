const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')
let photosArray = [];

const count = 10;
const apiKey = 'W_DxvRqd36eagxZhnshP0yLX2UrLVdrKN0n1B1hTbSo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Helper function to set attributes on DOM Elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}

function displayPhotos(){
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        // item.setAttribute('href', photos.links.html);
        // item.setAttribute('targer', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', phoro.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        // Catch Error Here
    }
}

getPhotos();