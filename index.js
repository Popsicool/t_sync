const reveal = () => {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 150
    if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('showAnim')
    }
    else{
        reveals[i].classList.remove('showAnim')
    }
    }
}
window.addEventListener('scroll', reveal)


function toggleClassAndDisplay(element) {
    element.classList.toggle('suprow');
    element.classList.toggle('suprow2');
    const part2 = element.querySelector('.part2');
    part2.classList.toggle('active');
    const img = element.querySelector('.col-ic');
    img.src = img.src.includes('col.png') ? './img/exp.png' : './img/col.png';
}