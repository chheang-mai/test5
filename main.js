document.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    if(window.scrollY){
        header.classList.add('scrolled')

    } else{
        header.classList.remove('scrolled')
    }
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((element) => {
    observer.observe(element);
});
alert(hello)