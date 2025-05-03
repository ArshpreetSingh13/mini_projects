
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openSidebar'); 
const toggleIcon = document.getElementById('toggleIcon');
// const mix=document.querySelectorAll(".mix")



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



// function down(id){
    
    
//     document.getElementById(id).nextElementSibling.classList.toggle("visually-hidden")
//     document.getElementById(id).children[0].classList.toggle("rotate-180")
//     document.getElementById(id).classList.toggle("bg")
//     document.getElementById(id).classList.toggle("hover")


// }


openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    toggleIcon.classList.toggle('move');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    toggleIcon.classList.remove('move');
    
});


window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        toggleIcon.classList.remove('move');
    }
    else{
       

        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        toggleIcon.classList.toggle('move');
    }
});







