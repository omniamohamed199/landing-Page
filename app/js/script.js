const humbergurElm=document.querySelector('#humbergermenue');
const headerElm=document.querySelector('.header');
const OverlayElm=document.querySelector('.overlay');
const fadeElems=document.querySelectorAll('.has-fade');
const body=document.querySelector('body');
humbergurElm.addEventListener('click',function()
{
    if(headerElm.classList.contains('open'))
    {//close menue
        headerElm.classList.remove('open')
        body.classList.remove('noscroll')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }
    else{//Open menue
        headerElm.classList.add('open')
        body.classList.add('noscroll')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
        
    }
})