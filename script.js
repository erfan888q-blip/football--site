
// assets/script.js
document.addEventListener('DOMContentLoaded', function(){
  // active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a.nav-link').forEach(a=>{
    if(a.getAttribute('href') === path || (path==='index.html' && a.getAttribute('href')==='index.html')){
      a.classList.add('active');
      a.style.background='rgba(255,255,255,0.18)';
    }
  });
});
