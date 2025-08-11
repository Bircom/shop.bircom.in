(function(){
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('side-menu');
  function openMenu(){
    menu.classList.add('open');
    menu.setAttribute('aria-hidden','false');
    toggle.setAttribute('aria-expanded','true');
    var first = menu.querySelector('a');
    if(first) first.focus();
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu(){
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden','true');
    toggle.setAttribute('aria-expanded','false');
    toggle.focus();
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
  toggle.addEventListener('click', function(e){
    if(menu.classList.contains('open')) closeMenu(); else openMenu();
  });
  menu.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'a') closeMenu();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });
  document.addEventListener('click', function(e){
    if(menu.classList.contains('open')){
      var target = e.target;
      if(!menu.contains(target) && target !== toggle){
        closeMenu();
      }
    }
  });
  window.addEventListener('resize', function(){
    if(window.innerWidth >= 920 && menu.classList.contains('open')) closeMenu();
  });
})();