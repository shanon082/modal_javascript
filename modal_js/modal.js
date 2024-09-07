let startbtn = document.getElementById('clickme');
let closebtn = document.getElementById('closebtn');
let popcard = document.getElementById('info');
let body = document.getElementById('contain');

startbtn.addEventListener('click',function(){
    popcard.style.display = 'flex';
    body.style.backgroundColor = 'rgba(0,0,0,0.6)';
    
});

closebtn.addEventListener('click',function(){
    popcard.style.display = 'none';
    body.style.backgroundColor = 'transparent';
});

window.addEventListener('click',function(event){
    if(event.target === popcard){
        popcard.style.display = 'none';
        body.style.backgroundColor = 'transparent';
    }
});