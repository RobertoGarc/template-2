function iniciarMap(){ 
    let coord = {lat:0.925611 ,lng: -79.659523};
    let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
    });
    let marker = new google.maps.Marker({
    position: coord,
    map: map
    });
}

const hamburguer=document.getElementById('hamburguer');
const menu=document.getElementById('menu');

hamburguer.addEventListener('click',()=>{
    validarOpenClose(menu);
})

window.onload = function() {
    let menu_item = document.querySelectorAll('.menu-item');
    for (const item of menu_item) {
    item.addEventListener('click',()=>{
        validarOpenClose(menu);
    })
    }
}

const validarOpenClose=(element)=>{
    element.classList.toggle('show');
        if(menu.classList.contains('show'))
            hamburguer.firstChild.textContent='X';
        else
            hamburguer.firstChild.innerHTML='&#9776;';
}