import Notiflix, { Notify } from 'notiflix';

const submitBtn = document.querySelector('.submit-btn');
const input = document.querySelector('.input');
const searchForm = document.querySelector('.search-form');
const imagesContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const API_KEY = '24549161-d9016794db06e42eaadc07c38';
const BASE_URL = 'https://pixabay.com';

input.addEventListener('input', onInput);
searchForm.addEventListener('submit', onFormSubmit);
submitBtn.addEventListener('click', searchImages);

class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
}


// const pixabayAPI = {

//     baseUrl: 'https://pixabay.com/api/',
//     key: API_KEY,
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: "true",
//     page: '1',
//     per_page: "40",

// };




function onInput() {
    const searchQuery = input.value.trim();
    console.log(searchQuery);
}

function onFormSubmit(evt) {
    evt.preventDefault();
}

function searchImages() {
    
}




