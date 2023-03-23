

const title = document.querySelectorAll('.title');
const mobile = document.querySelector('.mobile');
const mobileBox = document.querySelector('.mobile-box');
const close = document.querySelector('.close');
const liBoxI = document.querySelectorAll('.li-box i');
const liBoxLi = document.querySelectorAll('.li-box li');

title.forEach(item => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('hidden');
const child = item.children;
if (child[0].style.display === 'none') {
    child[0].style.display = 'block';
}else {
    child[0].style.display = 'none';
}
if (child[1].style.display === 'block') {
    child[1].style.display = 'none';
}else {
    child[1].style.display = 'block';
}
})
})



mobile.addEventListener('click', function(){
    mobile.style.display = 'none';
    mobileBox.style.display = 'block';

})

close.addEventListener('click', function(){
    mobile.style.display = 'flex';
    mobileBox.style.display = 'none';
})



liBoxLi.forEach(e => {
    e.addEventListener('click', function(b){
     liBoxI.forEach(e=>{
            e.style.display = 'none';
          })
          const navLi = b.target.closest('li');
        navLi.previousElementSibling.style.display = 'flex';
       })
   })