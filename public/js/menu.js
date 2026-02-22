(function(){
  function findNav(el){return el.closest('nav')||el.closest('[class*="elementor"]');}
  document.addEventListener('click',function(e){
    var toggler=e.target.closest('.elementskit-menu-toggler');
    if(!toggler)return;
    e.preventDefault();
    var nav=findNav(toggler);if(!nav)return;
    var container=nav.querySelector('.elementskit-menu-container');
    var overlay=nav.querySelector('.elementskit-menu-overlay');
    if(!container)return;
    var isOpen=container.classList.contains('active');
    if(isOpen){
      container.classList.remove('active');
      if(overlay)overlay.classList.remove('active');
    }else{
      container.classList.add('active');
      if(overlay)overlay.classList.add('active');
    }
  });
  // Close on overlay click
  document.addEventListener('click',function(e){
    if(!e.target.classList.contains('elementskit-menu-overlay'))return;
    var nav=findNav(e.target);if(!nav)return;
    var container=nav.querySelector('.elementskit-menu-container');
    if(container)container.classList.remove('active');
    e.target.classList.remove('active');
  });
  // Submenu toggle in mobile
  document.addEventListener('click',function(e){
    var toggle=e.target.closest('.elementskit-dropdown-has > a');
    if(!toggle)return;
    var li=toggle.parentElement;
    var sub=li.querySelector('.elementskit-dropdown');
    if(!sub)return;
    var container=li.closest('.elementskit-menu-container');
    if(container&&container.classList.contains('active')){
      e.preventDefault();
      sub.style.display=sub.style.display==='block'?'none':'block';
    }
  });
})();
