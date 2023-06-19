function circulo(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('circulo');
}

function rectangulo(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('rectangulo');
}

function gradiente(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('gradiente');
}

function gif(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('gif');
}

function ondas(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('ondas');
}

function rombo(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('rombo');
}

function triangulo(){
    const figura = document.getElementById('figura');
    figura.classList.toggle('triangulo');
}

function panel_lateral(){
    const elemento = document.getElementById('panel-lateral');
    elemento.classList.toggle('active')
}

function cambiar_bg(){
    const elemento = document.getElementById('body');
    elemento.classList.toggle('bg2')
}

function panel_superior(){
    const elemento = document.getElementById('panel-superior');
    elemento.classList.toggle('active2')
}