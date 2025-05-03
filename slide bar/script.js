
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openSidebar'); 
const toggleIcon = document.getElementById('toggleIcon');
const profile = document.getElementById("Profile")


document.addEventListener("click",(el)=>{
    const mixs=document.querySelectorAll(".mix")

    mixs.forEach(mix => {
        if(el.target===mix){
            
            mix.nextElementSibling.classList.toggle("visually-hidden")
                mix.children[0].classList.toggle("rotate-180")
                mix.classList.toggle("bg")
                mix.classList.toggle("hover")

        }
    });

})
profile.addEventListener("click",()=>{
    profile.nextElementSibling.classList.toggle("visually-hidden")
    profile.children[1].classList.toggle("rotate-180")
    profile.classList.toggle("bg")
    profile.classList.toggle("hover")

})


openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    openBtn.classList.toggle('bi-lis')
    overlay.classList.toggle('active');
    openBtn.classList.toggle('bi-x-lg')
    toggleIcon.classList.toggle('move');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    openBtn.classList.toggle('bi-lis')
    overlay.classList.remove('active');
    openBtn.classList.toggle('bi-x-lg')
    toggleIcon.classList.remove('move');
    
});



window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 768) {
        sidebar.classList.remove('active');
        openBtn.classList.toggle('bi-lis')
        overlay.classList.remove('active');
        openBtn.classList.toggle('bi-x-lg')
        toggleIcon.classList.remove('move');
    }
    else{
       

        sidebar.classList.toggle('active');
        openBtn.classList.toggle('bi-lis')
                overlay.classList.toggle('active');

        openBtn.classList.toggle('bi-x-lg')
        toggleIcon.classList.toggle('move');
    }
});







