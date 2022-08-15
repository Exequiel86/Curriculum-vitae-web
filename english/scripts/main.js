$(document).ready(function() {
  AOS.init( {

  }); 
});


var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
  let id=check.checked;
  if (id==true){
    location.href="english/index.html";
  } else{
    location.href="../index.html";
  }
}


$('a.smooth-scroll')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus();
        };
      });
    }
  }
});
