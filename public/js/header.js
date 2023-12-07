let searchImg = document.querySelector('.header__User-search-img')
let searchInput = document.querySelector('.header__User-search-input')
let wrapperProfiles = document.querySelector('.header__profile-user-wrapper')
let modalProfile = document.querySelector('.info__user-modal')
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
wrapperProfiles.addEventListener('mouseover',()=>{
    setTimeout(() => {
        modalProfile.style.cssText = `height: 7rem;opacity: 1;visibility: visible;`
    }, 100);
})
wrapperProfiles.addEventListener('click',()=>{
    window.location.href = '/profiles'
})
wrapperProfiles.addEventListener('mouseleave',()=>{
    modalProfile.style.cssText = `height: 0;opacity: 0;visibility: hidden;`
})
body.addEventListener('mouseleave', () => {
    modalProfile.style.cssText = "height: 0; opacity: 0; visibility: hidden;";
});