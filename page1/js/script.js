const nav = document.querySelector('.nav-section nav');
const menu = nav.querySelector('.nav-section nav ul');
const closeBtn = document.querySelectorAll('.close-menu');

closeBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
    if(menu.style.maxHeight){
      nav.classList.remove('opened');
      menu.style.maxHeight = null;
    }else{
      menu.style.maxHeight = menu.scrollHeight + 'px';
      nav.classList.add('opened');
    }
  });
});