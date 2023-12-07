let searchImg = document.querySelector('.header__User-search-img')
let searchInput = document.querySelector('.header__User-search-input')
let body = document.body
searchImg.addEventListener('click',(e)=>{
    e.stopPropagation()
    searchInput.classList.toggle('showInput');
})
searchInput.addEventListener('click',(e)=>{
    e.stopPropagation()
    searchInput.classList.toggle('showInput');
})
body.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && e.target !== searchImg) {
        searchInput.classList.remove('showInput');
    }
});