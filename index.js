const imgIconMenu = document.querySelector('.img-icon-menu');
const navBar = document.querySelector('.nav-bar');
const imgClose = document.querySelector('.img-close');
const arrowDown = document.querySelector('.arrow-down');
const arrowDownCompany = document.querySelector('.arrow-down-company');
const subMenuUno = document.querySelector('.submenu-one');
const subMenuDos = document.querySelector('.submenu-two');


imgIconMenu.addEventListener('click' , () => {
    navBar.classList.toggle('ocultar');
});

imgClose.addEventListener('click' , () => {
    navBar.classList.add('ocultar');
});

arrowDown.addEventListener('click' , subMenOne);

function subMenOne () {
   
    const isSubmenuOneClose = subMenuUno.classList.contains('ocultar');
    if(isSubmenuOneClose){
        arrowDown.src ='./images/icon-arrow-down.svg';
        subMenuUno.classList.replace('ocultar', 'visible');
    }else{
        subMenuUno.classList.replace('visible', 'ocultar');
        arrowDown.src ='./images/icon-arrow-up.svg';
    }
};

arrowDownCompany.addEventListener('click' , subMenTwo);

function subMenTwo ()  {
    const isSubmenuTwoClose = subMenuDos.classList.contains('ocultar');   

    if(isSubmenuTwoClose){
        arrowDownCompany.src ='./images/icon-arrow-down.svg';
        subMenuDos.classList.replace('ocultar', 'visible');
    }else{
        subMenuDos.classList.replace('visible', 'ocultar');
        arrowDownCompany.src ='./images/icon-arrow-up.svg';
    }
}



